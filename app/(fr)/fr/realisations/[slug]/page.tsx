import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailView from "@/components/views/WorkDetailView";
import { allWork, getWorkLocalised } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";

const LOCALE = "fr" as const;

export function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWorkLocalised(LOCALE, slug);
  if (!w) return {};

  return pageMetadata({
    locale: LOCALE,
    key: { kind: "workItem", slug: w.slug },
    title: `${w.name}: ${w.tagline}`,
    description: w.description,
    ogType: "article",
    images: [w.shot ?? "/opengraph-image"],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWorkLocalised(LOCALE, slug);
  if (!w) notFound();

  return <WorkDetailView locale={LOCALE} item={w} />;
}

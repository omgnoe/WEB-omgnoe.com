import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/views/ServiceDetailView";
import { getServiceLocalised } from "@/lib/services";
import { canonicalServiceSlug, localisedServiceSlugs } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

const LOCALE = "fr" as const;

export function generateStaticParams() {
  return localisedServiceSlugs(LOCALE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonical = canonicalServiceSlug(LOCALE, slug);
  const s = canonical ? getServiceLocalised(LOCALE, canonical) : undefined;
  if (!s || !canonical) return {};

  return pageMetadata({
    locale: LOCALE,
    key: { kind: "service", canonical },
    title: s.title,
    description: s.meta,
    keywords: s.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonical = canonicalServiceSlug(LOCALE, slug);
  const s = canonical ? getServiceLocalised(LOCALE, canonical) : undefined;
  if (!s) notFound();

  return <ServiceDetailView locale={LOCALE} service={s} />;
}

import type { Metadata } from "next";
import ServicesIndexView from "@/components/views/ServicesIndexView";
import { pageMetadata } from "@/lib/metadata";
import { dict } from "@/lib/ui";

const LOCALE = "fr" as const;

export const metadata: Metadata = pageMetadata({
  locale: LOCALE,
  key: { kind: "services" },
  title: dict(LOCALE).servicesIndex.title,
  description: dict(LOCALE).servicesIndex.description,
});

export default function Page() {
  return <ServicesIndexView locale={LOCALE} />;
}

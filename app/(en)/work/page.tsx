import type { Metadata } from "next";
import WorkIndexView from "@/components/views/WorkIndexView";
import { pageMetadata } from "@/lib/metadata";
import { dict } from "@/lib/ui";

const LOCALE = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale: LOCALE,
  key: { kind: "work" },
  title: dict(LOCALE).workIndex.title,
  description: dict(LOCALE).workIndex.description,
});

export default function Page() {
  return <WorkIndexView locale={LOCALE} />;
}

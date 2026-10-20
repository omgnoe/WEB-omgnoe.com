import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import { pageMetadata } from "@/lib/metadata";
import { storyChrome } from "@/lib/story";

const LOCALE = "en" as const;

export const metadata: Metadata = pageMetadata({
  locale: LOCALE,
  key: { kind: "about" },
  title: storyChrome(LOCALE).metaTitle,
  description: storyChrome(LOCALE).metaDescription,
  ogType: "profile",
});

export default function Page() {
  return <AboutView locale={LOCALE} />;
}

import type { MetadataRoute } from "next";
import { allWork } from "@/lib/projects";
import { services } from "@/lib/services";
import { defaultLocale, locales, urlFor, type PageKey } from "@/lib/i18n";

/**
 * One sitemap, every locale, with the full alternate set per entry.
 *
 * The `alternates.languages` block is what Next renders as xhtml:link
 * hreflang rows. Without it Google treats the three language versions as
 * three competing pages instead of one page in three languages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const keys: { key: PageKey; priority: number }[] = [
    { key: { kind: "home" }, priority: 1 },
    { key: { kind: "services" }, priority: 0.9 },
    { key: { kind: "work" }, priority: 0.9 },
    { key: { kind: "about" }, priority: 0.8 },
    ...services.map((s) => ({
      key: { kind: "service" as const, canonical: s.slug },
      // The websites page is the one we actually want to rank.
      priority: s.slug === "websites" ? 0.95 : 0.9,
    })),
    ...allWork.map((w) => ({ key: { kind: "workItem" as const, slug: w.slug }, priority: 0.7 })),
  ];

  return keys.flatMap(({ key, priority }) => {
    const languages = {
      ...Object.fromEntries(locales.map((l) => [l, urlFor(l, key)])),
      "x-default": urlFor(defaultLocale, key),
    };
    return locales.map((locale) => ({
      url: urlFor(locale, key),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}

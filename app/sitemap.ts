import type { MetadataRoute } from "next";
import { allWork } from "@/lib/projects";

const SITE = "https://omgnoe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const work = allWork.map((w) => ({
    url: `${SITE}/work/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...work,
  ];
}

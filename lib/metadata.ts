import type { Metadata } from "next";
import {
  alternatesFor,
  OG_LOCALE,
  SITE,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

/**
 * Per-locale root metadata. The title/description here are the ones that
 * decide whether a Luxembourg search result gets clicked, so each locale
 * leads with the words people actually type in that language.
 */
const ROOT: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Web developer in Luxembourg | Websites, shops & apps",
    description:
      "Noe Nei builds websites, online shops and mobile apps in Luxembourg. Fast, multilingual, SEO-first builds with hosting, security and IT support from one developer.",
    keywords: [
      "web developer Luxembourg",
      "website Luxembourg",
      "freelance developer Luxembourg",
      "web design Luxembourg",
      "online shop Luxembourg",
      "app developer Luxembourg",
      "Next.js developer Luxembourg",
      "IT support Luxembourg",
      "managed hosting Luxembourg",
      "Noe Nei",
    ],
  },
  fr: {
    title: "Création de site internet au Luxembourg | Développeur web",
    description:
      "Noe Nei crée des sites internet, des boutiques en ligne et des applications mobiles au Luxembourg. Des sites rapides, multilingues et optimisés pour le référencement, avec l'hébergement, la sécurité et le support informatique par un seul développeur.",
    keywords: [
      "création site internet Luxembourg",
      "création site web Luxembourg",
      "agence web Luxembourg",
      "développeur web Luxembourg",
      "site vitrine Luxembourg",
      "boutique en ligne Luxembourg",
      "refonte site internet Luxembourg",
      "développeur freelance Luxembourg",
      "hébergement web Luxembourg",
      "Noe Nei",
    ],
  },
  de: {
    title: "Webseite erstellen lassen in Luxemburg | Webentwickler",
    description:
      "Noe Nei erstellt Webseiten, Onlineshops und mobile Apps in Luxemburg. Schnelle, mehrsprachige und suchmaschinenoptimierte Seiten, mit Hosting, Sicherheit und IT-Support von einem Entwickler.",
    keywords: [
      "Webseite erstellen Luxemburg",
      "Webseite erstellen lassen Luxemburg",
      "Webdesign Luxemburg",
      "Webentwickler Luxemburg",
      "Homepage erstellen Luxemburg",
      "Onlineshop erstellen Luxemburg",
      "Webentwicklung Luxemburg",
      "freiberuflicher Entwickler Luxemburg",
      "Webhosting Luxemburg",
      "Noe Nei",
    ],
  },
};

export function rootMetadata(locale: Locale): Metadata {
  const r = ROOT[locale];
  const home: PageKey = { kind: "home" };
  return {
    metadataBase: new URL(SITE),
    title: { default: r.title, template: "%s | Noe Nei" },
    description: r.description,
    keywords: r.keywords,
    authors: [{ name: "Noe Nei", url: SITE }],
    creator: "Noe Nei",
    alternates: alternatesFor(locale, home),
    openGraph: {
      type: "website",
      url: alternatesFor(locale, home).canonical,
      siteName: "Noe Nei",
      title: r.title,
      description: r.description,
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
      creator: "@omgnoe",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : undefined,
    category: "technology",
  };
}

/** Metadata for a sub-page: title, description and the full hreflang set. */
export function pageMetadata({
  locale,
  key,
  title,
  description,
  keywords,
  ogType = "website",
  images,
}: {
  locale: Locale;
  key: PageKey;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
  images?: string[];
}): Metadata {
  const alts = alternatesFor(locale, key);
  return {
    title,
    description,
    keywords,
    alternates: alts,
    openGraph: {
      type: ogType,
      url: alts.canonical,
      title: `${title} | Noe Nei`,
      description,
      locale: OG_LOCALE[locale],
      ...(images ? { images: images.map((url) => ({ url })) } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Noe Nei`,
      description,
      ...(images ? { images } : {}),
    },
  };
}

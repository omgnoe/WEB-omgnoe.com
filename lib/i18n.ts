/**
 * Trilingual routing + UI strings.
 *
 * English stays at the root (`/services/websites`) so the URLs Google already
 * indexed keep working. French and German live under `/fr` and `/de` with
 * *localised* path segments and service slugs, because the keyword in the URL
 * is what we are trying to rank for ("creation-site-internet", not "websites").
 *
 * Content prose (services, work, story) is translated in `*.fr.ts` / `*.de.ts`
 * override files next to the English source. Chrome strings live here.
 */

export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const SITE = "https://omgnoe.com";

/** Locale prefix: the default locale has none. */
export function prefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Localised path segments. */
const SEGMENTS: Record<Locale, { services: string; work: string; about: string }> = {
  en: { services: "services", work: "work", about: "about" },
  fr: { services: "services", work: "realisations", about: "a-propos" },
  de: { services: "leistungen", work: "referenzen", about: "ueber-mich" },
};

/**
 * Service slugs per locale. The canonical (English) slug is the key used
 * everywhere in code and data; the value is what appears in the URL.
 */
const SERVICE_SLUGS: Record<Locale, Record<string, string>> = {
  en: {
    "ios-apps": "ios-apps",
    "android-apps": "android-apps",
    "app-publishing": "app-publishing",
    websites: "websites",
    "it-support": "it-support",
    cybersecurity: "cybersecurity",
    hosting: "hosting",
    products: "products",
  },
  fr: {
    "ios-apps": "developpement-application-ios",
    "android-apps": "developpement-application-android",
    "app-publishing": "publication-app-store",
    websites: "creation-site-internet",
    "it-support": "support-informatique",
    cybersecurity: "cybersecurite",
    hosting: "hebergement-web",
    products: "produits",
  },
  de: {
    "ios-apps": "ios-app-entwicklung",
    "android-apps": "android-app-entwicklung",
    "app-publishing": "app-store-veroeffentlichung",
    websites: "webseite-erstellen",
    "it-support": "it-support",
    cybersecurity: "cybersicherheit",
    hosting: "webhosting",
    products: "produkte",
  },
};

export function serviceSlug(locale: Locale, canonical: string): string {
  return SERVICE_SLUGS[locale][canonical] ?? canonical;
}

/** Reverse lookup: the URL slug a visitor requested back to the canonical one. */
export function canonicalServiceSlug(locale: Locale, urlSlug: string): string | undefined {
  const map = SERVICE_SLUGS[locale];
  for (const [canonical, localised] of Object.entries(map)) {
    if (localised === urlSlug) return canonical;
  }
  return undefined;
}

export function localisedServiceSlugs(locale: Locale): string[] {
  return Object.values(SERVICE_SLUGS[locale]);
}

/* ---------------------------------------------------------------- paths --- */

export function homePath(locale: Locale): string {
  return prefix(locale) || "/";
}
export function servicesPath(locale: Locale): string {
  return `${prefix(locale)}/${SEGMENTS[locale].services}`;
}
export function servicePath(locale: Locale, canonical: string): string {
  return `${servicesPath(locale)}/${serviceSlug(locale, canonical)}`;
}
export function workPath(locale: Locale): string {
  return `${prefix(locale)}/${SEGMENTS[locale].work}`;
}
export function workItemPath(locale: Locale, slug: string): string {
  return `${workPath(locale)}/${slug}`;
}
export function aboutPath(locale: Locale): string {
  return `${prefix(locale)}/${SEGMENTS[locale].about}`;
}
export function contactPath(locale: Locale): string {
  return `${homePath(locale)}#contact`.replace("//#", "/#");
}
export function workAnchor(locale: Locale): string {
  return `${homePath(locale)}#work`.replace("//#", "/#");
}

/* ------------------------------------------------------------ hreflang --- */

export type PageKey =
  | { kind: "home" }
  | { kind: "services" }
  | { kind: "service"; canonical: string }
  | { kind: "work" }
  | { kind: "workItem"; slug: string }
  | { kind: "about" };

export function pathFor(locale: Locale, key: PageKey): string {
  switch (key.kind) {
    case "home":
      return homePath(locale);
    case "services":
      return servicesPath(locale);
    case "service":
      return servicePath(locale, key.canonical);
    case "work":
      return workPath(locale);
    case "workItem":
      return workItemPath(locale, key.slug);
    case "about":
      return aboutPath(locale);
  }
}

export function urlFor(locale: Locale, key: PageKey): string {
  const p = pathFor(locale, key);
  return p === "/" ? SITE : `${SITE}${p}`;
}

/** `alternates` block for Next metadata: canonical + every hreflang. */
export function alternatesFor(locale: Locale, key: PageKey) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = urlFor(l, key);
  languages["x-default"] = urlFor(defaultLocale, key);
  return { canonical: urlFor(locale, key), languages };
}

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_LU",
  de: "de_LU",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr-LU",
  de: "de-LU",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export const LOCALE_SHORT: Record<Locale, string> = { en: "EN", fr: "FR", de: "DE" };

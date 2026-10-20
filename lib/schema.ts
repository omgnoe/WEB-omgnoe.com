/**
 * One canonical entity graph for the whole site.
 *
 * Everything points at two stable @ids instead of repeating a loose Person
 * blob per page. That is what lets Google (and the answer engines, which read
 * the same markup) merge all the pages into a single known entity: Noe Nei,
 * a developer in Luxembourg who offers these services.
 *
 * `sameAs` is the entity-reconciliation lever: every external profile that
 * says the same thing about the same person raises confidence.
 */

import { HTML_LANG, SITE, locales, urlFor, type Locale } from "@/lib/i18n";
import { services } from "@/lib/services";

export const PERSON_ID = `${SITE}/#noe`;
export const BUSINESS_ID = `${SITE}/#business`;

/** External profiles that corroborate the same entity. */
export const SAME_AS = [
  "https://www.linkedin.com/in/noenei/",
  "https://github.com/omgnoe",
  "https://tta.lu",
  "https://www.luxtimes.lu/luxembourg/22-year-old-entrepreneur-fights-for-a-fresh-start-at-stemm-vun-der-strooss/42925190.html",
  "https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2018/06-juin/13-ourluxembourg.html",
  "https://en.paperjam.lu/article/delano_ourluxembourg-frame",
];

/** Short reference to the provider, for embedding in Service / CreativeWork. */
export function providerLd() {
  return { "@id": BUSINESS_ID };
}

const KNOWS_ABOUT = [
  "Web development",
  "Website design",
  "E-commerce development",
  "iOS app development",
  "Android app development",
  "App Store publishing",
  "Cybersecurity",
  "Managed hosting",
  "IT support",
  "Next.js",
  "React",
  "Flutter",
  "Swift",
  "PostgreSQL",
  "AI automation",
  "SaaS",
  "Stripe payments",
  "Technical SEO",
];

/**
 * The site-wide graph, emitted once per page from the layout.
 *
 * ProfessionalService is the type local search understands for "a business
 * that does web development in Luxembourg"; Person carries the biography and
 * the press trail. They are linked both ways.
 */
export function siteGraph(locale: Locale) {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Noe Nei",
    url: SITE,
    image: `${SITE}/me/noe.jpg`,
    jobTitle: "Full-stack developer",
    description:
      "Full-stack developer and founder building websites, apps and infrastructure from Luxembourg.",
    nationality: { "@type": "Country", name: "Luxembourg" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LU",
      addressLocality: "Luxembourg",
    },
    knowsLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "German", alternateName: "de" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Luxembourgish", alternateName: "lb" },
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
    worksFor: { "@type": "Organization", name: "TTA Technologies", url: "https://tta.lu" },
    owns: [
      { "@type": "SoftwareApplication", name: "Salonify", url: "https://salonify.eu" },
      { "@type": "SoftwareApplication", name: "LUXPOS", url: "https://luxpos.lu" },
      { "@type": "SoftwareApplication", name: "BoxBee", url: "https://boxbee.co" },
      { "@type": "SoftwareApplication", name: "DepotGest", url: "https://depotgest.com" },
    ],
  };

  const business = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: "Noe Nei",
    alternateName: "omgnoe",
    url: SITE,
    image: `${SITE}/me/noe.jpg`,
    logo: `${SITE}/omgnoe-logo.png`,
    description:
      "Freelance web and app developer in Luxembourg: websites, online shops, iOS and Android apps, cybersecurity, managed EU hosting and IT support.",
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LU",
      addressLocality: "Luxembourg",
    },
    areaServed: [
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
    ],
    availableLanguage: [
      { "@type": "Language", name: "French" },
      { "@type": "Language", name: "German" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Luxembourgish" },
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: urlFor(locale, { kind: "service", canonical: s.slug }),
        },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Noe Nei",
    inLanguage: locales.map((l) => HTML_LANG[l]),
    publisher: { "@id": BUSINESS_ID },
  };

  return { "@context": "https://schema.org", "@graph": [person, business, website] };
}

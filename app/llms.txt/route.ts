import { getAllWork } from "@/lib/projects";
import { getServices } from "@/lib/services";
import { SITE, locales, servicePath, urlFor, type Locale } from "@/lib/i18n";
import {
  SEARCH_WINDOW,
  SNAPSHOT_DATE,
  searchAggregate,
  searchCurves,
  searchGrowthPercent,
} from "@/lib/proof";

export const dynamic = "force-static";

/**
 * llms.txt is the GEO counterpart to the sitemap: a single plain-text file an
 * answer engine can read in one request to learn what this site is, who runs
 * it, what he sells, in which languages, and where the proof lives.
 *
 * Written as flat, quotable statements on purpose. Answer engines lift
 * sentences; they do not infer from layout.
 */
function section(locale: Locale) {
  const services = getServices(locale);
  const work = getAllWork(locale);
  return { services, work };
}

export function GET() {
  const en = section("en");

  const lines: string[] = [
    "# Noe Nei (omgnoe.com)",
    "",
    "> Noe Nei is a freelance full-stack developer and founder based in Luxembourg.",
    "> He builds websites, online shops, web platforms and iOS and Android apps, and",
    "> also handles the app publishing, cybersecurity, managed EU hosting and IT",
    "> support around them. He runs his own products (Salonify, LUXPOS, BoxBee,",
    "> Doctomap, DepotGest, TTA Technologies) and takes on client projects across",
    "> Luxembourg and the Grande Region. Contact via the form at " + SITE + "/#contact.",
    "",
    "## Facts",
    "",
    "- Name: Noe Nei. Trading online as omgnoe (omgnoe.com).",
    "- Based in: Luxembourg. Serves Luxembourg, Belgium, Germany and France.",
    "- Role: freelance web and app developer; Head Developer at DSP Invest Sarl since March 2025.",
    "- Working languages: French, German, English, Luxembourgish.",
    "- Hosting: EU only, primarily Hetzner (Germany and Finland). No US CloudAct exposure.",
    "- Main stack: Next.js, React, Tailwind, Node, NestJS, PostgreSQL, Prisma, Flutter, Swift, Docker, Stripe.",
    "- One person delivers design, build, publishing, hosting and support. No agency handoffs.",
    "- Typical timelines: a focused landing page ships in one to two weeks; a shop or a site with booking and a back office takes four to eight weeks.",
    "- Websites ship multilingual (FR, DE, EN, LU) with hreflang, structured data, sitemaps and Core Web Vitals tuning included.",
    "",
    "## Measured search results",
    "",
    "These figures come from Google Search Console properties that Noe Nei owns and",
    "operates. They are a dated snapshot, not an estimate, and are the evidence behind",
    "the SEO and GEO work he sells.",
    "",
    `- Snapshot taken: ${SNAPSHOT_DATE}. Window measured: ${SEARCH_WINDOW.from} to ${SEARCH_WINDOW.to} (90 days).`,
    `- Across ${searchAggregate.domains} domains he built and runs: ${searchAggregate.impressions.toLocaleString("en-GB")} Google impressions and ${searchAggregate.clicks.toLocaleString("en-GB")} clicks in 90 days.`,
    `- That is ${searchGrowthPercent}% more impressions than the preceding 90 day window.`,
    `- ${searchAggregate.queriesTop10.toLocaleString("en-GB")} distinct search queries rank in the top 10, of which ${searchAggregate.queriesTop3} rank in the top 3.`,
    ...searchCurves.map((c) => {
      const live = c.months.filter((m) => m.impressions > 0);
      const first = live[0];
      const last = c.months[c.months.length - 1];
      return `- ${c.domain}: ${first ? first.impressions.toLocaleString("en-GB") : "0"} impressions in its first measured month (${first ? first.m : "n/a"}), ${last.impressions.toLocaleString("en-GB")} in ${last.m}.`;
    }),
    "- GEO practice on every site: an llms.txt, explicit AI crawler rules, one entity graph with fixed IDs, question pages that answer in the first sentence, and IndexNow on publish.",
    "",
    "## Languages of this site",
    "",
    ...locales.map(
      (l) =>
        `- ${{ en: "English", fr: "French", de: "German" }[l]}: ${urlFor(l, { kind: "home" })}`
    ),
    "",
    "## Services",
    "",
    ...en.services.flatMap((s) => [
      `- [${s.title}](${SITE}${servicePath("en", s.slug)}): ${s.short}`,
      `  - French: ${SITE}${servicePath("fr", s.slug)}`,
      `  - German: ${SITE}${servicePath("de", s.slug)}`,
    ]),
    "",
    "## Frequently asked, with answers",
    "",
    ...en.services.flatMap((s) =>
      s.faq.map((f) => `- ${f.q} ${f.a}`)
    ),
    "",
    "## Own products",
    "",
    ...en.work
      .filter((w) => w.kind === "personal")
      .map(
        (w) =>
          `- [${w.name}](${urlFor("en", { kind: "workItem", slug: w.slug })}): ${w.description}${
            w.url ? ` Live: ${w.url}` : ""
          }`
      ),
    "",
    "## Client work",
    "",
    ...en.work
      .filter((w) => w.kind === "client")
      .map(
        (w) =>
          `- [${w.name}](${urlFor("en", { kind: "workItem", slug: w.slug })}): ${w.description}${
            w.url ? ` Live: ${w.url}` : ""
          }`
      ),
    "",
    "## Organisations he has worked with",
    "",
    "Wolt, the Government of the Grand Duchy of Luxembourg, OGBL, SaniSure, Cepa,",
    "LTPS, Vinoteca, Promopharm, Dynapharm, Luxtex, DSP Invest.",
    "",
    "## Verifiable record",
    "",
    "- Umarket, his own delivery startup, was the 5th most downloaded food delivery app in Luxembourg in Q2 2024 (Sensor Tower, downloads, iOS and Android combined), alongside Wolt and Uber Eats.",
    "- 1st Public's Prize, #OurLuxembourg national photo competition, June 2018, around 1,300 entries (announced by gouvernement.lu).",
    "- Covered by the Luxembourg Times; co-authored a piece in Forum magazine, issue 443, May 2025.",
    "- Press photography credited to him in RTL Lëtzebuerg, RTL Today and Tageblatt.",
    "- Full biography, CV and sources: " + urlFor("en", { kind: "about" }),
    "",
    "## Key pages",
    "",
    `- [Home](${urlFor("en", { kind: "home" })}): overview, portfolio and contact form`,
    `- [Services](${urlFor("en", { kind: "services" })}): all services with scope and FAQ`,
    `- [Work](${urlFor("en", { kind: "work" })}): full portfolio with case studies`,
    `- [About & CV](${urlFor("en", { kind: "about" })}): biography, career timeline, experience, stack, education, certifications and press`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import type { Locale } from "@/lib/i18n";
import { storyTranslations } from "@/lib/story.i18n";

/**
 * Long-form about / CV content for /about.
 * Prose lives here (not in JSX) so apostrophes stay readable and unescaped.
 *
 * Chapters are numbered from their position in the array, so inserting one
 * anywhere renumbers the rest automatically. Nothing keys off a fixed number.
 */

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  /** Controls the frame's aspect ratio and fit. */
  kind: "photo" | "square" | "app" | "logo";
};

export type Ranking = {
  label: string;
  note: string;
  source: string;
  sourceLabel: string;
  entries: { pos: number; name: string; mine?: boolean }[];
};

export type Link = { href: string; label: string };

export type Chapter = {
  /** Stable key for translations. Never derived from position. */
  id: string;
  period: string;
  title: string;
  body: string[];
  /** Renders the chapter on the dark card. Used once, for the low point. */
  tone?: "dark";
  pull?: string;
  pullCite?: string;
  shots?: Shot[];
  ranking?: Ranking;
  /** External sources, rendered as buttons under the body. */
  links?: Link[];
  /** Appends links to the products this chapter produced. */
  products?: boolean;
};

export const chapters: Chapter[] = [
  {
    id: "fantasy-pictures",
    period: "2016",
    title: "Fantasy Pictures",
    body: [
      "I was fourteen when I first got paid for work. The name was Fantasy Pictures and it was not a company, it was a kid with a camera, an editing timeline and considerably more ambition than equipment.",
      "It taught me the one thing that never stopped being true: nobody hands you a first client. You go and find them, or there is no work.",
    ],
  },
  {
    id: "ourluxembourg",
    period: "June 2018",
    title: "Sixteen, and the public picked mine",
    body: [
      "As part of the country's nation branding, the government launched #OurLuxembourg: post your picture of Luxembourg on Instagram. More than 1,300 people did. I posted a frame of people walking down Avenue de la Liberté on a day the street was closed to traffic.",
      "The public prize went to the photos with the most hearts on the official Luxembourg account. Mine came first. The announcement from the government on 13 June 2018 lists it in one line: premier prix du public, Noe Nei. I was sixteen.",
      "I am not putting this here because a prize matters. I am putting it here because it was the first signal from outside my own head that the camera was not just a hobby. Two years later I registered the company, and seven years later national news desks were still running my frames with my name under them.",
    ],
    links: [
      {
        href: "https://en.paperjam.lu/article/delano_ourluxembourg-frame",
        label: "The winning frames on Delano",
      },
      {
        href: "https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2018/06-juin/13-ourluxembourg.html",
        label: "The government's announcement",
      },
    ],
  },
  {
    id: "fapic",
    period: "2020",
    title: "Fapic, at eighteen",
    body: [
      "The moment I was legally allowed to, I registered my own company. Fapic: music production, video, photography, web design. Some big names came through it.",
      "I was a producer and a musician before I was ever a developer. In May 2020 the Lëtzebuerger Journal ran a full interview with me about the music, under the headline Träume leben: live your dreams. The point I made then was that your listeners should not lose sight of their goals. It reads differently now that I know what the next four years were going to do to mine.",
      "For a while, the music paid.",
    ],
    links: [
      {
        href: "https://www.a-z.lu/discovery/fulldisplay?docid=alma990016521220107251&context=L&vid=352LUX_BIBNET_NETWORK:BIBNET_UNION&lang=fr",
        label: "Lëtzebuerger Journal, 7 May 2020",
      },
    ],
    shots: [
      {
        src: "/story/fapic-logo.png",
        alt: "The Fapic logo",
        caption: "Fapic, 2020",
        kind: "logo",
      },
      {
        src: "/story/fapic-crew.jpg",
        alt: "Filming on location at night in a Fapic Group shirt",
        caption: "On location, night shoot",
        kind: "photo",
      },
    ],
  },
  {
    id: "pivot",
    period: "The pivot",
    title: "Why I left the music scene",
    body: [
      "The music side had a part I did not sign up for. Not everyone settles a price disagreement with an email. I was threatened more than once, at one point at knifepoint.",
      "So I stopped taking that work and pointed Fapic at small and medium businesses instead: brands, shops, websites, clients who settle an invoice by bank transfer. It was the first time I deliberately chose the boring, durable version of a business over the exciting one. It would not be the last.",
    ],
  },
  {
    id: "bofrost",
    period: "2023",
    title: "I was bad at selling, so I went and sold",
    body: [
      "My sales skills were genuinely poor and I knew it. So I took a field sales job at bofrost and set myself one condition for leaving: I would not quit until I was the best seller in the branch.",
      "I sold wine to winemakers. I became the top seller. Then I left, took those skills back to my own company, and closed a 30,000 euro deal with an internationally operating business. The largest contract I had ever signed.",
    ],
    pull: "Fix your weakest skill on purpose. Mine was selling, so I went and sold.",
  },
  {
    id: "wolt",
    period: "Jan to May 2024",
    title: "I photographed 200 restaurants, then asked for a job",
    body: [
      "Wolt booked Fapic to shoot their restaurants. I photographed around two hundred of them. Somewhere in that job I stopped being a supplier and started being a student. I wanted to know how a company like that actually works: customer relations, customer experience, the attitude they keep internally towards their own people. Their whole ecosystem fascinated me. So I applied, and I joined them in support.",
      "I went in to reorient myself and I came out with more than I went looking for. I learned the market from the inside, and from the inside I could see the gap. Everybody in this country knew restaurant delivery. Nobody was doing groceries and household goods, instantly, across the whole of Luxembourg.",
      "That gap became Umarket. I launched it in March 2024, while I was still on their payroll.",
      "In May they let me go, once they realised what I was building. I understand the decision, and I am still grateful for what those months taught me. That company motivates me to this day.",
      "Today every supermarket here delivers, a lot of it through Wolt. It is completely normal now. It was not when we started.",
    ],
  },
  {
    id: "umarket",
    period: "March 2024",
    title: "Everything I had, into one bet",
    body: [
      "I put the 30k and every other euro I owned into Umarket, a 24/7 delivery service for Luxembourg: groceries and household goods, not restaurant food. Stock, advertising, fit out, all of it.",
      "For six months I lived in the office. I slept on the couch and my back still remembers it. I ate instant noodles from Action so that rent got paid, because anything that was not survival went into the company. One night, while I was out on a shoot, the office was broken into. Nothing was taken. It still cost me a week of sleep.",
      "I believed in that company the way you only manage to believe in something once.",
      "And it worked. In Q2 2024, its first full quarter, Umarket was the fifth most downloaded food delivery app in Luxembourg, on the same list as Wolt and Uber Eats. A self-financed app out of an office I was sleeping in, next to companies carrying a few hundred million in funding.",
    ],
    ranking: {
      label: "Top 5 food delivery apps, Luxembourg",
      note: "Q2 2024, downloads, iOS and Android combined",
      source:
        "https://sensortower.com/blog/2024-q2-unified-top-5-food%20delivery%20services-units-lu-63da96fbe1714cfff1c1e5a1",
      sourceLabel: "Sensor Tower",
      entries: [
        { pos: 1, name: "Wolt Delivery" },
        { pos: 2, name: "Wedely" },
        { pos: 3, name: "Uber Eats" },
        { pos: 4, name: "Takeaway.com Luxembourg" },
        { pos: 5, name: "UMarket Delivery", mine: true },
      ],
    },
    shots: [
      {
        src: "/story/umarket-bunny.jpg",
        alt: "Umarket campaign artwork: 24/7 delivery for the whole of Luxembourg",
        caption: "24/7 for the whole country",
        kind: "square",
      },
      {
        src: "/story/umarket-app.jpg",
        alt: "The Umarket shopping app running on Android",
        caption: "The app, on the store",
        kind: "app",
      },
      {
        src: "/story/umarket-store.jpg",
        alt: "Umarket launch creative for the App Store and Google Play",
        caption: "Launch creative",
        kind: "square",
      },
      {
        src: "/story/umarket-team.jpg",
        alt: "The Umarket delivery team at night",
        caption: "The night team",
        kind: "photo",
      },
    ],
  },
  {
    id: "october",
    period: "October 2024",
    title: "It did not fail on the market",
    body: [
      "It failed on a person. My partner had me pay for renovating the building, then pulled the building across to his own company and set about rebuilding what I had built.",
      "No names, that chapter is closed. What I will say is this: he ended up with a renovated building I had financed and the goods I had paid for, and he still did not come close. His company filed for insolvency.",
    ],
  },
  {
    id: "zero",
    period: "Nov to Dec 2024",
    title: "Zero",
    tone: "dark",
    body: [
      "No company. No roof over my head. No money. In the space of a few weeks I lost the thing I had built and the thing I loved, and I was twenty two.",
      "There is no clean entrepreneurial way to describe those two months, so I am not going to try. It was the worst stretch of my life and I did not handle it well.",
      "I got through it. That is the whole claim I am making here.",
    ],
  },
  {
    id: "paid-debt",
    period: "After",
    title: "I paid what I owed anyway",
    body: [
      "I was insolvent and everyone involved knew it. I still called every single supplier I owed money to and negotiated an arrangement with each of them, one by one, when I was under no practical obligation to do so.",
      "Over the months that followed I paid roughly 30,000 euros of company debt out of my own salary.",
    ],
    pull: "Pay what you owe, even when you no longer have to. It is the only thing you still own when everything else is gone.",
  },
  {
    id: "snj",
    period: "Jan to Mar 2025",
    title: "Comms for the people I had just been standing next to",
    body: [
      "I signed up for a Fräiwëllegendéngscht, the voluntary service run by the SNJ, Luxembourg's national youth service, and was placed at Stëmm vun der Strooss from January to March 2025. That is the organisation behind the day centres, the canteens and the second-hand shops for people in social distress in this country.",
      "I went in full time as Assistant in Communication, covering communication and IT: I produced video series for them and handled the technical support. The work I already knew how to do, handed to an organisation that looks after people who were a short step from where I had just been.",
      "It gave me a structure to get up for and an allowance that went straight into paying the company debt down. Three months in, I left early, because a job finally came. Later that year I wrote about those months in Forum magazine, alongside two other volunteers.",
    ],
    pull: "It was often the small gestures that were priceless to these people. A conversation.",
    pullCite: "Written for Forum, issue 443, May 2025",
    links: [
      {
        href: "https://www.forum.lu/article/draei-jonker-erziele-vun-hirem-fraeiwellegendengscht/",
        label: "My piece in Forum 443",
      },
    ],
  },
  {
    id: "gap",
    period: "The gap",
    title: "Too qualified, not qualified enough",
    body: [
      "Alongside it I applied everywhere. For the roles I actually wanted I was not qualified enough on paper: no degree, just a company I had run. For a fast food job I was overqualified, and they told me so. I sat precisely in between, and nobody was hiring the middle.",
      "That is the part nobody warns you about. Five years of running a business reads as nothing at all when a form asks for a diploma, and as far too much when it asks for a shift.",
      "Then a journalist wrote about it in the Luxembourg Times. That piece is what broke it open: companies got in touch, and that is how I found the job I have now.",
    ],
    links: [
      {
        href:
          "https://www.luxtimes.lu/luxembourg/22-year-old-entrepreneur-fights-for-a-fresh-start-at-stemm-vun-der-strooss/42925190.html",
        label: "The article in the Luxembourg Times",
      },
    ],
  },
  {
    id: "insolvency",
    period: "The end of Fapic",
    title: "Insolvency, in the end",
    body: [
      "The paperwork side still ended badly. A creditor put a bailiff on the phone with an assignation en faillite: five thousand euros inside 72 hours. I did not have five thousand euros sitting anywhere. I offered a thousand a month. That was refused, and by the time it was suddenly accepted, shortly before the court date, I had nothing left to give the process.",
      "I had spent a year trying to be fair to everybody. The company went into insolvency. I am not hiding it and I am not blaming it on anyone: by then it was my decision to stop fighting.",
    ],
  },
  {
    id: "rebuild",
    period: "2025 to now",
    title: "What I built out of it",
    body: [
      "I used the quiet to learn. I went deep into programming and started building the software I had needed as a company director and could never afford to buy.",
      "That is where LUXPOS came from, a point of sale and loyalty and accounting system for Luxembourg retail. And Salonify, a booking platform for salons. And BoxBee. And the rest of them.",
      "Since March 2025 I have been Head Developer at DSP Invest, leading Doctomap, a doctor management SaaS integrated with Luxembourg's national e-health stack. I run my own products alongside it, with real paying customers and real support tickets.",
      "I am not here because it went well. I am here because it did not, and I rebuilt anyway.",
    ],
    products: true,
  },
];

/** Spelled-out count for the section heading, so inserts stay correct. */
const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
  "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
  "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
];

export function spellCount(n: number): string {
  return NUMBER_WORDS[n] ?? String(n);
}

export const storyProducts = [
  { slug: "luxpos", name: "LUXPOS" },
  { slug: "salonify", name: "Salonify" },
  { slug: "boxbee", name: "BoxBee" },
  { slug: "doctomap", name: "Doctomap" },
];

export const lessons = [
  "Contracts beat trust, every single time, and most of all with people you like.",
  "A business that depends on one partner staying decent is not a business, it is a hope.",
  "Cashflow is oxygen. Profit on paper has never once paid a supplier.",
  "Fix your weakest skill deliberately, in a job where it is measured.",
  "Pay what you owe, even when nobody can force you to.",
  "Build the durable version. The exciting version is usually somebody else's exit.",
];

export type Role = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
};

export const roles: Role[] = [
  {
    period: "Mar 2025 to now",
    title: "Head Developer",
    org: "DSP Invest Sarl · Luxembourg",
    bullets: [
      "Lead developer on Doctomap, a multi-tenant doctor management SaaS with PID integration, built in partnership with eSanté and CNS, Luxembourg's national e-health infrastructure.",
      "Websites, e-commerce, booking systems and internal tooling, plus automations for logistics and accounting.",
      "Full stack ownership end to end: frontend, backend, server, deployment, SEO, indexing and system security.",
    ],
  },
  {
    period: "Jan to Mar 25",
    title: "Assistant in Communication",
    org: "Fräiwëllegendéngscht, SNJ · placed at Stëmm vun der Strooss · Luxembourg",
    bullets: [
      "Full-time communication and IT role at the Luxembourg NGO for people in social distress: produced video series and ran technical support.",
      "Wrote about the placement for Forum magazine, issue 443, May 2025.",
    ],
  },
  {
    period: "Jan to May 24",
    title: "Support Associate",
    org: "Wolt · Luxembourg",
    bullets: [
      "Customer experience: retention, complex order resolution and three-sided coordination between customers, couriers and restaurants.",
      "Joined after shooting roughly 200 of their restaurants as a Fapic contract, specifically to learn how a delivery platform runs its customer relations and its internal culture.",
      "What I learned about the market there is what led directly to founding Umarket.",
    ],
  },
  {
    period: "2020 to 2024",
    title: "Founder & Director",
    org: "Fapic · Media agency · Luxembourg",
    bullets: [
      "Founded and ran a media agency solo for almost five years from the age of eighteen, delivering photo, video, web and brand work to SME clients.",
      "Launched and operated Umarket, 24/7 instant delivery of groceries and household goods across Luxembourg. Fifth most downloaded food delivery app in the country in Q2 2024, alongside Wolt and Uber Eats.",
      "Operator-level knowledge of Luxembourg and EU business law, contracts, tax and accounting, running sales, delivery, HR and finance without a team.",
    ],
  },
  {
    period: "May 23 to Nov 24",
    title: "Sales Representative",
    org: "bofrost* · Kenn, Rheinland-Pfalz (DE)",
    bullets: [
      "Field sales role taken deliberately to sharpen acquisition, objection handling and closing for my own company. Left as top seller of the branch.",
    ],
  },
];

export const skillGroups: { label: string; items: string }[] = [
  { label: "Languages", items: "TypeScript · Dart · Python · SQL" },
  { label: "Frontend", items: "Next.js · React · Tailwind · Flutter · Swift" },
  { label: "Backend", items: "NestJS · Prisma · PostgreSQL · Redis · Minio" },
  { label: "Infra", items: "Docker · Traefik · Hetzner · Cloudflare" },
  { label: "Auth & pay", items: "JWT · OAuth · 2FA · Stripe Connect" },
  { label: "Monorepo", items: "pnpm · Turborepo · GitHub Actions" },
  { label: "AI, daily", items: "Claude · Claude Code · Gemini · Anthropic API" },
  { label: "Business", items: "Odoo · Monday · Notion · Intercom · SevDesk" },
  { label: "Design", items: "Photoshop · InDesign · Illustrator" },
];

export const languages = [
  { name: "Lëtzebuergesch", level: "Native" },
  { name: "Deutsch", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "Français", level: "Intermediate" },
];

export const education = [
  { title: "DT Image, film, video & photography", org: "Lycée des Arts et Métiers", period: "17 to 19" },
  { title: "9ème TE", org: "Lycée technique de Bonnevoie", period: "16 to 17" },
  { title: "7ème & 8ème TE", org: "Lycée Bel-Val", period: "14 to 16" },
];

export const credentials: { title: string; org: string; links: Link[] }[] = [
  {
    title: "Claude Code 101",
    org: "Anthropic",
    links: [{ href: "https://verify.skilljar.com/c/xhxtnkiesrio", label: "Verify" }],
  },
  {
    title: "Claude 101",
    org: "Anthropic",
    links: [{ href: "https://verify.skilljar.com/c/pj2yb2inbgqk", label: "Verify" }],
  },
  {
    title: "1st Public's Prize, #OurLuxembourg",
    org: "Ministère de l'économie and Ministère des affaires étrangères, June 2018. Around 1,300 entries.",
    links: [
      { href: "https://en.paperjam.lu/article/delano_ourluxembourg-frame", label: "Delano" },
      { href: "https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2018/06-juin/13-ourluxembourg.html", label: "gouvernement.lu" },
    ],
  },
];

export type PressItem = {
  outlet: string;
  date: string;
  title: string;
  note: string;
  /** Omitted where the piece is print-only or not publicly linkable. */
  href?: string;
};

export const pressGroups: { label: string; blurb: string; items: PressItem[] }[] = [
  {
    label: "My photos in the press",
    blurb:
      "News desks run my frames under my own credit. This is the part of my work that has been published the longest.",
    items: [
      {
        outlet: "RTL Lëtzebuerg",
        date: "10 April 2025",
        title: "À la Cloche d'Or: le tram a déraillé après une collision avec un bus",
        note: "My photos of the derailment, credited © Noe Nei.",
      },
      {
        outlet: "RTL Today",
        date: "10 April 2025",
        title: "Tram derails overnight after colliding with bus at Cloche d'Or",
        note: "English edition of the same report, © Noe Nei.",
      },
      {
        outlet: "Tageblatt",
        date: "25 October 2022",
        title: "Groovige Klänge der hauseigenen Abbey Band",
        note: "Concert photography, credited Foto: Noe Nei.",
      },
    ],
  },
  {
    label: "Written about, and written by me",
    blurb: "Interviews, reporting and one piece I wrote myself.",
    items: [
      {
        outlet: "Forum",
        date: "May 2025",
        title: "Dräi Jonker erzielen vun hirem Fräiwëllegendéngscht",
        note: "Issue 443. I co-authored it: my own account of the placement at Stëmm vun der Strooss.",
        href: "https://www.forum.lu/article/draei-jonker-erziele-vun-hirem-fraeiwellegendengscht/",
      },
      {
        outlet: "Luxembourg Times",
        date: "2024",
        title: "22-year-old entrepreneur fights for a fresh start at Stëmm vun der Strooss",
        note: "The piece that ended the job search.",
        href: "https://www.luxtimes.lu/luxembourg/22-year-old-entrepreneur-fights-for-a-fresh-start-at-stemm-vun-der-strooss/42925190.html",
      },
      {
        outlet: "Paperjam",
        date: "16 April 2024",
        title: "Bienvenue à tous les nouveaux membres",
        note: "Member portrait, listed as Noé Nei, Fapic Group.",
      },
      {
        outlet: "Lëtzebuerger Journal",
        date: "7 May 2020",
        title: "Träume leben: Noe Nei will seine Hörer ermutigen, ihre Ziele nicht aus den Augen zu verlieren",
        note: "Interview by Liz Mikos on the music. Volume 73, number 107, page 7.",
        href: "https://www.a-z.lu/discovery/fulldisplay?docid=alma990016521220107251&context=L&vid=352LUX_BIBNET_NETWORK:BIBNET_UNION&lang=fr",
      },
      {
        outlet: "gouvernement.lu",
        date: "13 June 2018",
        title: "Le Comité Inspiring Luxembourg annonce les gagnants du concours photo #OurLuxembourg",
        note: "The official announcement: premier prix du public, Noe Nei. Also carried by the economy and foreign ministries.",
        href: "https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2018/06-juin/13-ourluxembourg.html",
      },
      {
        outlet: "Delano",
        date: "June 2018",
        title: "#OurLuxembourg in the frame",
        note: "The winning entries, including the public prize.",
        href: "https://en.paperjam.lu/article/delano_ourluxembourg-frame",
      },
    ],
  },
];

export const pressUrl =
  "https://www.luxtimes.lu/luxembourg/22-year-old-entrepreneur-fights-for-a-fresh-start-at-stemm-vun-der-strooss/42925190.html";

export const delanoUrl = "https://en.paperjam.lu/article/delano_ourluxembourg-frame";

export const forumUrl =
  "https://www.forum.lu/article/draei-jonker-erziele-vun-hirem-fraeiwellegendengscht/";

/* ------------------------------------------------------- localised reads --- */

/**
 * Index-aligned arrays only merge when the lengths still match. A translation
 * that drifted out of sync falls back to English for that array instead of
 * pairing the wrong caption with the wrong photo.
 */
function aligned<T>(source: T[], translated: T[] | undefined): T[] | undefined {
  if (!translated || translated.length !== source.length) return undefined;
  return translated;
}

export function storyChrome(locale: Locale) {
  return storyTranslations[locale].chrome;
}

export function spellCountIn(locale: Locale, n: number): string {
  return storyTranslations[locale].numberWords[n] ?? String(n);
}

export function getChapters(locale: Locale): Chapter[] {
  const tr = storyTranslations[locale].chapters;
  return chapters.map((ch) => {
    const t = tr[ch.id];
    if (!t) return ch;

    const shotsT = aligned(ch.shots ?? [], t.shots);
    const linksT = aligned(ch.links ?? [], t.links?.map((label) => ({ href: "", label })));

    return {
      ...ch,
      period: t.period ?? ch.period,
      title: t.title ?? ch.title,
      body: t.body ?? ch.body,
      pull: t.pull ?? ch.pull,
      pullCite: t.pullCite ?? ch.pullCite,
      shots: ch.shots?.map((sh, i) =>
        shotsT ? { ...sh, alt: shotsT[i].alt, caption: shotsT[i].caption } : sh
      ),
      ranking: ch.ranking
        ? { ...ch.ranking, ...(t.ranking ?? {}) }
        : undefined,
      links: ch.links?.map((l, i) => (linksT ? { ...l, label: linksT[i].label } : l)),
    };
  });
}

export function getLessons(locale: Locale): string[] {
  return aligned(lessons, storyTranslations[locale].lessons) ?? lessons;
}

export function getRoles(locale: Locale): Role[] {
  const tr = aligned(roles, storyTranslations[locale].roles as Role[]);
  if (!tr) return roles;
  const t = storyTranslations[locale].roles;
  return roles.map((r, i) => ({
    period: t[i].period ?? r.period,
    title: t[i].title ?? r.title,
    org: t[i].org ?? r.org,
    bullets: aligned(r.bullets, t[i].bullets) ?? r.bullets,
  }));
}

export function getSkillGroups(locale: Locale) {
  const labels = aligned(skillGroups, storyTranslations[locale].skillLabels as unknown[])
    ? storyTranslations[locale].skillLabels
    : undefined;
  return skillGroups.map((g, i) => ({ ...g, label: labels?.[i] ?? g.label }));
}

export function getLanguages(locale: Locale) {
  const levels = storyTranslations[locale].languageLevels;
  return languages.map((l) => ({ ...l, level: levels[l.name] ?? l.level }));
}

export function getEducation(locale: Locale) {
  const t = storyTranslations[locale].education;
  if (t.length !== education.length) return education;
  return education.map((e, i) => ({
    ...e,
    title: t[i].title ?? e.title,
    period: t[i].period ?? e.period,
  }));
}

export function getCredentials(locale: Locale) {
  const t = storyTranslations[locale].credentials;
  if (t.length !== credentials.length) return credentials;
  return credentials.map((c, i) => ({
    ...c,
    title: t[i].title ?? c.title,
    org: t[i].org ?? c.org,
  }));
}

export function getPressGroups(locale: Locale) {
  const t = storyTranslations[locale].press;
  if (t.length !== pressGroups.length) return pressGroups;
  return pressGroups.map((g, gi) => {
    const notes = t[gi].notes.length === g.items.length ? t[gi].notes : undefined;
    return {
      label: t[gi].label,
      blurb: t[gi].blurb,
      items: g.items.map((it, ii) => ({ ...it, note: notes?.[ii] ?? it.note })),
    };
  });
}

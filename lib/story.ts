/**
 * Long-form about / CV content for /about.
 * Prose lives here (not in JSX) so apostrophes stay readable and unescaped.
 */

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  /** Controls the frame's aspect ratio and fit. */
  kind: "photo" | "square" | "app" | "logo";
};

export type Chapter = {
  n: string;
  period: string;
  title: string;
  body: string[];
  /** Renders the chapter on the dark card. Used once, for the low point. */
  tone?: "dark";
  pull?: string;
  shots?: Shot[];
};

export const chapters: Chapter[] = [
  {
    n: "01",
    period: "2016",
    title: "Fantasy Pictures",
    body: [
      "I was fourteen when I first got paid for work. The name was Fantasy Pictures and it was not a company, it was a kid with a camera, an editing timeline and considerably more ambition than equipment.",
      "It taught me the one thing that never stopped being true: nobody hands you a first client. You go and find them, or there is no work.",
    ],
  },
  {
    n: "02",
    period: "2020",
    title: "Fapic, at eighteen",
    body: [
      "The moment I was legally allowed to, I registered my own company. Fapic: music production, video, photography, web design. Some big names came through it.",
      "I was a producer and a musician before I was ever a developer. For a while, the music paid.",
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
    n: "03",
    period: "The pivot",
    title: "Why I left the music scene",
    body: [
      "The music side had a part I did not sign up for. Not everyone settles a price disagreement with an email. I was threatened more than once, at one point at knifepoint.",
      "So I stopped taking that work and pointed Fapic at small and medium businesses instead: brands, shops, websites, clients who settle an invoice by bank transfer. It was the first time I deliberately chose the boring, durable version of a business over the exciting one. It would not be the last.",
    ],
  },
  {
    n: "04",
    period: "2023",
    title: "I was bad at selling, so I went and sold",
    body: [
      "My sales skills were genuinely poor and I knew it. So I took a field sales job at bofrost and set myself one condition for leaving: I would not quit until I was the best seller in the branch.",
      "I sold wine to winemakers. I became the top seller. Then I left, took those skills back to my own company, and closed a 30,000 euro deal with an internationally operating business. The largest contract I had ever signed.",
    ],
    pull: "Fix your weakest skill on purpose. Mine was selling, so I went and sold.",
  },
  {
    n: "05",
    period: "Umarket",
    title: "Everything I had, into one bet",
    body: [
      "I put the 30k and every other euro I owned into Umarket, a 24/7 delivery service for Luxembourg. Stock, advertising, fit out, all of it.",
      "For six months I lived in the office. I slept on the couch and my back still remembers it. I ate instant noodles from Action so that rent got paid, because anything that was not survival went into the company. One night, while I was out on a shoot, the office was broken into. Nothing was taken. It still cost me a week of sleep.",
      "I believed in that company the way you only manage to believe in something once.",
    ],
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
    n: "06",
    period: "The fall",
    title: "It did not fail on the market",
    body: [
      "It failed on a person. My partner had me pay for renovating the building, then pulled the building across to his own company and set about rebuilding what I had built.",
      "No names, that chapter is closed. What I will say is this: he ended up with a renovated building I had financed and the goods I had paid for, and he still did not come close. His company filed for insolvency.",
    ],
  },
  {
    n: "07",
    period: "November",
    title: "Zero",
    tone: "dark",
    body: [
      "No company. No roof over my head. No money. In the space of a few weeks I lost the thing I had built and the thing I loved, and I was twenty two.",
      "There is no clean entrepreneurial way to describe those two months, so I am not going to try. It was the worst stretch of my life and I did not handle it well.",
      "I got through it. That is the whole claim I am making here.",
    ],
  },
  {
    n: "08",
    period: "After",
    title: "I paid what I owed anyway",
    body: [
      "I was insolvent and everyone involved knew it. I still called every single supplier I owed money to and negotiated an arrangement with each of them, one by one, when I was under no practical obligation to do so.",
      "Over the months that followed I paid roughly 30,000 euros of company debt out of my own salary.",
    ],
    pull: "Pay what you owe, even when you no longer have to. It is the only thing you still own when everything else is gone.",
  },
  {
    n: "09",
    period: "The gap",
    title: "Too qualified, not qualified enough",
    body: [
      "I started a Service Volontaire with the SNJ at Stëmm vun der Strooss. It gave me structure and it let me keep paying the debt down.",
      "In parallel I applied everywhere. For the roles I actually wanted I was not qualified enough on paper. For a fast food job I was overqualified. I sat precisely in between, and nobody was hiring the middle.",
      "Then a journalist wrote about it in the Luxembourg Times. That piece is what broke it open: companies got in touch, and that is how I found the job I have now.",
    ],
  },
  {
    n: "10",
    period: "The end of Fapic",
    title: "Insolvency, in the end",
    body: [
      "The paperwork side still ended badly. A creditor put a bailiff on the phone with an assignation en faillite: five thousand euros inside 72 hours. I did not have five thousand euros sitting anywhere. I offered a thousand a month. That was refused, and by the time it was suddenly accepted, shortly before the court date, I had nothing left to give the process.",
      "I had spent a year trying to be fair to everybody. The company went into insolvency. I am not hiding it and I am not blaming it on anyone: by then it was my decision to stop fighting.",
    ],
  },
  {
    n: "11",
    period: "2024 to now",
    title: "What I built out of it",
    body: [
      "I used the quiet to learn. I went deep into programming and started building the software I had needed as a company director and could never afford to buy.",
      "That is where LUXPOS came from, a point of sale and loyalty and accounting system for Luxembourg retail. And Salonify, a booking platform for salons. And BoxBee. And the rest of them.",
      "Day to day I am Head Developer at DSP Invest, leading Doctomap, a doctor management SaaS integrated with Luxembourg's national e-health stack. I run my own products alongside it, with real paying customers and real support tickets.",
      "I am not here because it went well. I am here because it did not, and I rebuilt anyway.",
    ],
  },
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
    period: "2024 to now",
    title: "Head Developer",
    org: "DSP Invest Sarl · Luxembourg",
    bullets: [
      "Lead developer on Doctomap, a multi-tenant doctor management SaaS with PID integration, built in partnership with eSanté and CNS, Luxembourg's national e-health infrastructure.",
      "Websites, e-commerce, booking systems and internal tooling, plus automations for logistics and accounting.",
      "Full stack ownership end to end: frontend, backend, server, deployment, SEO, indexing and system security.",
    ],
  },
  {
    period: "2020 to 2024",
    title: "Founder & Director",
    org: "Fapic · Media agency · Luxembourg",
    bullets: [
      "Founded and ran a media agency solo for almost five years from the age of eighteen, delivering photo, video, web and brand work to SME clients.",
      "Launched and operated Umarket, a 24/7 delivery service in Luxembourg.",
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
  {
    period: "Jan to May 24",
    title: "Support Associate",
    org: "Wolt · Luxembourg",
    bullets: [
      "Customer experience: retention, complex order resolution and three-sided coordination between customers, couriers and restaurants.",
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

export const credentials = [
  {
    title: "Claude Code 101",
    org: "Anthropic",
    href: "https://verify.skilljar.com/c/xhxtnkiesrio",
    hrefLabel: "Verify",
  },
  {
    title: "Claude 101",
    org: "Anthropic",
    href: "https://verify.skilljar.com/c/pj2yb2inbgqk",
    hrefLabel: "Verify",
  },
  {
    title: "1st Public's Prize, OUR LUXEMBOURG",
    org: "Inspiring Luxembourg × Ministère de l'économie, June 2018",
    href:
      "https://maee.gouvernement.lu/fr/actualites.gouvernement+fr+actualites+toutes_actualites+communiques+2018+06-juin+13-ourluxembourg.html",
    hrefLabel: "Source",
  },
];

export const pressUrl =
  "https://www.luxtimes.lu/luxembourg/22-year-old-entrepreneur-fights-for-a-fresh-start-at-stemm-vun-der-strooss/42925190.html";

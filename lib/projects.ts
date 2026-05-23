export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  /** Short blurb for cards. */
  description: string;
  /** Longer paragraphs for the case-study page. */
  body: string[];
  tags: string[];
  /** Scope of work delivered. */
  role: string[];
  /** "Under the hood" talking points — tech, security, notable engineering. */
  highlights?: string[];
  accent: string;
  kind: "personal" | "client";
  url?: string;
  /** Square logo asset (personal projects). */
  logo?: string;
  /** Screenshot asset (client projects). */
  shot?: string;
};

export const projects: WorkItem[] = [
  {
    slug: "salonify",
    name: "Salonify",
    tagline: "Booking & POS platform for salons",
    description:
      "A full marketplace for beauty & wellness — online booking, point of sale, Stripe Connect payouts, loyalty and native mobile apps. Live across multiple EU & Asian markets.",
    body: [
      "Salonify is a complete operating system for salons and wellness businesses: online booking, calendar management, a full point-of-sale, customer loyalty, marketing and analytics — all in one platform.",
      "It runs as a marketplace with Stripe Connect payouts, native customer and provider mobile apps, multi-currency support and localisation across multiple European and Asian markets. Built and operated end-to-end, from database and payment infrastructure to the apps in the stores.",
    ],
    tags: ["Next.js", "NestJS", "Flutter", "Stripe Connect", "PostgreSQL"],
    role: ["Full product", "Web + Mobile", "Payments", "Infrastructure"],
    highlights: [
      "Marketplace payments with Stripe Connect — split payouts, on-demand multi-currency pricing per country.",
      "Hardened auth: JWT + refresh tokens, OAuth (Google / Apple / Facebook), 2FA, role-based guards and rate limiting.",
      "Secure file uploads validated by magic bytes, not extensions; security-audited and pen-tested.",
      "Runs on a two-server Hetzner setup (app + data) over a private network — PostgreSQL & Redis never exposed publicly.",
      "Localised across 12+ languages and multiple EU & Asian domains, with native customer and provider apps.",
    ],
    accent: "#7c3aed",
    kind: "personal",
    logo: "/work/salonify.svg",
    url: "https://salonify.eu",
  },
  {
    slug: "luxpos",
    name: "Luxpos",
    tagline: "POS for restaurants & retail",
    description:
      "Modern point-of-sale built for hospitality — floor plans, split bills, kitchen display, Tap to Pay on iPhone and daily close. Multi-location, multi-currency, made in Luxembourg.",
    body: [
      "Luxpos is a modern point-of-sale built for restaurants, bars and retail: floor plans, table management, split bills, a kitchen display system, daily close and reporting.",
      "It supports Tap to Pay on iPhone, multi-location and multi-currency setups, and a clean web back office. Designed to be fast on the floor and simple to run.",
    ],
    tags: ["Next.js", "Tap to Pay", "KDS", "Multi-tenant", "Docker"],
    role: ["Full product", "POS", "Payments", "Back office"],
    highlights: [
      "Tap to Pay on iPhone — accept contactless cards directly on the device, no extra hardware (Apple-approved entitlement).",
      "Real-time kitchen display system pushing orders from floor to kitchen instantly.",
      "Multi-tenant, multi-location and multi-currency architecture with isolated data per business.",
      "Offline-resilient POS flows so service never stops when the network blips.",
      "Containerised with Docker, zero-downtime rolling deploys.",
    ],
    accent: "#c8ff3d",
    kind: "personal",
    logo: "/work/luxpos.svg",
    url: "https://luxpos.lu",
  },
  {
    slug: "doctomap",
    name: "Doctomap",
    tagline: "Find your doctor in Luxembourg",
    description:
      "An online booking platform connecting patients with doctors, specialists and therapists across Luxembourg. Real-time availability, verified profiles, teleconsultation and instant appointments.",
    body: [
      "Doctomap connects patients with doctors, specialists and therapists across Luxembourg. Patients search by specialty, symptom or location and book real-time appointments in a few clicks.",
      "It includes verified practitioner profiles, teleconsultation, multi-language support and a back office for practices to manage availability, calendars and bookings.",
    ],
    tags: ["Next.js", "NestJS", "Booking", "Healthcare", "Twilio"],
    role: ["Full product", "Booking engine", "Back office", "Security"],
    highlights: [
      "Real-time availability and instant booking with calendar sync for practices.",
      "Teleconsultation and SMS / notifications powered by Twilio.",
      "Security monitored with a Wazuh SIEM — audit logs and intrusion detection on sensitive health data.",
      "Multi-language platform (FR / DE / EN) built for the Luxembourg market.",
      "NestJS API + PostgreSQL/Prisma, deployed load-balanced on Hetzner.",
    ],
    accent: "#00aeef",
    kind: "personal",
    logo: "/work/doctomap.png",
    url: "https://doctomap.lu",
  },
  {
    slug: "echochat",
    name: "EchoChat",
    tagline: "Anonymous, encrypted messaging",
    description:
      "Zero-knowledge messenger with military-grade end-to-end encryption. No accounts, no trace — connect instantly with session codes. Simple. Secure. Anonymous.",
    body: [
      "EchoChat is a zero-knowledge messenger built around privacy: end-to-end encryption, no accounts and no stored history. Two people connect instantly with a session code or QR.",
      "There is nothing to trace — messages never touch a readable server store. Simple, secure and anonymous, shipped to iOS and Android.",
    ],
    tags: ["Flutter", "E2E Encryption", "Zero-Knowledge", "iOS", "Android"],
    role: ["Full product", "Mobile", "Cryptography"],
    highlights: [
      "End-to-end encryption — the server never sees readable message content.",
      "Zero-knowledge by design: no accounts, no phone numbers, no stored history.",
      "Instant pairing via one-time session codes or QR — connect and talk in seconds.",
      "Single Flutter codebase shipped to both iOS and Android.",
    ],
    accent: "#22d3ee",
    kind: "personal",
    logo: "/work/echochat.webp",
  },
  {
    slug: "rookiejobs",
    name: "RookieJobs",
    tagline: "Your first real job, no experience required",
    description:
      "A job board for beginners, career changers and graduates — verified beginner-friendly listings, transparent salaries and honest descriptions. Onboarding guaranteed.",
    body: [
      "RookieJobs is a job board for people starting out — beginners, career changers and graduates. Every listing is verified beginner-friendly, with transparent salaries and honest descriptions.",
      "Employers post through a dashboard where each listing clears a trust check before going live, and applicants get a clean search and application experience.",
    ],
    tags: ["Next.js", "Job Board", "Search", "Marketplace"],
    role: ["Full product", "Marketplace", "Dashboards"],
    highlights: [
      "Every listing clears a 3-box trust check before going live — quality over quantity.",
      "Beginner-friendly filters, transparent salaries and honest job descriptions.",
      "Separate employer dashboard and applicant experience with fast faceted search.",
      "Multi-language, SEO-first architecture for organic discovery.",
    ],
    accent: "#10b981",
    kind: "personal",
    logo: "/work/rookiejobs.svg",
    url: "https://rookiejobs.com",
  },
  {
    slug: "sellout-ai",
    name: "SellOut AI",
    tagline: "Snap it. Analyze it. Sell it.",
    description:
      "AI-powered listings for your second-hand items. Snap a photo, let the AI identify, price and write a professional listing in minutes — sell smarter on every marketplace.",
    body: [
      "SellOut AI turns a photo into a ready-to-post listing. Snap your second-hand item and the AI identifies it, suggests a price and writes a professional, multi-language description in minutes.",
      "It's built to remove the friction of selling on marketplaces — analyse, generate and sell smarter. Shipped as a mobile app with on-device capture and AI analysis.",
    ],
    tags: ["AI", "iOS", "Computer Vision", "LLM", "Flutter"],
    role: ["Full product", "Mobile", "AI / LLM"],
    highlights: [
      "Computer-vision identification turns a single photo into a structured product profile.",
      "LLM-generated, multi-language listing copy and smart price suggestions in seconds.",
      "On-device capture flow designed for speed — snap, review, publish.",
      "Built with Flutter for a fast, native feel on iOS.",
    ],
    accent: "#f59e0b",
    kind: "personal",
    logo: "/work/sellout.webp",
  },
];

export const clients: WorkItem[] = [
  {
    slug: "absaar",
    name: "ABSAAR",
    tagline: "Power innovation since 1969",
    description:
      "Brand landing page for ABSAAR, the German automotive power specialist — batteries, jump starters and chargers. A bold, dark, high-impact presentation of the brand and its heritage.",
    body: [
      "ABSAAR is a German automotive power brand with roots back to 1969 — batteries, jump starters, chargers and power solutions sold across Europe.",
      "I built a bold, dark landing page that puts the brand's engineering heritage and product range front and centre, with a high-impact hero and clear product storytelling.",
    ],
    tags: ["Next.js", "Landing page", "Brand", "SEO"],
    role: ["Landing page"],
    highlights: [
      "Bold, dark hero that leans into the brand's engineering heritage since 1969.",
      "Fast, statically-rendered pages tuned for performance and SEO.",
      "Clear product storytelling across batteries, jump starters and chargers.",
    ],
    accent: "#e11d2a",
    kind: "client",
    url: "https://absaar.com",
    shot: "/work/clients/absaar.png",
  },
  {
    slug: "barbertruck",
    name: "BarberTruck",
    tagline: "Luxembourg's first mobile barbershop",
    description:
      "Website for a luxury mobile barbershop and brushing bar serving Luxembourg & Europe — premium grooming that comes to you, with online booking.",
    body: [
      "BarberTruck is Luxembourg's first mobile barbershop and brushing bar — premium grooming services delivered on location across Luxembourg and Europe.",
      "I built the full website: brand presentation, services, gallery and an online booking flow so clients can reserve an appointment that comes to them.",
    ],
    tags: ["Next.js", "Booking", "Website", "SEO"],
    role: ["Website", "Booking"],
    highlights: [
      "Online booking flow for a service that travels to the client.",
      "Premium, mobile-first brand presentation with services and gallery.",
      "Multilingual and SEO-optimised for Luxembourg & Europe.",
    ],
    accent: "#ec4899",
    kind: "client",
    url: "https://www.barbertruck.lu",
    shot: "/work/clients/barbertruck.png",
  },
  {
    slug: "o2nails",
    name: "O2NAILS",
    tagline: "Luxury nail art technology",
    description:
      "Website for O2NAILS — luxury nail art technology and digital nail printing. A clean, premium product showcase with collections and shop.",
    body: [
      "O2NAILS brings digital nail-printing technology to the luxury beauty market — print intricate nail art in seconds.",
      "I built a clean, premium website that showcases the technology and collections and guides visitors to explore and shop the product range.",
    ],
    tags: ["Next.js", "E-commerce", "Website", "SEO"],
    role: ["Website", "Shop"],
    highlights: [
      "Premium product showcase for digital nail-printing technology.",
      "Clean collections layout that guides visitors from discovery to shop.",
      "Fast, SEO-first build for a luxury beauty brand.",
    ],
    accent: "#be123c",
    kind: "client",
    url: "https://www.o2nails.lu",
    shot: "/work/clients/o2nails.png",
  },
  {
    slug: "dspimmo",
    name: "DSPImmo",
    tagline: "Real estate agency, Luxembourg",
    description:
      "Landing page and back office for a Luxembourg real estate agency — houses, apartments and land, with listing management behind the scenes.",
    body: [
      "DSPImmo is a real estate agency in Luxembourg dealing in houses, apartments and land.",
      "I delivered the public landing page that presents the agency and its listings, plus a back office to manage properties, enquiries and content.",
    ],
    tags: ["Next.js", "Real estate", "Landing page", "Back office"],
    role: ["Landing page", "Back office"],
    highlights: [
      "Polished, animated landing page with strong agency stats and storytelling.",
      "Back office to manage property listings, enquiries and content.",
      "Multilingual and built for local real-estate SEO in Luxembourg.",
    ],
    accent: "#4f46e5",
    kind: "client",
    url: "https://dspimmo.lu",
    shot: "/work/clients/dspimmo.png",
  },
  {
    slug: "homecenter",
    name: "Home Center",
    tagline: "Furniture & showroom, Luxembourg",
    description:
      "End-to-end build for Home Center Luxembourg — a 3,500 m² furniture showroom: landing page, online shop, back office and an in-store POS / Kassensystem.",
    body: [
      "Home Center is a 3,500 m² furniture store and showroom in Hollerich, Luxembourg, where tradition meets modern living.",
      "I built the full stack for them: the public landing page, an online shop, the back office to manage catalogue and orders, and an in-store POS (Kassensystem) — one connected system from storefront to checkout.",
    ],
    tags: ["Next.js", "E-commerce", "POS", "Back office"],
    role: ["Landing page", "Shop", "Back office", "POS / Kassensystem"],
    highlights: [
      "One connected system from storefront to checkout — landing, shop, back office and in-store POS.",
      "Shared catalogue and inventory across web shop and the physical 3,500 m² showroom.",
      "In-store POS (Kassensystem) tied into the same orders and stock as online.",
      "Back office for catalogue, orders and customers in one place.",
    ],
    accent: "#2563eb",
    kind: "client",
    url: "https://homecenter.lu",
    shot: "/work/clients/homecenter.png",
  },
  {
    slug: "dynapharm",
    name: "Dynapharm",
    tagline: "B2B health commerce with end-to-end logistics automation",
    description:
      "A B2B health & wellness commerce platform with a full warehouse and accounting engine — scanner-driven picking, automated invoicing with bank-transfer reconciliation, and DHL label generation.",
    body: [
      "Dynapharm is a B2B shop for health-care professionals — a gated storefront, full catalogue and ordering for verified business accounts.",
      "Behind the shop I built a complete operations engine. Orders flow into a warehouse workflow with a scanner-based picking path that guides pickers through the most efficient route. Invoices are generated automatically and reconciled against incoming bank transfers for accounting, and shipping labels are produced through a DHL integration matched to each order — order to picked, invoiced, reconciled and shipped, with almost no manual steps.",
    ],
    tags: ["Next.js", "E-commerce", "Logistics", "DHL API", "Automation"],
    role: ["Shop", "Back office", "Warehouse / logistics", "Accounting automation"],
    highlights: [
      "Scanner-driven picking path — optimised picker & warehouse workflow from order to packed parcel.",
      "Automatic invoicing with bank-transfer recognition that reconciles payments straight into accounting.",
      "DHL integration that generates the right shipping label per order automatically.",
      "Gated B2B storefront for verified health-care professionals.",
      "One connected system: catalogue, orders, logistics and finance.",
    ],
    accent: "#0284c7",
    kind: "client",
    url: "https://dynapharm.lu",
    shot: "/work/clients/dynapharm.png",
  },
  {
    slug: "nexa",
    name: "Nexa",
    tagline: "Off-grid power & energy e-commerce",
    description:
      "Online shop for Nexa — solar panels, LiFePO4 batteries, portable power stations, jump starters and vehicle maintenance gear. Off-grid solutions for home, camping and professionals.",
    body: [
      "Nexa is an energy & power retailer: solar panels, LiFePO4 batteries, portable power stations, AdBlue, welding equipment and vehicle maintenance — off-grid solutions for home, camping and professionals.",
      "I built the e-commerce experience: a clean, fast storefront with category browsing, product detail and checkout, optimised for conversion and search.",
    ],
    tags: ["Shopify", "E-commerce", "Storefront", "SEO"],
    role: ["Shop", "Storefront"],
    highlights: [
      "Conversion-focused storefront with strong category and product merchandising.",
      "Multilingual (DE) shop optimised for fast load and SEO.",
      "Built on a robust e-commerce stack with reliable checkout and fulfilment.",
    ],
    accent: "#16a34a",
    kind: "client",
    url: "https://nexa.lu",
    shot: "/work/clients/nexa.png",
  },
];

export const allWork: WorkItem[] = [...projects, ...clients];

export function getWork(slug: string): WorkItem | undefined {
  return allWork.find((w) => w.slug === slug);
}

export type Tool = { name: string; slug: string };

export const stack: Tool[] = [
  { name: "TypeScript", slug: "siTypescript" },
  { name: "Next.js", slug: "siNextdotjs" },
  { name: "React", slug: "siReact" },
  { name: "Flutter", slug: "siFlutter" },
  { name: "NestJS", slug: "siNestjs" },
  { name: "Node.js", slug: "siNodedotjs" },
  { name: "PostgreSQL", slug: "siPostgresql" },
  { name: "Prisma", slug: "siPrisma" },
  { name: "Redis", slug: "siRedis" },
  { name: "Stripe", slug: "siStripe" },
  { name: "Docker", slug: "siDocker" },
  { name: "Tailwind CSS", slug: "siTailwindcss" },
  { name: "Hetzner", slug: "siHetzner" },
  { name: "Claude / AI", slug: "siAnthropic" },
];

export const services = [
  {
    title: "Web platforms",
    body: "Full-stack web apps and marketplaces — from auth and payments to dashboards and multi-tenant SaaS.",
    icon: "globe",
  },
  {
    title: "Mobile apps",
    body: "Native-feel iOS & Android apps with Flutter — push, payments, offline-first, App Store delivery.",
    icon: "phone",
  },
  {
    title: "Automations & AI",
    body: "LLM-powered tools, scrapers, pipelines and integrations that remove manual work and scale operations.",
    icon: "spark",
  },
  {
    title: "End-to-end product",
    body: "Idea to shipped product — design, build, deploy and the infrastructure that keeps it running.",
    icon: "ship",
  },
];

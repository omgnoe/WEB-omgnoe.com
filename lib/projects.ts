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
  /** "Under the hood" talking points: tech, security, notable engineering. */
  highlights?: string[];
  accent: string;
  kind: "personal" | "client";
  url?: string;
  /** Square logo asset. */
  logo?: string;
  /** Screenshot asset. */
  shot?: string;
  /** Extra screenshots for the case-study gallery. */
  gallery?: { src: string; alt: string; kind?: "web" | "app" }[];
};

export const projects: WorkItem[] = [
  {
    slug: "boxbee",
    name: "BoxBee",
    tagline: "AI mail client, made in Luxembourg",
    description:
      "An AI-powered email client for professionals: summaries, language-aware reply drafts and a daily brief. Native on Mac, Windows and iOS, hosted entirely in the EU.",
    body: [
      "BoxBee is an AI-powered email client built for professionals. It summarises every mail in seconds, drafts replies in the language the message arrived in, auto-tags the inbox by priority and serves a Daily Brief every morning so the day starts with the picture, not the pile.",
      "It runs natively on Mac and Windows via Electron and on iPhone and iPad via a Swift/SwiftUI app, works with any IMAP provider (Gmail, iCloud, Outlook, custom domains) and is built around BeeCrypted, passwordless end-to-end encrypted mail between BoxBee users. Made in Luxembourg, hosted in the EU, with no US CloudAct exposure.",
    ],
    tags: ["Electron", "SwiftUI", "Next.js", "Fastify", "Prisma", "AI / LLM", "IMAP", "Stripe"],
    role: ["Full product", "Desktop + iOS", "AI / LLM", "Billing"],
    highlights: [
      "AI summaries, reply drafts and daily briefs: language-aware, tone-matching, EU-hosted inference.",
      "BeeCrypted: passwordless end-to-end encrypted mail between BoxBee users.",
      "Universal IMAP: Gmail, iCloud, Outlook and custom domains in one app.",
      "Native apps on three platforms: Mac and Windows via Electron, iPhone and iPad via SwiftUI.",
      "Apple-notarised on macOS, code-signed on Windows, auto-updating from boxbee.co releases.",
      "Hybrid billing: Stripe Web subscriptions plus Apple In-App Purchase, unified into one license model.",
      "EU-only hosting, no US CloudAct exposure. Your mail stays where it belongs.",
    ],
    accent: "#FFB800",
    kind: "personal",
    logo: "/work/boxbee.svg",
    shot: "/work/shots/boxbee.png",
    url: "https://boxbee.co",
    gallery: [
      { src: "/work/shots/gallery/boxbee-features.png", alt: "BoxBee features overview page" },
      { src: "/work/shots/gallery/boxbee-inbox.png", alt: "BoxBee smart inbox feature page" },
      { src: "/work/shots/gallery/boxbee-brief.png", alt: "BoxBee daily brief feature page" },
    ],
  },
  {
    slug: "salonify",
    name: "Salonify",
    tagline: "Booking & POS platform for salons",
    description:
      "A full marketplace for beauty and wellness: online booking, point of sale, Stripe Connect payouts, loyalty and native mobile apps. Live across multiple EU and Asian markets.",
    body: [
      "Salonify is a complete operating system for salons and wellness businesses: online booking, calendar management, a full point-of-sale, customer loyalty, marketing and analytics, all in one platform.",
      "It runs as a marketplace with Stripe Connect payouts, native customer and provider mobile apps, multi-currency support and localisation across multiple European and Asian markets. Built and operated end-to-end, from database and payment infrastructure to the apps in the stores.",
    ],
    tags: ["Next.js", "NestJS", "Flutter", "Stripe Connect", "PostgreSQL"],
    role: ["Full product", "Web + Mobile", "Payments", "Infrastructure"],
    highlights: [
      "Marketplace payments with Stripe Connect: split payouts and multi-currency pricing per country.",
      "Hardened auth: JWT plus refresh tokens, OAuth (Google / Apple / Facebook), 2FA, role-based guards and rate limiting.",
      "Secure file uploads validated by magic bytes, not extensions; security-audited and pen-tested.",
      "Runs on a two-server Hetzner setup (app plus data) over a private network. PostgreSQL and Redis are never exposed publicly.",
      "Localised across 12+ languages and multiple EU and Asian domains, with native customer and provider apps.",
    ],
    accent: "#7c3aed",
    kind: "personal",
    logo: "/work/salonify.svg",
    shot: "/work/shots/salonify.png",
    url: "https://salonify.eu",
    gallery: [
      { src: "/work/shots/gallery/salonify-marketplace.png", alt: "Salonify marketplace home" },
      { src: "/work/shots/gallery/salonify-app-calendar.png", alt: "Salonify Business app team calendar", kind: "app" },
      { src: "/work/shots/gallery/salonify-search.png", alt: "Salonify search with live results" },
      { src: "/work/shots/gallery/salonify-app-bookings.png", alt: "Salonify Business app bookings", kind: "app" },
      { src: "/work/shots/gallery/salonify-app-customer-home.png", alt: "Salonify customer app home", kind: "app" },
      { src: "/work/shots/gallery/salonify-business.png", alt: "Salonify for business landing page" },
      { src: "/work/shots/gallery/salonify-app-customers.png", alt: "Salonify Business app customer list", kind: "app" },
      { src: "/work/shots/gallery/salonify-app-customer-search.png", alt: "Salonify customer app search", kind: "app" },
      { src: "/work/shots/gallery/salonify-pricing.png", alt: "Salonify pricing page" },
    ],
  },
  {
    slug: "luxpos",
    name: "LUXPOS",
    tagline: "POS & business platform, Luxembourg",
    description:
      "One account for a whole business: point of sale, accounting with automatic VAT, banking, loyalty cards and Tap to Pay on iPhone. Built for the Luxembourg market.",
    body: [
      "LUXPOS is a modern point-of-sale and business platform built for restaurants, bars and retail: floor plans, table management, split bills, a kitchen display system, daily close and reporting.",
      "Beyond the till it bundles accounting with automatic VAT, connected banking, digital loyalty cards and integrated card payments. It supports Tap to Pay on iPhone, multi-location and multi-currency setups, and a clean web back office. Designed to be fast on the floor and simple to run.",
    ],
    tags: ["Next.js", "Tap to Pay", "Accounting", "KDS", "Multi-tenant", "Docker"],
    role: ["Full product", "POS", "Payments", "Accounting", "Back office"],
    highlights: [
      "Tap to Pay on iPhone: accept contactless cards directly on the device with no extra hardware (Apple-approved entitlement).",
      "Accounting with automatic VAT and eCDF reporting for the Luxembourg market.",
      "Real-time kitchen display system pushing orders from floor to kitchen instantly.",
      "Multi-tenant, multi-location and multi-currency architecture with isolated data per business.",
      "Offline-resilient POS flows so service never stops when the network blips.",
      "Containerised with Docker, zero-downtime rolling deploys.",
    ],
    accent: "#a3d918",
    kind: "personal",
    logo: "/work/luxpos.svg",
    shot: "/work/shots/luxpos.png",
    url: "https://luxpos.lu",
    gallery: [
      { src: "/work/shots/gallery/luxpos-loyalty.png", alt: "LUXPOS loyalty cards in Apple and Google Wallet" },
      { src: "/work/shots/gallery/luxpos-app-dashboard.png", alt: "LUXPOS Loyalty app dashboard with join QR code", kind: "app" },
      { src: "/work/shots/gallery/luxpos-accounting.png", alt: "LUXPOS accounting page" },
      { src: "/work/shots/gallery/luxpos-app-members.png", alt: "LUXPOS Loyalty app members with points", kind: "app" },
      { src: "/work/shots/gallery/luxpos-pricing.png", alt: "LUXPOS pricing page" },
      { src: "/work/shots/gallery/luxpos-app-campaign.png", alt: "LUXPOS Loyalty app campaigns", kind: "app" },
    ],
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
      "Teleconsultation and SMS notifications powered by Twilio.",
      "Security monitored with a Wazuh SIEM: audit logs and intrusion detection on sensitive health data.",
      "Multi-language platform (FR / DE / EN) built for the Luxembourg market.",
      "NestJS API plus PostgreSQL/Prisma, deployed load-balanced on Hetzner.",
    ],
    accent: "#00aeef",
    kind: "personal",
    logo: "/work/doctomap.png",
    shot: "/work/shots/doctomap.png",
    url: "https://doctomap.lu",
    gallery: [
      { src: "/work/shots/gallery/doctomap-search.png", alt: "Doctomap doctor search with live availability" },
      { src: "/work/shots/gallery/doctomap-specialties.png", alt: "Doctomap specialties directory" },
      { src: "/work/shots/gallery/doctomap-doctors.png", alt: "Doctomap page for doctors" },
    ],
  },
  {
    slug: "tta",
    name: "TTA Technologies",
    tagline: "European technology group",
    description:
      "The technology group behind Salonify, LUXPOS, BoxBee and DepotGest: one shared platform for software, AI, payments and automation, built and operated from Luxembourg.",
    body: [
      "TTA Technologies is the group behind my products. Instead of building isolated tools, TTA builds the shared platform they all stand on: software, artificial intelligence, payments, automation and company infrastructure on one common foundation.",
      "Salonify, LUXPOS, BoxBee and DepotGest all run on this base: shared infrastructure, shared security practices, shared operations tooling. The group site presents the platform, the products and the partner program.",
    ],
    tags: ["Next.js", "Platform", "Brand", "Infrastructure"],
    role: ["Group platform", "Brand & site", "Infrastructure"],
    highlights: [
      "One platform powering four shipping products across POS, booking, email and logistics.",
      "Shared server fleet with monitoring agents, central admin cockpit and uptime tracking.",
      "Group-level admin console aggregating live stats from every product.",
      "Designed, written and shipped as the public face of the group.",
    ],
    accent: "#c8e64a",
    kind: "personal",
    logo: "/work/tta.png",
    shot: "/work/shots/tta.png",
    url: "https://tta.lu",
  },
  {
    slug: "depotgest",
    name: "DepotGest",
    tagline: "Warehouse management in 3D",
    description:
      "Warehouse management, webshop and logistics in one platform: every shelf as a digital 3D twin, picking flows, and LUXPOS accounting built in. Engineered in Luxembourg.",
    body: [
      "DepotGest makes a warehouse visible: every storage slot exists as a digital twin in 3D, and every sale flows through the same pipeline as picking, the webshop and LUXPOS accounting.",
      "It covers stock management with batch and expiry tracking, GS1-128 barcodes, a REST API and a connected webshop on the business's own domain. Built for companies that want to grow without losing control of their shelves.",
    ],
    tags: ["Next.js", "3D", "Logistics", "WMS", "REST API"],
    role: ["Full product", "WMS", "Webshop", "Accounting link"],
    highlights: [
      "Digital 3D twin of the warehouse: every slot, shelf and zone is visible and clickable.",
      "Batch, expiry and GS1-128 barcode tracking built for GoBD-compliant operations.",
      "Connected webshop plus LUXPOS accounting so stock, sales and books stay in sync.",
      "REST API for integrations and custom flows.",
    ],
    accent: "#b7e219",
    kind: "personal",
    logo: "/work/depotgest.svg",
    shot: "/work/shots/depotgest.png",
    url: "https://depotgest.com",
  },
  {
    slug: "sellout-ai",
    name: "SellOut AI",
    tagline: "Snap it. Analyze it. Sell it.",
    description:
      "AI-powered listings for your second-hand items. Snap a photo, let the AI identify, price and write a professional listing in minutes, then sell smarter on every marketplace.",
    body: [
      "SellOut AI turns a photo into a ready-to-post listing. Snap your second-hand item and the AI identifies it, suggests a price and writes a professional, multi-language description in minutes.",
      "It is built to remove the friction of selling on marketplaces: analyse, generate and sell smarter. Shipped as a mobile app with on-device capture and AI analysis.",
    ],
    tags: ["AI", "iOS", "Computer Vision", "LLM", "Flutter"],
    role: ["Full product", "Mobile", "AI / LLM"],
    highlights: [
      "Computer-vision identification turns a single photo into a structured product profile.",
      "LLM-generated, multi-language listing copy and smart price suggestions in seconds.",
      "On-device capture flow designed for speed: snap, review, publish.",
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
      "Brand landing page for ABSAAR, the German automotive power specialist: batteries, jump starters and chargers. A bold, dark, high-impact presentation of the brand and its heritage.",
    body: [
      "ABSAAR is a German automotive power brand with roots back to 1969: batteries, jump starters, chargers and power solutions sold across Europe.",
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
    logo: "/work/clients/icons/absaar.png",
    shot: "/work/clients/absaar-v2.png",
  },
  {
    slug: "barbertruck",
    name: "BarberTruck",
    tagline: "Luxembourg's first mobile barbershop",
    description:
      "Street-editorial website for Luxembourg's first mobile barbershop: a fully custom Mercedes Sprinter studio, bold oversized type, and booking that comes to you.",
    body: [
      "BarberTruck is Luxembourg's first mobile barbershop: a fully custom Mercedes Sprinter fitted like a proper studio, serving clients on location across Luxembourg and Europe.",
      "I built the full website in a bold street-editorial style: oversized display type, monochrome imagery with a single orange accent, pages for the truck, the Presidents service menu, locations, corporate and events, all wired into online booking.",
    ],
    tags: ["Static site", "Brand", "Booking", "SEO"],
    role: ["Website", "Brand", "Booking"],
    highlights: [
      "Street-editorial design: oversized condensed type, monochrome imagery, one accent colour.",
      "Service menu with personality: every cut is named after a president.",
      "Fast static pages with online booking for a service that travels to the client.",
    ],
    accent: "#f4511e",
    kind: "client",
    shot: "/work/clients/barbertruck.png",
    url: "https://barbertruck.lu",
    gallery: [
      { src: "/work/shots/gallery/barbertruck-truck.png", alt: "BarberTruck concept page, a studio with an engine" },
      { src: "/work/shots/gallery/barbertruck-services.png", alt: "BarberTruck Presidents service menu" },
      { src: "/work/shots/gallery/barbertruck-locations.png", alt: "BarberTruck locations page" },
      { src: "/work/shots/gallery/barbertruck-corporate.png", alt: "BarberTruck corporate page" },
    ],
  },
  {
    slug: "o2nails",
    name: "O2NAILS",
    tagline: "Luxury nail art technology",
    description:
      "Website for O2NAILS, luxury nail art technology and digital nail printing. A clean, premium product showcase with collections and shop.",
    body: [
      "O2NAILS brings digital nail-printing technology to the luxury beauty market: print intricate nail art in seconds.",
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
    logo: "/work/clients/icons/o2nails.png",
    shot: "/work/clients/o2nails.png",
  },
  {
    slug: "dspimmo",
    name: "DSPImmo",
    tagline: "Real estate agency, Luxembourg",
    description:
      "Landing page and back office for a Luxembourg real estate agency: houses, apartments and land, with listing management behind the scenes.",
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
    logo: "/work/clients/icons/dspimmo.png",
    shot: "/work/shots/dspimmo.png",
  },
  {
    slug: "homecenter",
    name: "Home Center",
    tagline: "Furniture & showroom, Luxembourg",
    description:
      "End-to-end build for Home Center Luxembourg, a 3,500 m² furniture showroom: landing page, online shop, back office and an in-store POS system.",
    body: [
      "Home Center is a 3,500 m² furniture store and showroom in Hollerich, Luxembourg, where tradition meets modern living.",
      "I built the full stack for them: the public landing page, an online shop, the back office to manage catalogue and orders, and an in-store POS. One connected system from storefront to checkout.",
    ],
    tags: ["Next.js", "E-commerce", "POS", "Back office"],
    role: ["Landing page", "Shop", "Back office", "POS"],
    highlights: [
      "One connected system from storefront to checkout: landing, shop, back office and in-store POS.",
      "Shared catalogue and inventory across the web shop and the physical 3,500 m² showroom.",
      "In-store POS tied into the same orders and stock as online.",
      "Back office for catalogue, orders and customers in one place.",
    ],
    accent: "#2563eb",
    kind: "client",
    url: "https://homecenter.lu",
    logo: "/work/clients/icons/homecenter.svg",
    shot: "/work/shots/homecenter.png",
  },
  {
    slug: "dynapharm",
    name: "Dynapharm",
    tagline: "B2B health commerce with logistics automation",
    description:
      "A B2B health and wellness commerce platform with a full warehouse and accounting engine: scanner-driven picking, automated invoicing with bank-transfer reconciliation, and DHL label generation.",
    body: [
      "Dynapharm is a B2B shop for health-care professionals: a gated storefront, full catalogue and ordering for verified business accounts.",
      "Behind the shop I built a complete operations engine. Orders flow into a warehouse workflow with a scanner-based picking path that guides pickers through the most efficient route. Invoices are generated automatically and reconciled against incoming bank transfers for accounting, and shipping labels are produced through a DHL integration matched to each order. From order to picked, invoiced, reconciled and shipped, with almost no manual steps.",
    ],
    tags: ["Next.js", "E-commerce", "Logistics", "DHL API", "Automation"],
    role: ["Shop", "Back office", "Warehouse / logistics", "Accounting automation"],
    highlights: [
      "Scanner-driven picking path: optimised picker and warehouse workflow from order to packed parcel.",
      "Automatic invoicing with bank-transfer recognition that reconciles payments straight into accounting.",
      "DHL integration that generates the right shipping label per order automatically.",
      "Gated B2B storefront for verified health-care professionals.",
      "One connected system: catalogue, orders, logistics and finance.",
    ],
    accent: "#e11d2a",
    kind: "client",
    url: "https://dynapharm.lu",
    logo: "/work/clients/icons/dynapharm.png",
    shot: "/work/shots/dynapharm.png",
    gallery: [
      { src: "/work/shots/gallery/dynapharm-deliveries.png", alt: "Dynapharm live delivery tracking with driver routes on a map" },
      { src: "/work/shots/gallery/dynapharm-stockview.png", alt: "Dynapharm 3D live warehouse view with zones and racks" },
      { src: "/work/shots/gallery/dynapharm-admin.png", alt: "Dynapharm back office overview with orders and sign-ups" },
      { src: "/work/shots/gallery/dynapharm-orders.png", alt: "Dynapharm order management" },
      { src: "/work/shots/gallery/dynapharm-products.png", alt: "Dynapharm product catalogue with bin locations and stock" },
      { src: "/work/shots/gallery/dynapharm-shop.png", alt: "Dynapharm gated B2B webshop" },
    ],
  },
  {
    slug: "hevert",
    name: "Hevert Hong Kong",
    tagline: "German natural medicines, Asian market",
    description:
      "E-commerce storefront bringing Hevert's German natural medicines and vitamins to the Hong Kong market: catalogue, cart and checkout with multi-currency support.",
    body: [
      "Hevert is a German family-owned pharmaceutical brand for natural medicines and vitamins, trusted since 1956. Hevert Hong Kong brings the range to the Asian market.",
      "I built the e-commerce storefront: product catalogue, search, account area, cart and checkout, localised for Hong Kong with HKD pricing and English product content.",
    ],
    tags: ["E-commerce", "Shopify", "Storefront", "SEO"],
    role: ["Shop", "Storefront", "Localisation"],
    highlights: [
      "Clean storefront presenting a regulated pharma catalogue clearly and safely.",
      "Localised for the Hong Kong market with HKD pricing.",
      "Fast catalogue browsing with search, collections and product detail pages.",
    ],
    accent: "#173f8f",
    kind: "client",
    url: "https://hevert.hk",
    logo: "/work/clients/icons/hevert.png",
    shot: "/work/shots/hevert.png",
  },
  {
    slug: "nexa",
    name: "Nexa",
    tagline: "Off-grid power & energy e-commerce",
    description:
      "Online shop for Nexa: solar panels, LiFePO4 batteries, portable power stations, jump starters and vehicle maintenance gear. Off-grid solutions for home, camping and professionals.",
    body: [
      "Nexa is an energy and power retailer: solar panels, LiFePO4 batteries, portable power stations, AdBlue, welding equipment and vehicle maintenance. Off-grid solutions for home, camping and professionals.",
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
    logo: "/work/clients/icons/nexa.png",
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
  { name: "Swift", slug: "siSwift" },
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

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short name for chips and nav. */
  name: string;
  /** Card + page headline. */
  title: string;
  /** One-liner for cards. */
  short: string;
  /** SEO meta description. */
  meta: string;
  /** Intro paragraphs on the service page. */
  intro: string[];
  /** What you get. */
  deliverables: string[];
  /** Small proof line pointing at real work. */
  proof: string;
  /** Related work slugs. */
  related: string[];
  faq: ServiceFaq[];
  keywords: string[];
  icon: string;
  accent: string;
  /** Optional editorial photo for the service hero. */
  photo?: string;
  photoAlt?: string;
};

export const services: Service[] = [
  {
    slug: "ios-apps",
    name: "iOS apps",
    title: "iOS & Apple app development",
    short: "Native apps for iPhone, iPad and Mac. Swift, SwiftUI and Flutter, all the way to the App Store.",
    meta: "iOS app development in Luxembourg: native iPhone, iPad and Mac apps built with Swift, SwiftUI and Flutter, delivered to the App Store. From idea to a shipped, signed, reviewed app.",
    intro: [
      "I build apps for the Apple ecosystem the way Apple intends them to be built: fast, native-feeling and polished. Depending on the project that means Swift and SwiftUI for a fully native app, or Flutter when one codebase should cover iPhone and Android together.",
      "I have shipped mail clients, point-of-sale apps with Tap to Pay on iPhone, booking apps and AI tools through App Review. That includes the parts most teams underestimate: signing and provisioning, entitlements, StoreKit and In-App Purchase, push notifications, widgets and passing review on the first or second attempt instead of the fifth.",
      "You get one person who covers design, code, backend and the App Store process. No handoffs, no lost context.",
    ],
    deliverables: [
      "Native iPhone and iPad apps in Swift / SwiftUI",
      "Cross-platform apps in Flutter (one codebase, iOS + Android)",
      "Mac apps, notarised and auto-updating",
      "Tap to Pay on iPhone and StoreKit / In-App Purchase",
      "Push notifications, widgets, background sync",
      "App Store submission, review handling and release management",
    ],
    proof: "Shipped: BoxBee for iPhone and iPad, LUXPOS with Tap to Pay on iPhone, Salonify customer and provider apps.",
    related: ["boxbee", "luxpos", "salonify", "sellout-ai"],
    faq: [
      {
        q: "Do you build fully native or cross-platform?",
        a: "Both. Fully native Swift/SwiftUI when the app should feel deeply integrated with iOS, Flutter when one codebase for iOS and Android saves you real money. I recommend the right one for your case, not the one that is convenient for me.",
      },
      {
        q: "Can you take over the whole App Store process?",
        a: "Yes. Developer account setup, certificates, provisioning, TestFlight betas, App Review communication and the actual release. You approve, I handle the rest.",
      },
      {
        q: "Do you also build the backend the app talks to?",
        a: "Almost always. I build the API, database and infrastructure alongside the app so everything fits together and there is one responsible person for the whole system.",
      },
    ],
    keywords: [
      "iOS app development Luxembourg",
      "iPhone app developer",
      "SwiftUI developer",
      "Flutter app development",
      "App Store publishing",
      "Tap to Pay on iPhone",
    ],
    icon: "apple",
    accent: "#171410",
  },
  {
    slug: "android-apps",
    name: "Android apps",
    title: "Android app development",
    short: "Android apps with Flutter: one codebase, native feel, delivered to Google Play.",
    meta: "Android app development in Luxembourg: Flutter apps with a native feel, push notifications, payments and offline support, published to Google Play. One codebase for Android and iOS.",
    intro: [
      "Most projects that need an Android app also need an iOS app. That is why I build Android with Flutter: one codebase that compiles to real native binaries for both platforms, with a look and feel users cannot tell apart from platform-native apps.",
      "I cover the full Android side: Material design language where it belongs, push via Firebase Cloud Messaging, Google Play billing, deep links, offline-first data sync and the Play Console process from internal testing tracks to production rollout.",
      "The result is one app, two stores, half the maintenance cost of two separate native codebases.",
    ],
    deliverables: [
      "Flutter apps for Android (and iOS from the same codebase)",
      "Google Play publishing: listings, testing tracks, production rollout",
      "Push notifications via Firebase Cloud Messaging",
      "Google Play billing and Stripe payments",
      "Offline-first sync and background work",
      "Play Console setup, signing and release management",
    ],
    proof: "Shipped: Salonify provider app on Google Play with staged rollout to live customers.",
    related: ["salonify", "sellout-ai", "luxpos"],
    faq: [
      {
        q: "Why Flutter and not native Kotlin?",
        a: "For most business apps Flutter delivers the same user experience at roughly half the build and maintenance cost, because iOS comes almost for free. When a project genuinely needs Kotlin-level platform access, I will tell you before we start.",
      },
      {
        q: "Can you publish under my company's Play Store account?",
        a: "Yes, and I recommend it: the app should live in your account, with me as an invited developer. I handle verification, signing keys and the release process with you.",
      },
      {
        q: "What about tablets and larger screens?",
        a: "Layouts are responsive by default. If tablets matter for your use case, for example a counter or kiosk app, I design for them explicitly.",
      },
    ],
    keywords: [
      "Android app development Luxembourg",
      "Flutter developer",
      "Google Play publishing",
      "cross-platform app development",
      "mobile app developer Luxembourg",
    ],
    icon: "android",
    accent: "#3ddc84",
  },
  {
    slug: "app-publishing",
    name: "App publishing",
    title: "App Store & Google Play publishing",
    short: "Signing, review, store listings and releases. I get apps through Apple and Google review.",
    meta: "App publishing service: App Store and Google Play submission, signing, certificates, review handling, store listings and release management for iOS and Android apps.",
    intro: [
      "Getting an app built is half the job. Getting it through Apple review, signed correctly, listed well and updated safely is the other half, and it is where many teams lose weeks.",
      "I run the publishing side as a service: developer accounts, certificates and provisioning, privacy declarations, App Review and Play Console review communication, staged rollouts and the store listing itself with screenshots and copy that convert. I have taken apps through rejections, appeals and entitlement requests (including Apple's Tap to Pay entitlement) and know how the review teams think.",
      "If you already have an app that is stuck in review or a release process that keeps breaking, this is the fastest way to fix it.",
    ],
    deliverables: [
      "Apple Developer and Google Play account setup and verification",
      "Certificates, signing keys and provisioning done right",
      "Store listings: screenshots, preview media, copy, keywords",
      "Review submission and rejection handling on both stores",
      "TestFlight and Play testing tracks for betas",
      "Release management: staged rollouts, phased releases, hotfixes",
    ],
    proof: "Taken through review: BoxBee (Mac, iOS), LUXPOS (Tap to Pay entitlement), Salonify apps on both stores.",
    related: ["boxbee", "salonify", "luxpos"],
    faq: [
      {
        q: "My app keeps getting rejected. Can you help?",
        a: "Usually yes. Most rejections come from a small set of causes: privacy declarations, payment rules, background modes or metadata. I diagnose the rejection, fix the cause and write the reviewer notes that get it through.",
      },
      {
        q: "Can you publish an app you did not build?",
        a: "Yes. I audit the build and signing setup first, then take over the store process. If the app itself needs changes to pass review, I can make them too.",
      },
      {
        q: "Do you handle updates after launch?",
        a: "Yes. Ongoing release management is available as a retainer: I ship your updates, watch the rollout and handle any store communication.",
      },
    ],
    keywords: [
      "app store publishing service",
      "app review rejection help",
      "google play publishing",
      "app release management",
      "testflight setup",
    ],
    icon: "rocket",
    accent: "#ff5a1f",
  },
  {
    slug: "websites",
    name: "Websites",
    title: "Websites & web platforms",
    short: "From landing pages to full platforms with shops, booking and back offices. Fast, SEO-first, built to convert.",
    meta: "Web development in Luxembourg: websites, online shops, booking platforms and SaaS built with Next.js. Fast, SEO-optimised, multilingual and mobile-first, from landing page to full platform.",
    intro: [
      "I build everything from a sharp one-page site to a full platform with shop, booking engine and back office. The common denominator: fast pages, clean design, technical SEO from the first commit and a build the next developer can actually maintain.",
      "My stack is Next.js, React and Tailwind on the front, Node and PostgreSQL behind it. Sites ship with structured data, sitemaps, proper metadata, image optimisation and multilingual support where the Luxembourg market needs it (FR / DE / EN and more).",
      "For businesses I have delivered brand sites, e-commerce storefronts, real-estate landings with back offices, B2B shops with logistics automation and complete showroom systems that connect the web shop to the in-store till.",
    ],
    deliverables: [
      "Landing pages and brand sites that load fast and rank",
      "Online shops and e-commerce storefronts",
      "Booking flows and customer portals",
      "Back offices and admin dashboards",
      "Technical SEO: structured data, sitemaps, Core Web Vitals",
      "Multilingual builds for the Luxembourg market",
    ],
    proof: "Delivered: ABSAAR, BarberTruck, DSPImmo, Home Center, Dynapharm, O2NAILS, Nexa, Hevert Hong Kong and more.",
    related: ["homecenter", "dynapharm", "dspimmo", "absaar", "barbertruck", "hevert"],
    faq: [
      {
        q: "How long does a website take?",
        a: "A focused landing page ships in one to two weeks. A shop or a site with booking and back office typically takes four to eight weeks depending on scope. I give you a concrete timeline after one conversation.",
      },
      {
        q: "Do you do design as well as development?",
        a: "Yes. Most clients come with a logo and an idea; I take it from there to a finished, designed, built and deployed site. If you have a designer, I build to their spec.",
      },
      {
        q: "Will my site rank on Google?",
        a: "Technical SEO is built in: clean markup, structured data, sitemaps, fast Core Web Vitals and per-page metadata. I also structure content for the searches your customers actually make. Rankings then depend on content and competition, and I tell you honestly what to expect.",
      },
    ],
    keywords: [
      "web development Luxembourg",
      "website erstellen Luxembourg",
      "Next.js developer",
      "e-commerce development",
      "online shop Luxembourg",
      "SEO website",
    ],
    icon: "globe",
    accent: "#2563eb",
  },
  {
    slug: "it-support",
    name: "IT help",
    title: "IT help & support",
    short: "Hands-on IT help for small businesses: devices, email, networks, printers, tills and the daily chaos.",
    meta: "IT support for small businesses in Luxembourg: devices, email, Wi-Fi, printers, POS tills, backups and software problems, fixed hands-on and explained in plain language.",
    intro: [
      "Small businesses rarely need a big IT department. They need one person who picks up the phone, understands the problem and fixes it. That is the service.",
      "I support shops, salons, restaurants and offices with the real-world stack they run on: Macs and PCs, email and domains, Wi-Fi and networks, printers and scanners, POS tills and payment terminals, tablets and the twenty small tools that hold a business together.",
      "Because I build software and run servers professionally, I fix root causes rather than symptoms, and I explain what happened in plain language, not jargon.",
    ],
    deliverables: [
      "On-site and remote troubleshooting for Mac, Windows, iOS and Android",
      "Email, domains and DNS sorted out properly",
      "Wi-Fi, networking and printer setup that stays working",
      "POS tills, payment terminals and scanner hardware",
      "Backups that actually restore",
      "Plain-language advice on what to buy and what to skip",
    ],
    proof: "Ongoing IT support for retail stores, salons and offices across Luxembourg, from tills to networks.",
    related: ["homecenter", "luxpos", "dynapharm"],
    faq: [
      {
        q: "Do you come on site?",
        a: "Yes, across Luxembourg. Many issues are also fixable remotely within the hour, and remote is always cheaper, so I start there when it makes sense.",
      },
      {
        q: "Can you be our ongoing IT contact?",
        a: "Yes. Several businesses keep me on a small monthly retainer: I am their first call for anything IT, and their systems get maintained before they break.",
      },
      {
        q: "We are not technical at all. Is that a problem?",
        a: "That is the normal case. You describe the problem in your words, I ask the right questions and translate everything back into plain language.",
      },
    ],
    keywords: [
      "IT support Luxembourg",
      "IT help small business",
      "computer repair Luxembourg",
      "network setup",
      "POS support",
      "IT Hilfe Luxemburg",
    ],
    icon: "wrench",
    accent: "#0891b2",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    title: "Cybersecurity & hardening",
    short: "Security audits, hardening and monitoring for web platforms and small-business infrastructure.",
    meta: "Cybersecurity services in Luxembourg: security audits, server hardening, intrusion detection with SIEM monitoring, secure authentication and GDPR-aware handling of sensitive data.",
    intro: [
      "I secure the kind of systems I also build: web platforms, APIs, servers and the businesses behind them. That gives audits a practical edge, because I know where developers cut corners and where attackers look first.",
      "The work ranges from one-off security audits of an existing platform (auth flows, access control, injection surfaces, file uploads, dependency risks) to hardening servers, setting up intrusion detection with a Wazuh SIEM, locking down Cloudflare and DNS, and building authentication that holds: 2FA, rate limiting, session handling, role guards.",
      "I run this in production on my own platforms, including systems handling sensitive health data, and the same standards go into client work.",
    ],
    deliverables: [
      "Security audits of web platforms and APIs with a prioritised findings report",
      "Server and infrastructure hardening (Linux, Docker, databases)",
      "SIEM / intrusion detection setup and monitoring (Wazuh)",
      "Authentication done right: 2FA, OAuth, rate limits, role guards",
      "Cloudflare, DNS and email security (SPF, DKIM, DMARC)",
      "Incident response when something already went wrong",
    ],
    proof: "In production: Wazuh SIEM on health-data platforms, pen-tested marketplace auth, hardened multi-server fleets.",
    related: ["doctomap", "salonify", "luxpos"],
    faq: [
      {
        q: "What does a security audit look like?",
        a: "I review your platform the way an attacker would: authentication, authorisation, injection points, file handling, secrets, dependencies and infrastructure. You get a prioritised report with concrete fixes, and I can implement the fixes too.",
      },
      {
        q: "We had an incident. Can you help now?",
        a: "Contact me immediately. I help contain the issue, assess what was accessed, close the hole and get you back to a trustworthy state, then harden so it does not repeat.",
      },
      {
        q: "Is this only for big companies?",
        a: "No. Small businesses are attacked precisely because nobody hardened their systems. A one-day audit plus fixes already removes the most likely ways in.",
      },
    ],
    keywords: [
      "cybersecurity Luxembourg",
      "security audit web application",
      "penetration testing",
      "server hardening",
      "SIEM monitoring",
      "GDPR security",
    ],
    icon: "shield",
    accent: "#dc2626",
    photo: "/me/noe-suit.jpg",
    photoAlt: "Noe Nei in a dark control room",
  },
  {
    slug: "hosting",
    name: "Hosting & IT management",
    title: "Hosting & managed infrastructure",
    short: "EU hosting, deployments, monitoring, backups and updates. Your systems run, I keep them running.",
    meta: "Managed hosting and IT management: EU-based servers, Docker deployments, monitoring, backups, updates and zero-downtime releases for websites, shops and platforms.",
    intro: [
      "Every product I run lives on infrastructure I manage myself: EU-based servers, Docker, PostgreSQL, Redis, private networks, monitoring agents and automated backups. I offer the same setup as a service.",
      "Managed hosting here means the whole operational side: provisioning, TLS, DNS and Cloudflare, zero-downtime deployments, system updates, log and uptime monitoring, backup strategies that are tested by restoring, and alerting that reaches a human before customers notice.",
      "This pairs naturally with development work: I build your platform and then keep it fast, patched and online. But I also take over existing systems that currently have no responsible operator.",
    ],
    deliverables: [
      "EU-based hosting (Hetzner and comparable) with private networking",
      "Docker-based deployments with zero-downtime releases",
      "Monitoring, alerting and uptime tracking across your services",
      "Automated, restore-tested backups",
      "System and dependency updates on a schedule",
      "DNS, TLS, Cloudflare and email deliverability management",
    ],
    proof: "Operating daily: a multi-server fleet running Salonify, LUXPOS, BoxBee, Doctomap and client systems with monitoring and backups.",
    related: ["tta", "salonify", "luxpos", "boxbee"],
    faq: [
      {
        q: "Where is the hosting located?",
        a: "In the EU, primarily on Hetzner in Germany and Finland. Data stays under EU jurisdiction, which matters for GDPR and for clients who do not want US CloudAct exposure.",
      },
      {
        q: "Can you take over our existing server?",
        a: "Yes. I audit what is running, document it, bring backups and monitoring up to standard and then manage it ongoing. Migrations to cleaner setups are done step by step without downtime.",
      },
      {
        q: "What does managed hosting cost?",
        a: "A small site starts at a modest monthly rate including the server; platforms with databases, queues and multiple services are priced by what they actually need. You get one predictable monthly figure.",
      },
    ],
    keywords: [
      "managed hosting Luxembourg",
      "EU hosting GDPR",
      "server management",
      "Docker deployment",
      "IT management service",
      "website maintenance",
    ],
    icon: "server",
    accent: "#7c3aed",
    photo: "/me/noe-server.jpg",
    photoAlt: "Noe Nei diving into a server rack",
  },
  {
    slug: "products",
    name: "Own products",
    title: "Products I build & operate",
    short: "I do not only build for clients. I ship and run my own products, from POS to AI mail.",
    meta: "Noe Nei builds and operates his own software products: Salonify, LUXPOS, BoxBee, Doctomap and DepotGest. Product engineering experience that flows into every client project.",
    intro: [
      "Half of my week goes into products I own and operate: Salonify (booking and POS for salons), LUXPOS (point of sale and accounting), BoxBee (AI mail client), Doctomap (doctor booking) and DepotGest (warehouse management). Real products, real customers, real uptime responsibility.",
      "That changes how I work for clients. I know what happens after launch: support, monitoring, payments that fail at 2 am, App Store reviews, GDPR requests, server bills. So I build systems that survive contact with reality, not demos that impress once.",
      "It also means I can be a partner beyond code: pricing, onboarding, retention, payment flows and operations are things I do daily for my own companies.",
    ],
    deliverables: [
      "Product strategy grounded in operating real products",
      "MVPs that are actually shippable, not throwaway",
      "Payment and subscription architecture (Stripe, In-App Purchase)",
      "Analytics, monitoring and operational tooling from day one",
      "Honest advice on build vs buy vs skip",
    ],
    proof: "Live today: Salonify, LUXPOS, BoxBee, Doctomap, DepotGest and the TTA Technologies group platform.",
    related: ["salonify", "luxpos", "boxbee", "doctomap", "depotgest", "tta"],
    faq: [
      {
        q: "Why does this matter for my project?",
        a: "Because you get decisions from someone who has to live with his own decisions. Architecture, payments and operations are chosen the way I choose them for products I run myself, where a bad choice costs me directly.",
      },
      {
        q: "Do you take equity or partner on ideas?",
        a: "Occasionally, when the idea and the people fit. The default is a normal client relationship, but I am open to talking about ventures.",
      },
      {
        q: "Can I see the products live?",
        a: "Yes: salonify.eu, luxpos.lu, boxbee.co, doctomap.lu and depotgest.com are all live and open. What you see there is what I ship.",
      },
    ],
    keywords: [
      "product studio Luxembourg",
      "SaaS founder developer",
      "startup MVP development",
      "software products Luxembourg",
    ],
    icon: "cube",
    accent: "#a3d918",
    photo: "/me/noe-archive.jpg",
    photoAlt: "Noe Nei reviewing stacks of printed work",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Chrome strings for all three locales.
 *
 * House rule: no en/em dashes in anything a visitor reads. Commas and colons
 * instead, in every language.
 */

import type { Locale } from "@/lib/i18n";

export type Dict = {
  nav: { work: string; services: string; about: string; contact: string; hire: string };
  menu: { open: string; close: string; home: string; language: string; jump: string };
  common: {
    learnMore: string;
    allServices: string;
    allWork: string;
    seeWork: string;
    emailMe: string;
    getQuote: string;
    startConversation: string;
    startProject: string;
    sendInquiry: string;
    breadcrumb: string;
    home: string;
    viewCase: string;
    ownProduct: string;
    clientWork: string;
    visitSite: string;
  };
  home: {
    kicker: string;
    h1a: string;
    h1b: string;
    lead: string;
    ctaWork: string;
    stats: { shipped: string; own: string; services: string };
    portraitAlt: string;
    role: string;
    available: string;
    servicesKicker: string;
    servicesH2: string;
    servicesLead: string;
    trusted: string;
    trustedMore: string;
    workKicker: string;
    workH2: string;
    workLead: string;
    aboutKicker: string;
    aboutH2: string;
    aboutBody: string[];
    readStory: string;
    aboutStats: { n: string; l: string }[];
    locationChip: string;
    stackKicker: string;
    stackH2: string;
    howKicker: string;
    how: string[];
    contactKicker: string;
    contactH2: string;
    contactLead: string;
    replyLine: string;
    heroChips: string[];
  };
  servicesIndex: {
    title: string;
    description: string;
    kicker: string;
    h1a: string;
    h1b: string;
    lead: string;
    cardCta: string;
    ctaH2: string;
    ctaLead: string;
  };
  service: {
    howItWorks: string;
    trackRecord: string;
    whatYouGet: string;
    faqKicker: string;
    faqH2: string;
    proofKicker: string;
    proofH2: string;
    otherServices: string;
    ctaH2: (name: string) => string;
    ctaLead: string;
  };
  workIndex: {
    title: string;
    description: string;
    kicker: string;
    h1a: string;
    h1b: string;
    lead: string;
  };
  workItem: {
    scope: string;
    stack: string;
    galleryKicker: string;
    galleryH2: string;
    hoodKicker: string;
    moreClients: string;
    moreProducts: string;
    ctaH2: string;
    ctaLead: string;
    shotAlt: (name: string) => string;
  };
  grid: {
    all: string;
    own: string;
    client: string;
    showAll: (n: number) => string;
    empty: string;
  };
  footer: {
    blurb: string;
    aboutCv: string;
    services: string;
    products: string;
    clients: string;
    rights: string;
    madeBy: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    need: string;
    budget: string;
    timeline: string;
    project: string;
    projectPlaceholder: string;
    submit: string;
    sending: string;
    privacy: string;
    sentTitle: string;
    sentBody: string;
    failed: string;
    services: string[];
    budgets: string[];
    timelines: string[];
  };
  rail: {
    status: string;
    location: string;
    local: string;
    available: string;
  };
  op: {
    heroEyebrow: string;
    heroLine1: string;
    heroLine2: string;
    heroLead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroStats: { n: string; l: string }[];
    portraitMeta: string[];
    ticker: string[];

    systemsLabel: string;
    systemsH2: string;
    systemsLead: string;
    systemsLive: (n: number) => string;
    colSystem: string;
    colWhat: string;
    colStatus: string;
    statusLive: string;
    mine: string;
    client: string;
    openCase: string;

    searchLabel: string;
    searchH2: string;
    searchLead: (date: string) => string;
    statImpressions: string;
    statClicks: string;
    statGrowth: string;
    statDomains: string;
    statTop10: string;
    statTop3: string;
    searchWindow: (from: string, to: string) => string;
    searchFootnote: string;
    curveMultiple: (n: number) => string;
    curveFirstMonth: string;
    curveLastMonth: string;
    geoH3: string;
    geoBody: string;
    geoPoints: string[];

    storyLabel: string;
    storyH2: string;
    storyBody: string[];
    rankingCaption: string;
    pressLabel: string;
    storyCta: string;

    capLabel: string;
    capH2: string;
    capLead: string;

    howLabel: string;
    howH2: string;
    howSteps: { n: string; t: string; d: string }[];

    contactLabel: string;
    contactH2: string;
    contactLead: string;

    footStatus: string;
    footSnapshot: (date: string) => string;
  };
};

const en: Dict = {
  nav: { work: "Work", services: "Services", about: "About", contact: "Contact", hire: "Hire me" },
  menu: { open: "Open menu", close: "Close menu", home: "omgnoe, home", language: "Language", jump: "Jump to anything" },
  common: {
    learnMore: "Learn more",
    allServices: "All services",
    allWork: "All work",
    seeWork: "See the work",
    emailMe: "Email me",
    getQuote: "Get a quote",
    startConversation: "Start a conversation",
    startProject: "Start a project",
    sendInquiry: "Send an inquiry",
    breadcrumb: "Breadcrumb",
    home: "Home",
    viewCase: "View case study",
    ownProduct: "Own product",
    clientWork: "Client work",
    visitSite: "Visit live site",
  },
  home: {
    kicker: "Noe Nei · Full-stack developer · Luxembourg",
    h1a: "Websites, apps and the systems that",
    h1b: "keep them running.",
    lead: "I design, build and ship digital products end to end: iPhone and Android apps, web platforms, shops and the hosting, security and IT behind them. For clients, and for my own companies.",
    ctaWork: "See my work",
    stats: { shipped: "Products shipped", own: "Own products", services: "Services, one contact" },
    portraitAlt: "Noe Nei, developer from Luxembourg",
    role: "Developer · Founder",
    available: "Available",
    servicesKicker: "What I do",
    servicesH2: "One person. The whole stack.",
    servicesLead:
      "From the app on your customer's phone to the server it talks to. Every service below has its own page with details, scope and FAQ.",
    trusted: "I worked with",
    trustedMore: "and many more across Luxembourg and Europe",
    workKicker: "Portfolio",
    workH2: "Built, shipped, and live right now.",
    workLead:
      "My own products and selected client work. Filter by type or tap a technology. Every card opens a full case study.",
    aboutKicker: "About",
    aboutH2: "I turn ideas into products people use.",
    aboutBody: [
      "Based in Luxembourg, I work across the whole stack: from database schema and payment infrastructure to pixel-level frontend and native mobile apps. I have shipped marketplaces, POS systems, encrypted mail, booking platforms and AI tools.",
      "The difference: I also operate my own products with real customers. So I build things that survive contact with reality, and I stay around after launch to keep them fast, secure and online.",
      "I started working at fourteen, had my own company at eighteen, and lost all of it at twenty two before rebuilding as a developer. The full story and my CV are on their own page.",
    ],
    readStory: "Read my story",
    aboutStats: [
      { n: "39+", l: "Products shipped" },
      { n: "12+", l: "Languages localised" },
      { n: "EU", l: "Hosted & operated" },
    ],
    locationChip: "Luxembourg, EU",
    stackKicker: "Stack",
    stackH2: "Tools I build with",
    howKicker: "How I work",
    how: [
      "Understand the goal and the user, not just the feature list.",
      "Design and build the smallest thing that actually ships.",
      "Deploy, measure, iterate. Fast feedback beats perfect plans.",
      "Stay responsible: hosting, updates and security included.",
    ],
    contactKicker: "Contact",
    contactH2: "Let's build something.",
    contactLead:
      "An app, a website, a platform, or IT that finally works: tell me what you have in mind and I'll tell you how I'd build it.",
    replyLine: "Usually replies within a day · English, Deutsch, Français, Lëtzebuergesch",
    heroChips: ["Websites & shops", "iOS & Android apps", "Cybersecurity", "Hosting & IT"],
  },
  servicesIndex: {
    title: "Services: apps, websites, security, hosting & IT",
    description:
      "Everything I offer as a developer in Luxembourg: iOS and Android apps, app publishing, websites and shops, IT support, cybersecurity, managed hosting and my own products.",
    kicker: "Services",
    h1a: "Everything digital,",
    h1b: "from one person.",
    lead:
      "No agency overhead, no handoffs. I design, build, publish, secure and host, and you always talk to the person doing the work.",
    cardCta: "Details, scope & FAQ",
    ctaH2: "Not sure which one you need?",
    ctaLead:
      "Describe the problem in one email. I'll tell you what it takes, what it costs and how fast it ships.",
  },
  service: {
    howItWorks: "How it works",
    trackRecord: "Track record",
    whatYouGet: "What you get",
    faqKicker: "FAQ",
    faqH2: "Common questions",
    proofKicker: "Proof",
    proofH2: "Work in this area",
    otherServices: "Other services",
    ctaH2: (name) => `${name}: let's talk.`,
    ctaLead: "One message is enough. You describe the goal, I reply with a plan.",
  },
  workIndex: {
    title: "Work: own products & client projects",
    description:
      "The full portfolio of Noe Nei: own products built and operated end to end (Salonify, LUXPOS, BoxBee, Doctomap, DepotGest, TTA) and client websites, shops and platforms across Luxembourg and Europe.",
    kicker: "Portfolio",
    h1a: "Things I've built",
    h1b: "and actually shipped.",
    lead:
      "Own products I operate every day, and work delivered for clients across Luxembourg and Europe. Filter by type or technology.",
  },
  workItem: {
    scope: "Scope",
    stack: "Stack",
    galleryKicker: "Gallery",
    galleryH2: "A closer look",
    hoodKicker: "Under the hood",
    moreClients: "More client work",
    moreProducts: "More products",
    ctaH2: "Have a project like this?",
    ctaLead:
      "I build websites, platforms, shops and apps end to end. Tell me what you have in mind.",
    shotAlt: (name) => `${name} website screenshot`,
  },
  grid: {
    all: "Everything",
    own: "Own products",
    client: "Client work",
    showAll: (n) => `Show all ${n} projects`,
    empty: "Nothing matches this combination yet.",
  },
  footer: {
    blurb:
      "Noe Nei, full-stack developer and founder in Luxembourg. Apps, websites, hosting and IT, built and operated end to end.",
    aboutCv: "About & CV",
    services: "Services",
    products: "Products",
    clients: "Client work",
    rights: "Noe Nei · Luxembourg",
    madeBy: "Designed, built and hosted by me. Obviously.",
  },
  form: {
    name: "Name *",
    namePlaceholder: "Your name",
    email: "Email *",
    emailPlaceholder: "you@company.com",
    phone: "Phone",
    phonePlaceholder: "+352 ... (optional)",
    company: "Company",
    companyPlaceholder: "Optional",
    need: "I need",
    budget: "Budget",
    timeline: "Timeline",
    project: "Project *",
    projectPlaceholder:
      "What do you want to build or fix? Goals, current situation, links. The more detail, the better my answer.",
    submit: "Send inquiry",
    sending: "Sending…",
    privacy: "No newsletter, no spam. Your message goes straight to me.",
    sentTitle: "Message sent.",
    sentBody: "Thanks! I read every inquiry personally and usually reply within a day.",
    failed: "Sending failed. Please email me directly.",
    services: [
      "Website",
      "Online shop",
      "iOS / Android app",
      "Web platform / SaaS",
      "App publishing",
      "IT help & support",
      "Cybersecurity",
      "Hosting & IT management",
      "Something else",
    ],
    budgets: [
      "Not sure yet",
      "Under 2.500 EUR",
      "2.500 to 10.000 EUR",
      "10.000 to 25.000 EUR",
      "25.000 EUR or more",
    ],
    timelines: ["As soon as possible", "Within 1 to 3 months", "In 3 months or later", "Flexible"],
  },
  rail: {
    status: "All systems live",
    location: "Luxembourg",
    local: "Local",
    available: "Taking work",
  },
  op: {
    heroEyebrow: "Noe Nei · Full-stack developer · Luxembourg",
    heroLine1: "I don't just build",
    heroLine2: "software. I run it.",
    heroLead:
      "Seven products of my own with paying customers. Eight client platforms. Apps in both stores, payments, servers, security and the support line, all from one person in Luxembourg.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the systems",
    heroStats: [
      { n: "15", l: "Systems live right now" },
      { n: "384K", l: "Google impressions, 90 days" },
      { n: "1", l: "Person you talk to" },
    ],
    portraitMeta: ["Noe Nei", "Developer / Founder", "Luxembourg"],
    ticker: [
      "iOS apps",
      "Android apps",
      "Web platforms",
      "Online shops",
      "Point of sale",
      "Payments",
      "Hosting",
      "Cybersecurity",
      "SEO and GEO",
      "IT support",
    ],

    systemsLabel: "01 / Systems",
    systemsH2: "Built, shipped, and online right now.",
    systemsLead:
      "My own products and client platforms. Every one of them is live, every one has a full case study. Filter by type, or point at a row to see it.",
    systemsLive: (n) => `${n} live`,
    colSystem: "System",
    colWhat: "What it is",
    colStatus: "Status",
    statusLive: "Live",
    mine: "Mine",
    client: "Client",
    openCase: "Open case study",

    searchLabel: "02 / Measured",
    searchH2: "SEO and GEO, from zero, with the receipts.",
    searchLead: (date) =>
      `Most people selling you search visibility show you somebody else's case study. These are my own domains, in my own Search Console, built from nothing. Pulled on ${date}.`,
    statImpressions: "Impressions, 90 days",
    statClicks: "Clicks, 90 days",
    statGrowth: "vs previous 90 days",
    statDomains: "Domains measured",
    statTop10: "Queries in the top 10",
    statTop3: "Queries in the top 3",
    searchWindow: (from, to) => `Window ${from} to ${to}`,
    searchFootnote:
      "Source: Google Search Console, properties I own and operate. A domain's first month is the first month it was measured. Read by hand from the console, never estimated.",
    curveMultiple: (n) => `${n}x`,
    curveFirstMonth: "First measured month",
    curveLastMonth: "Last full month",
    geoH3: "And the half almost nobody does yet.",
    geoBody:
      "Search is moving into assistants. Being found there is a different job to ranking on Google, and it is the part I build in from the first day.",
    geoPoints: [
      "An llms.txt and explicit AI crawler rules, so ChatGPT, Claude and Perplexity are allowed in and know which facts to quote.",
      "One entity graph with fixed IDs across the whole site, instead of a loose blob of schema repeated on every page.",
      "Question pages that answer in the first sentence, because an answer buried in paragraph four gets quoted far less often.",
      "IndexNow on every publish, so a new page is known in hours instead of waiting weeks to be crawled.",
    ],

    storyLabel: "03 / Track record",
    storyH2: "Fifth most downloaded delivery app in Luxembourg. Then I lost all of it.",
    storyBody: [
      "In 2024 I built Umarket, a grocery delivery app, while working inside Wolt and watching how the market actually ran. By the second quarter it was the fifth most downloaded food delivery app in the country, behind Wolt, Wedely, Uber Eats and Takeaway.",
      "In October my business partner took the building. By December I was at zero, with thirty thousand euros of company debt that I paid back out of my own salary.",
      "I rebuilt as a developer. That is why I do not oversell, and why I am still there after launch.",
    ],
    rankingCaption:
      "Food delivery apps in Luxembourg, Q2 2024, downloads, iOS and Android combined. Source: Sensor Tower.",
    pressLabel: "Written about, and written by me",
    storyCta: "Read the whole story",

    capLabel: "04 / Capabilities",
    capH2: "One person. The whole stack.",
    capLead:
      "From the app on your customer's phone to the server it talks to, and the Google result that sent them there. Every line below has its own page with scope, timing and an FAQ.",

    howLabel: "05 / How it runs",
    howH2: "No deck. No agency layer. No surprise invoice.",
    howSteps: [
      { n: "1.0", t: "Call", d: "Thirty minutes. What you want, roughly what it costs, and whether I am the right person for it." },
      { n: "2.0", t: "Scope", d: "A written scope with a fixed price and a delivery date, before anybody builds anything." },
      { n: "3.0", t: "Build", d: "You watch it running on a real URL from the first week, not in a presentation at the end." },
      { n: "4.0", t: "Live", d: "I ship it, host it, secure it and keep watching it. The number you call afterwards is still mine." },
    ],

    contactLabel: "06 / Start",
    contactH2: "Tell me what is broken, or what you want to exist.",
    contactLead:
      "The more detail you give me, the better my answer. Usually a reply within a day, in English, Deutsch, Français or Lëtzebuergesch.",

    footStatus: "All systems online",
    footSnapshot: (date) => `Search figures measured ${date}`,
  },
};

const fr: Dict = {
  nav: {
    work: "Réalisations",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    hire: "Me contacter",
  },
  menu: {
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    home: "omgnoe, accueil",
    language: "Langue",
    jump: "Aller à",
  },
  common: {
    learnMore: "En savoir plus",
    allServices: "Tous les services",
    allWork: "Toutes les réalisations",
    seeWork: "Voir les réalisations",
    emailMe: "Écrivez-moi",
    getQuote: "Demander un devis",
    startConversation: "Démarrer la discussion",
    startProject: "Démarrer un projet",
    sendInquiry: "Envoyer la demande",
    breadcrumb: "Fil d'Ariane",
    home: "Accueil",
    viewCase: "Voir l'étude de cas",
    ownProduct: "Produit propre",
    clientWork: "Projet client",
    visitSite: "Voir le site en ligne",
  },
  home: {
    kicker: "Noe Nei · Développeur full-stack · Luxembourg",
    h1a: "Sites internet, applications et les systèmes qui",
    h1b: "les font tourner.",
    lead:
      "Je conçois, développe et livre des produits numériques de bout en bout : sites internet, boutiques en ligne, applications iPhone et Android, plateformes web, et l'hébergement, la sécurité et l'informatique qui vont derrière. Pour mes clients, et pour mes propres sociétés.",
    ctaWork: "Voir mes réalisations",
    stats: { shipped: "Produits livrés", own: "Produits propres", services: "Services, un seul contact" },
    portraitAlt: "Noe Nei, développeur au Luxembourg",
    role: "Développeur · Fondateur",
    available: "Disponible",
    servicesKicker: "Ce que je fais",
    servicesH2: "Une seule personne. Toute la chaîne.",
    servicesLead:
      "Du site que vos clients ouvrent sur leur téléphone jusqu'au serveur qui le fait tourner. Chaque service ci-dessous a sa propre page avec le détail, le périmètre et une FAQ.",
    trusted: "J'ai travaillé avec",
    trustedMore: "et beaucoup d'autres au Luxembourg et en Europe",
    workKicker: "Portfolio",
    workH2: "Conçu, livré, et en ligne en ce moment.",
    workLead:
      "Mes propres produits et une sélection de projets clients. Filtrez par type ou par technologie. Chaque carte ouvre une étude de cas complète.",
    aboutKicker: "À propos",
    aboutH2: "Je transforme des idées en produits que les gens utilisent.",
    aboutBody: [
      "Basé au Luxembourg, je travaille sur toute la chaîne technique : du schéma de base de données et de l'infrastructure de paiement jusqu'au frontend au pixel près et aux applications mobiles natives. J'ai livré des places de marché, des systèmes de caisse, de la messagerie chiffrée, des plateformes de réservation et des outils d'IA.",
      "La différence : j'exploite aussi mes propres produits avec de vrais clients. Je construis donc des choses qui survivent au contact du réel, et je reste présent après la mise en ligne pour les garder rapides, sûres et accessibles.",
      "J'ai commencé à travailler à quatorze ans, j'avais ma société à dix-huit, et j'ai tout perdu à vingt-deux avant de me reconstruire comme développeur. L'histoire complète et mon CV sont sur leur propre page.",
    ],
    readStory: "Lire mon parcours",
    aboutStats: [
      { n: "39+", l: "Produits livrés" },
      { n: "12+", l: "Langues localisées" },
      { n: "UE", l: "Hébergé & exploité" },
    ],
    locationChip: "Luxembourg, UE",
    stackKicker: "Technologies",
    stackH2: "Les outils avec lesquels je construis",
    howKicker: "Ma méthode",
    how: [
      "Comprendre l'objectif et l'utilisateur, pas seulement la liste de fonctionnalités.",
      "Concevoir et développer la plus petite version qui tienne vraiment la route.",
      "Mettre en ligne, mesurer, itérer. Un retour rapide vaut mieux qu'un plan parfait.",
      "Rester responsable : hébergement, mises à jour et sécurité inclus.",
    ],
    contactKicker: "Contact",
    contactH2: "Construisons quelque chose.",
    contactLead:
      "Un site internet, une boutique, une application, une plateforme, ou une informatique qui marche enfin : dites-moi ce que vous avez en tête et je vous dis comment je le construirais.",
    replyLine: "Réponse généralement sous 24 heures · Français, Deutsch, English, Lëtzebuergesch",
    heroChips: [
      "Sites & boutiques en ligne",
      "Applis iOS & Android",
      "Cybersécurité",
      "Hébergement & IT",
    ],
  },
  servicesIndex: {
    title: "Services : sites internet, applications, sécurité et hébergement",
    description:
      "Tout ce que je propose comme développeur au Luxembourg : création de sites internet et de boutiques en ligne, applications iOS et Android, publication sur les stores, support informatique, cybersécurité et hébergement géré.",
    kicker: "Services",
    h1a: "Tout le numérique,",
    h1b: "par une seule personne.",
    lead:
      "Pas de frais d'agence, pas de passages de relais. Je conçois, développe, publie, sécurise et héberge, et vous parlez toujours à la personne qui fait le travail.",
    cardCta: "Détail, périmètre & FAQ",
    ctaH2: "Vous ne savez pas lequel il vous faut ?",
    ctaLead:
      "Décrivez le problème en un e-mail. Je vous dis ce que cela demande, ce que cela coûte et en combien de temps c'est livré.",
  },
  service: {
    howItWorks: "Comment ça marche",
    trackRecord: "Références",
    whatYouGet: "Ce que vous obtenez",
    faqKicker: "FAQ",
    faqH2: "Questions fréquentes",
    proofKicker: "Preuves",
    proofH2: "Réalisations dans ce domaine",
    otherServices: "Autres services",
    ctaH2: (name) => `${name} : parlons-en.`,
    ctaLead: "Un seul message suffit. Vous décrivez l'objectif, je réponds avec un plan.",
  },
  workIndex: {
    title: "Réalisations : produits propres & projets clients",
    description:
      "Le portfolio complet de Noe Nei : des produits propres conçus et exploités de bout en bout (Salonify, LUXPOS, BoxBee, Doctomap, DepotGest, TTA) et des sites internet, boutiques et plateformes livrés à des clients au Luxembourg et en Europe.",
    kicker: "Portfolio",
    h1a: "Ce que j'ai construit",
    h1b: "et réellement livré.",
    lead:
      "Mes propres produits, que j'exploite chaque jour, et les projets livrés pour des clients au Luxembourg et en Europe. Filtrez par type ou par technologie.",
  },
  workItem: {
    scope: "Périmètre",
    stack: "Technologies",
    galleryKicker: "Galerie",
    galleryH2: "Regardons de plus près",
    hoodKicker: "Sous le capot",
    moreClients: "Autres projets clients",
    moreProducts: "Autres produits",
    ctaH2: "Un projet du même genre ?",
    ctaLead:
      "Je construis des sites internet, des plateformes, des boutiques et des applications de bout en bout. Dites-moi ce que vous avez en tête.",
    shotAlt: (name) => `Capture d'écran du site ${name}`,
  },
  grid: {
    all: "Tout",
    own: "Produits propres",
    client: "Projets clients",
    showAll: (n) => `Afficher les ${n} projets`,
    empty: "Aucun résultat pour cette combinaison.",
  },
  footer: {
    blurb:
      "Noe Nei, développeur full-stack et fondateur au Luxembourg. Sites internet, applications, hébergement et informatique, construits et exploités de bout en bout.",
    aboutCv: "À propos & CV",
    services: "Services",
    products: "Produits",
    clients: "Projets clients",
    rights: "Noe Nei · Luxembourg",
    madeBy: "Conçu, développé et hébergé par moi. Évidemment.",
  },
  form: {
    name: "Nom *",
    namePlaceholder: "Votre nom",
    email: "E-mail *",
    emailPlaceholder: "vous@entreprise.com",
    phone: "Téléphone",
    phonePlaceholder: "+352 ... (facultatif)",
    company: "Société",
    companyPlaceholder: "Facultatif",
    need: "J'ai besoin de",
    budget: "Budget",
    timeline: "Échéance",
    project: "Projet *",
    projectPlaceholder:
      "Que voulez-vous construire ou réparer ? Objectifs, situation actuelle, liens. Plus c'est détaillé, meilleure sera ma réponse.",
    submit: "Envoyer la demande",
    sending: "Envoi…",
    privacy: "Pas de newsletter, pas de spam. Votre message m'arrive directement.",
    sentTitle: "Message envoyé.",
    sentBody:
      "Merci ! Je lis personnellement chaque demande et je réponds en général sous 24 heures.",
    failed: "L'envoi a échoué. Écrivez-moi directement par e-mail.",
    services: [
      "Site internet",
      "Boutique en ligne",
      "Application iOS / Android",
      "Plateforme web / SaaS",
      "Publication sur les stores",
      "Aide & support informatique",
      "Cybersécurité",
      "Hébergement & gestion IT",
      "Autre chose",
    ],
    budgets: [
      "Je ne sais pas encore",
      "Moins de 2.500 EUR",
      "2.500 à 10.000 EUR",
      "10.000 à 25.000 EUR",
      "25.000 EUR ou plus",
    ],
    timelines: [
      "Dès que possible",
      "Dans 1 à 3 mois",
      "Dans 3 mois ou plus tard",
      "Flexible",
    ],
  },
  rail: {
    status: "Tous les systèmes en ligne",
    location: "Luxembourg",
    local: "Heure locale",
    available: "Disponible",
  },
  op: {
    heroEyebrow: "Noe Nei · Développeur full-stack · Luxembourg",
    heroLine1: "Je ne me contente pas de",
    heroLine2: "construire. Je fais tourner.",
    heroLead:
      "Sept produits à moi avec de vrais clients payants. Huit plateformes clientes. Des applications dans les deux stores, les paiements, les serveurs, la sécurité et la ligne de support, le tout par une seule personne au Luxembourg.",
    ctaPrimary: "Démarrer un projet",
    ctaSecondary: "Voir les systèmes",
    heroStats: [
      { n: "15", l: "Systèmes en ligne" },
      { n: "384K", l: "Impressions Google, 90 jours" },
      { n: "1", l: "Interlocuteur unique" },
    ],
    portraitMeta: ["Noe Nei", "Développeur / Fondateur", "Luxembourg"],
    ticker: [
      "Applications iOS",
      "Applications Android",
      "Plateformes web",
      "Boutiques en ligne",
      "Caisse enregistreuse",
      "Paiements",
      "Hébergement",
      "Cybersécurité",
      "SEO et GEO",
      "Support informatique",
    ],

    systemsLabel: "01 / Systèmes",
    systemsH2: "Construits, livrés, et en ligne maintenant.",
    systemsLead:
      "Mes propres produits et les plateformes de mes clients. Tous sont en ligne, tous ont une étude de cas complète. Filtrez par type, ou pointez une ligne pour la voir.",
    systemsLive: (n) => `${n} en ligne`,
    colSystem: "Système",
    colWhat: "Ce que c'est",
    colStatus: "Statut",
    statusLive: "En ligne",
    mine: "À moi",
    client: "Client",
    openCase: "Ouvrir l'étude de cas",

    searchLabel: "02 / Mesuré",
    searchH2: "SEO et GEO, partis de zéro, chiffres à l'appui.",
    searchLead: (date) =>
      `La plupart de ceux qui vous vendent de la visibilité vous montrent l'étude de cas de quelqu'un d'autre. Ici ce sont mes domaines, dans ma Search Console, partis de rien. Relevé le ${date}.`,
    statImpressions: "Impressions, 90 jours",
    statClicks: "Clics, 90 jours",
    statGrowth: "vs 90 jours précédents",
    statDomains: "Domaines mesurés",
    statTop10: "Requêtes dans le top 10",
    statTop3: "Requêtes dans le top 3",
    searchWindow: (from, to) => `Période du ${from} au ${to}`,
    searchFootnote:
      "Source : Google Search Console, propriétés que je possède et que j'exploite. Le premier mois d'un domaine est son premier mois mesuré. Relevé à la main dans la console, jamais estimé.",
    curveMultiple: (n) => `${n}x`,
    curveFirstMonth: "Premier mois mesuré",
    curveLastMonth: "Dernier mois complet",
    geoH3: "Et la moitié que presque personne ne fait encore.",
    geoBody:
      "La recherche passe dans les assistants. Y être trouvé est un autre métier que de se classer sur Google, et c'est la partie que j'intègre dès le premier jour.",
    geoPoints: [
      "Un llms.txt et des règles explicites pour les robots d'IA, pour que ChatGPT, Claude et Perplexity entrent et sachent quels faits citer.",
      "Un seul graphe d'entités avec des identifiants fixes sur tout le site, au lieu d'un bloc de schema répété au hasard sur chaque page.",
      "Des pages de questions qui répondent dès la première phrase, parce qu'une réponse enterrée au quatrième paragraphe est bien moins souvent citée.",
      "IndexNow à chaque publication, pour qu'une nouvelle page soit connue en quelques heures au lieu d'attendre des semaines.",
    ],

    storyLabel: "03 / Parcours",
    storyH2: "Cinquième application de livraison la plus téléchargée du Luxembourg. Puis j'ai tout perdu.",
    storyBody: [
      "En 2024 j'ai construit Umarket, une application de livraison de courses, pendant que je travaillais chez Wolt et que j'observais comment le marché tournait vraiment. Au deuxième trimestre elle était la cinquième application de livraison la plus téléchargée du pays, derrière Wolt, Wedely, Uber Eats et Takeaway.",
      "En octobre mon associé a pris le bâtiment. En décembre j'étais à zéro, avec trente mille euros de dettes d'entreprise que j'ai remboursées sur mon propre salaire.",
      "Je me suis reconstruit comme développeur. C'est pour cela que je ne survends rien, et que je suis toujours là après la mise en ligne.",
    ],
    rankingCaption:
      "Applications de livraison au Luxembourg, T2 2024, téléchargements, iOS et Android confondus. Source : Sensor Tower.",
    pressLabel: "Écrit sur moi, et écrit par moi",
    storyCta: "Lire toute l'histoire",

    capLabel: "04 / Compétences",
    capH2: "Une personne. Toute la chaîne.",
    capLead:
      "De l'application dans la poche de votre client jusqu'au serveur qui lui répond, en passant par le résultat Google qui l'a amené. Chaque ligne ci-dessous a sa propre page avec le périmètre, les délais et une FAQ.",

    howLabel: "05 / Comment ça marche",
    howH2: "Pas de présentation. Pas d'agence au milieu. Pas de facture surprise.",
    howSteps: [
      { n: "1.0", t: "Appel", d: "Trente minutes. Ce que vous voulez, ce que ça coûte à peu près, et si je suis la bonne personne." },
      { n: "2.0", t: "Cadrage", d: "Un périmètre écrit avec un prix fixe et une date de livraison, avant que quoi que ce soit ne soit construit." },
      { n: "3.0", t: "Construction", d: "Vous le voyez tourner sur une vraie URL dès la première semaine, pas dans une présentation à la fin." },
      { n: "4.0", t: "En ligne", d: "Je le livre, l'héberge, le sécurise et le surveille. Le numéro que vous appelez ensuite reste le mien." },
    ],

    contactLabel: "06 / Démarrer",
    contactH2: "Dites-moi ce qui ne marche pas, ou ce que vous voulez voir exister.",
    contactLead:
      "Plus vous me donnez de détails, meilleure sera ma réponse. Réponse en général sous un jour, en français, anglais, allemand ou luxembourgeois.",

    footStatus: "Tous les systèmes en ligne",
    footSnapshot: (date) => `Chiffres de recherche relevés le ${date}`,
  },
};

const de: Dict = {
  nav: {
    work: "Referenzen",
    services: "Leistungen",
    about: "Über mich",
    contact: "Kontakt",
    hire: "Anfragen",
  },
  menu: {
    open: "Menü öffnen",
    close: "Menü schließen",
    home: "omgnoe, Startseite",
    language: "Sprache",
    jump: "Springe zu",
  },
  common: {
    learnMore: "Mehr erfahren",
    allServices: "Alle Leistungen",
    allWork: "Alle Referenzen",
    seeWork: "Referenzen ansehen",
    emailMe: "Schreib mir",
    getQuote: "Angebot anfordern",
    startConversation: "Gespräch starten",
    startProject: "Projekt starten",
    sendInquiry: "Anfrage senden",
    breadcrumb: "Brotkrümelnavigation",
    home: "Start",
    viewCase: "Fallstudie ansehen",
    ownProduct: "Eigenes Produkt",
    clientWork: "Kundenprojekt",
    visitSite: "Zur Live-Seite",
  },
  home: {
    kicker: "Noe Nei · Full-Stack-Entwickler · Luxemburg",
    h1a: "Webseiten, Apps und die Systeme, die sie",
    h1b: "am Laufen halten.",
    lead:
      "Ich konzipiere, baue und liefere digitale Produkte von Anfang bis Ende: Webseiten, Onlineshops, iPhone- und Android-Apps, Webplattformen und das Hosting, die Sicherheit und die IT dahinter. Für Kunden, und für meine eigenen Firmen.",
    ctaWork: "Meine Arbeiten ansehen",
    stats: { shipped: "Produkte ausgeliefert", own: "Eigene Produkte", services: "Leistungen, ein Ansprechpartner" },
    portraitAlt: "Noe Nei, Entwickler aus Luxemburg",
    role: "Entwickler · Gründer",
    available: "Verfügbar",
    servicesKicker: "Was ich mache",
    servicesH2: "Eine Person. Der ganze Stack.",
    servicesLead:
      "Von der Webseite auf dem Handy Ihrer Kunden bis zum Server, der dahinter läuft. Jede Leistung unten hat ihre eigene Seite mit Details, Umfang und FAQ.",
    trusted: "Ich habe gearbeitet mit",
    trustedMore: "und vielen weiteren in Luxemburg und Europa",
    workKicker: "Portfolio",
    workH2: "Gebaut, ausgeliefert und gerade jetzt online.",
    workLead:
      "Meine eigenen Produkte und ausgewählte Kundenprojekte. Nach Typ oder Technologie filtern. Jede Karte öffnet eine komplette Fallstudie.",
    aboutKicker: "Über mich",
    aboutH2: "Ich mache aus Ideen Produkte, die Menschen benutzen.",
    aboutBody: [
      "Ich arbeite aus Luxemburg über den gesamten Stack: vom Datenbankschema und der Zahlungsinfrastruktur bis zum Frontend auf den Pixel genau und zu nativen Mobile-Apps. Ich habe Marktplätze, Kassensysteme, verschlüsselte Mail, Buchungsplattformen und KI-Werkzeuge ausgeliefert.",
      "Der Unterschied: Ich betreibe meine eigenen Produkte mit echten Kunden. Also baue ich Dinge, die den Kontakt mit der Realität überleben, und ich bleibe nach dem Start da, damit sie schnell, sicher und online bleiben.",
      "Mit vierzehn habe ich angefangen zu arbeiten, mit achtzehn hatte ich meine eigene Firma, mit zweiundzwanzig habe ich alles verloren und mich als Entwickler neu aufgebaut. Die ganze Geschichte und mein Lebenslauf haben ihre eigene Seite.",
    ],
    readStory: "Meine Geschichte lesen",
    aboutStats: [
      { n: "39+", l: "Produkte ausgeliefert" },
      { n: "12+", l: "Sprachen lokalisiert" },
      { n: "EU", l: "Gehostet & betrieben" },
    ],
    locationChip: "Luxemburg, EU",
    stackKicker: "Stack",
    stackH2: "Werkzeuge, mit denen ich baue",
    howKicker: "Wie ich arbeite",
    how: [
      "Das Ziel und den Nutzer verstehen, nicht nur die Funktionsliste.",
      "Das kleinste Ding entwerfen und bauen, das wirklich live geht.",
      "Ausliefern, messen, nachschärfen. Schnelles Feedback schlägt perfekte Pläne.",
      "Verantwortlich bleiben: Hosting, Updates und Sicherheit inklusive.",
    ],
    contactKicker: "Kontakt",
    contactH2: "Bauen wir etwas.",
    contactLead:
      "Eine Webseite, ein Shop, eine App, eine Plattform, oder eine IT, die endlich funktioniert: Sagen Sie mir, was Sie vorhaben, und ich sage Ihnen, wie ich es bauen würde.",
    replyLine: "Antwort meist innerhalb eines Tages · Deutsch, Français, English, Lëtzebuergesch",
    heroChips: ["Webseiten & Shops", "iOS- & Android-Apps", "Cybersicherheit", "Hosting & IT"],
  },
  servicesIndex: {
    title: "Leistungen: Webseiten, Apps, Sicherheit und Hosting",
    description:
      "Alles, was ich als Entwickler in Luxemburg anbiete: Webseiten und Onlineshops erstellen, iOS- und Android-Apps, Veröffentlichung in den Stores, IT-Support, Cybersicherheit und verwaltetes Hosting.",
    kicker: "Leistungen",
    h1a: "Alles Digitale,",
    h1b: "von einer Person.",
    lead:
      "Kein Agentur-Overhead, keine Übergaben. Ich entwerfe, baue, veröffentliche, sichere ab und hoste, und Sie sprechen immer mit der Person, die die Arbeit macht.",
    cardCta: "Details, Umfang & FAQ",
    ctaH2: "Nicht sicher, was Sie brauchen?",
    ctaLead:
      "Beschreiben Sie das Problem in einer Mail. Ich sage Ihnen, was es braucht, was es kostet und wie schnell es fertig ist.",
  },
  service: {
    howItWorks: "Wie es funktioniert",
    trackRecord: "Referenzen",
    whatYouGet: "Das bekommen Sie",
    faqKicker: "FAQ",
    faqH2: "Häufige Fragen",
    proofKicker: "Belege",
    proofH2: "Arbeiten in diesem Bereich",
    otherServices: "Weitere Leistungen",
    ctaH2: (name) => `${name}: sprechen wir darüber.`,
    ctaLead: "Eine Nachricht genügt. Sie beschreiben das Ziel, ich antworte mit einem Plan.",
  },
  workIndex: {
    title: "Referenzen: eigene Produkte & Kundenprojekte",
    description:
      "Das komplette Portfolio von Noe Nei: eigene Produkte, von Anfang bis Ende gebaut und betrieben (Salonify, LUXPOS, BoxBee, Doctomap, DepotGest, TTA), und Kundenwebseiten, Shops und Plattformen in Luxemburg und Europa.",
    kicker: "Portfolio",
    h1a: "Was ich gebaut habe",
    h1b: "und wirklich ausgeliefert.",
    lead:
      "Eigene Produkte, die ich jeden Tag betreibe, und Arbeiten für Kunden in Luxemburg und Europa. Nach Typ oder Technologie filtern.",
  },
  workItem: {
    scope: "Umfang",
    stack: "Stack",
    galleryKicker: "Galerie",
    galleryH2: "Genauer hingeschaut",
    hoodKicker: "Unter der Haube",
    moreClients: "Weitere Kundenprojekte",
    moreProducts: "Weitere Produkte",
    ctaH2: "Ein ähnliches Projekt?",
    ctaLead:
      "Ich baue Webseiten, Plattformen, Shops und Apps von Anfang bis Ende. Sagen Sie mir, was Sie vorhaben.",
    shotAlt: (name) => `Screenshot der Webseite ${name}`,
  },
  grid: {
    all: "Alles",
    own: "Eigene Produkte",
    client: "Kundenprojekte",
    showAll: (n) => `Alle ${n} Projekte zeigen`,
    empty: "Für diese Kombination gibt es noch nichts.",
  },
  footer: {
    blurb:
      "Noe Nei, Full-Stack-Entwickler und Gründer in Luxemburg. Webseiten, Apps, Hosting und IT, von Anfang bis Ende gebaut und betrieben.",
    aboutCv: "Über mich & CV",
    services: "Leistungen",
    products: "Produkte",
    clients: "Kundenprojekte",
    rights: "Noe Nei · Luxemburg",
    madeBy: "Von mir entworfen, gebaut und gehostet. Natürlich.",
  },
  form: {
    name: "Name *",
    namePlaceholder: "Ihr Name",
    email: "E-Mail *",
    emailPlaceholder: "sie@firma.com",
    phone: "Telefon",
    phonePlaceholder: "+352 ... (optional)",
    company: "Firma",
    companyPlaceholder: "Optional",
    need: "Ich brauche",
    budget: "Budget",
    timeline: "Zeitrahmen",
    project: "Projekt *",
    projectPlaceholder:
      "Was wollen Sie bauen oder reparieren? Ziele, aktuelle Situation, Links. Je mehr Details, desto besser meine Antwort.",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    privacy: "Kein Newsletter, kein Spam. Ihre Nachricht geht direkt an mich.",
    sentTitle: "Nachricht gesendet.",
    sentBody:
      "Danke! Ich lese jede Anfrage persönlich und antworte meist innerhalb eines Tages.",
    failed: "Senden fehlgeschlagen. Schreiben Sie mir bitte direkt per Mail.",
    services: [
      "Webseite",
      "Onlineshop",
      "iOS- / Android-App",
      "Webplattform / SaaS",
      "Store-Veröffentlichung",
      "IT-Hilfe & Support",
      "Cybersicherheit",
      "Hosting & IT-Betreuung",
      "Etwas anderes",
    ],
    budgets: [
      "Noch unklar",
      "Unter 2.500 EUR",
      "2.500 bis 10.000 EUR",
      "10.000 bis 25.000 EUR",
      "25.000 EUR oder mehr",
    ],
    timelines: [
      "So schnell wie möglich",
      "In 1 bis 3 Monaten",
      "In 3 Monaten oder später",
      "Flexibel",
    ],
  },
  rail: {
    status: "Alle Systeme laufen",
    location: "Luxemburg",
    local: "Ortszeit",
    available: "Nehme Aufträge an",
  },
  op: {
    heroEyebrow: "Noe Nei · Full-Stack-Entwickler · Luxemburg",
    heroLine1: "Ich baue Software nicht",
    heroLine2: "nur. Ich betreibe sie.",
    heroLead:
      "Sieben eigene Produkte mit zahlenden Kunden. Acht Kundenplattformen. Apps in beiden Stores, Zahlungen, Server, Sicherheit und die Support-Nummer, alles von einer Person in Luxemburg.",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Systeme ansehen",
    heroStats: [
      { n: "15", l: "Systeme laufen gerade" },
      { n: "384K", l: "Google-Impressionen, 90 Tage" },
      { n: "1", l: "Ansprechpartner" },
    ],
    portraitMeta: ["Noe Nei", "Entwickler / Gründer", "Luxemburg"],
    ticker: [
      "iOS-Apps",
      "Android-Apps",
      "Web-Plattformen",
      "Onlineshops",
      "Kassensysteme",
      "Zahlungen",
      "Hosting",
      "Cybersicherheit",
      "SEO und GEO",
      "IT-Support",
    ],

    systemsLabel: "01 / Systeme",
    systemsH2: "Gebaut, ausgeliefert, und gerade jetzt online.",
    systemsLead:
      "Meine eigenen Produkte und die Plattformen meiner Kunden. Jedes davon läuft, jedes hat eine vollständige Fallstudie. Nach Typ filtern, oder auf eine Zeile zeigen um sie zu sehen.",
    systemsLive: (n) => `${n} live`,
    colSystem: "System",
    colWhat: "Was es ist",
    colStatus: "Status",
    statusLive: "Live",
    mine: "Eigenes",
    client: "Kunde",
    openCase: "Fallstudie öffnen",

    searchLabel: "02 / Gemessen",
    searchH2: "SEO und GEO, bei null gestartet, mit Belegen.",
    searchLead: (date) =>
      `Die meisten, die Ihnen Sichtbarkeit verkaufen, zeigen Ihnen die Fallstudie von jemand anderem. Das hier sind meine eigenen Domains, in meiner eigenen Search Console, aus dem Nichts aufgebaut. Abgerufen am ${date}.`,
    statImpressions: "Impressionen, 90 Tage",
    statClicks: "Klicks, 90 Tage",
    statGrowth: "zu den 90 Tagen davor",
    statDomains: "Gemessene Domains",
    statTop10: "Suchanfragen in den Top 10",
    statTop3: "Suchanfragen in den Top 3",
    searchWindow: (from, to) => `Zeitraum ${from} bis ${to}`,
    searchFootnote:
      "Quelle: Google Search Console, Properties die mir gehören und die ich betreibe. Der erste Monat einer Domain ist ihr erster gemessener Monat. Von Hand aus der Konsole abgelesen, nie geschätzt.",
    curveMultiple: (n) => `${n}x`,
    curveFirstMonth: "Erster gemessener Monat",
    curveLastMonth: "Letzter volle Monat",
    geoH3: "Und die Hälfte, die fast niemand macht.",
    geoBody:
      "Suche wandert in die Assistenten. Dort gefunden zu werden ist eine andere Arbeit als bei Google zu ranken, und genau den Teil baue ich vom ersten Tag an mit ein.",
    geoPoints: [
      "Eine llms.txt und ausdrückliche Regeln für KI-Crawler, damit ChatGPT, Claude und Perplexity hereindürfen und wissen, welche Fakten sie zitieren sollen.",
      "Ein einziger Entitäten-Graph mit festen Kennungen über die ganze Seite, statt eines losen Schema-Blocks auf jeder einzelnen Seite.",
      "Frageseiten, die schon im ersten Satz antworten, denn eine im vierten Absatz vergrabene Antwort wird deutlich seltener zitiert.",
      "IndexNow bei jeder Veröffentlichung, damit eine neue Seite in Stunden bekannt ist statt wochenlang auf den Crawler zu warten.",
    ],

    storyLabel: "03 / Werdegang",
    storyH2: "Fünftmeistgeladene Liefer-App Luxemburgs. Dann habe ich alles verloren.",
    storyBody: [
      "2024 habe ich Umarket gebaut, eine App für Lebensmittel-Lieferung, während ich bei Wolt arbeitete und sah, wie der Markt wirklich funktioniert. Im zweiten Quartal war sie die fünftmeistgeladene Liefer-App des Landes, hinter Wolt, Wedely, Uber Eats und Takeaway.",
      "Im Oktober hat mein Geschäftspartner das Gebäude an sich gerissen. Im Dezember stand ich bei null, mit dreißigtausend Euro Firmenschulden, die ich aus meinem eigenen Gehalt zurückgezahlt habe.",
      "Ich habe mich als Entwickler neu aufgebaut. Deshalb verspreche ich nichts zu viel, und deshalb bin ich nach dem Start noch da.",
    ],
    rankingCaption:
      "Liefer-Apps in Luxemburg, Q2 2024, Downloads, iOS und Android zusammen. Quelle: Sensor Tower.",
    pressLabel: "Über mich geschrieben, und von mir geschrieben",
    storyCta: "Die ganze Geschichte lesen",

    capLabel: "04 / Leistungen",
    capH2: "Eine Person. Der ganze Stack.",
    capLead:
      "Von der App auf dem Handy Ihrer Kunden bis zum Server, mit dem sie spricht, und dem Google-Treffer, der sie hergebracht hat. Jede Zeile unten hat ihre eigene Seite mit Umfang, Zeitrahmen und FAQ.",

    howLabel: "05 / Wie es läuft",
    howH2: "Keine Präsentation. Keine Agentur dazwischen. Keine Überraschungsrechnung.",
    howSteps: [
      { n: "1.0", t: "Gespräch", d: "Dreißig Minuten. Was Sie wollen, was es ungefähr kostet, und ob ich der Richtige dafür bin." },
      { n: "2.0", t: "Umfang", d: "Ein schriftlicher Umfang mit Festpreis und Liefertermin, bevor irgendjemand etwas baut." },
      { n: "3.0", t: "Bau", d: "Sie sehen es ab der ersten Woche auf einer echten URL laufen, nicht am Ende in einer Präsentation." },
      { n: "4.0", t: "Live", d: "Ich liefere, hoste, sichere und überwache es. Die Nummer, die Sie danach anrufen, ist immer noch meine." },
    ],

    contactLabel: "06 / Start",
    contactH2: "Sagen Sie mir, was kaputt ist, oder was es geben soll.",
    contactLead:
      "Je mehr Details, desto besser meine Antwort. Antwort meist innerhalb eines Tages, auf Deutsch, Englisch, Französisch oder Lëtzebuergesch.",

    footStatus: "Alle Systeme online",
    footSnapshot: (date) => `Suchzahlen gemessen am ${date}`,
  },
};

const DICTS: Record<Locale, Dict> = { en, fr, de };

export function dict(locale: Locale): Dict {
  return DICTS[locale];
}

import type { Locale } from "@/lib/i18n";

/**
 * Mechanism diagrams for the service pages.
 *
 * The idea is borrowed from adwire.lu, where every section is paired with a
 * drawing that explains how the thing actually works. It sells better than a
 * bullet list because it shows you understand the machine, and it gives the
 * page something to look at that is not another card.
 *
 * Diagrams are data, not hand-drawn SVG: one renderer lays out a staged flow,
 * so all eight stay in the same visual language and the labels can be
 * translated without anybody editing a path.
 *
 * Shape: stages left to right. Each stage holds one or more nodes. A stage can
 * be marked as a gate (something has to pass it) and the flow can loop back
 * from one stage to an earlier one, which is what a store review really is.
 */

export type DiagramNode = {
  label: string;
  /** Small line under the label. */
  note?: string;
  /** Draws the node in ember: the step that is the point of the diagram. */
  key?: boolean;
};

export type DiagramStage = {
  /** Mono label above the stage. */
  title: string;
  nodes: DiagramNode[];
  /** A stage nothing gets past without passing. */
  gate?: boolean;
};

export type Diagram = {
  caption: string;
  stages: DiagramStage[];
  /** Index of the stage a rejection loops back to, if the flow has one. */
  loopFrom?: number;
  loopTo?: number;
  loopLabel?: string;
};

type Dict = Record<string, Diagram>;

const en: Dict = {
  "ios-apps": {
    caption: "From a commit on my machine to an app on your customer's phone.",
    stages: [
      { title: "Build", nodes: [{ label: "Swift / SwiftUI" }, { label: "Flutter" }] },
      { title: "Sign", nodes: [{ label: "Certificates" }, { label: "Provisioning" }] },
      { title: "Test", nodes: [{ label: "TestFlight", note: "real devices, real users" }] },
      { title: "Review", gate: true, nodes: [{ label: "App Review", note: "Apple decides", key: true }] },
      { title: "Live", nodes: [{ label: "App Store" }] },
    ],
    loopFrom: 3,
    loopTo: 1,
    loopLabel: "Rejected: fix and resubmit",
  },
  "android-apps": {
    caption: "One codebase, two stores, no second team.",
    stages: [
      { title: "Source", nodes: [{ label: "One Flutter codebase", key: true }] },
      { title: "Compile", nodes: [{ label: "Android build" }, { label: "iOS build" }] },
      { title: "Sign", nodes: [{ label: "Play signing" }, { label: "Apple signing" }] },
      { title: "Live", nodes: [{ label: "Google Play" }, { label: "App Store" }] },
    ],
  },
  "app-publishing": {
    caption: "The part that sinks most apps is not the code, it is the paperwork.",
    stages: [
      { title: "Prepare", nodes: [{ label: "Store listing" }, { label: "Screenshots" }] },
      { title: "Declare", nodes: [{ label: "Privacy labels" }, { label: "Data use" }, { label: "Age rating" }] },
      { title: "Submit", gate: true, nodes: [{ label: "Review", note: "days, not minutes", key: true }] },
      { title: "Release", nodes: [{ label: "Phased rollout" }, { label: "Updates" }] },
    ],
    loopFrom: 2,
    loopTo: 1,
    loopLabel: "Rejected: answer and resubmit",
  },
  websites: {
    caption: "A site earns its keep in four steps. Most agencies build only the third.",
    stages: [
      { title: "Found", nodes: [{ label: "Google" }, { label: "AI answers", key: true }, { label: "Referral" }] },
      { title: "Loads", nodes: [{ label: "Core Web Vitals", note: "fast on a phone, on 4G" }] },
      { title: "Convinces", nodes: [{ label: "The page itself" }] },
      { title: "Converts", nodes: [{ label: "Form" }, { label: "Booking" }, { label: "Checkout" }] },
    ],
  },
  "it-support": {
    caption: "Everything that can break, and one number to call when it does.",
    stages: [
      { title: "Your stuff", nodes: [{ label: "Devices" }, { label: "Mail" }, { label: "Network" }, { label: "Printers & tills" }] },
      { title: "Goes wrong", gate: true, nodes: [{ label: "One contact", note: "me", key: true }] },
      { title: "Gets fixed", nodes: [{ label: "Remote" }, { label: "On site" }] },
      { title: "Stays fixed", nodes: [{ label: "Documented", note: "so it does not recur" }] },
    ],
  },
  cybersecurity: {
    caption: "Four layers. An attacker only needs one of them to be soft.",
    stages: [
      { title: "Edge", nodes: [{ label: "DNS & WAF" }, { label: "Rate limits" }] },
      { title: "App", nodes: [{ label: "Auth & 2FA" }, { label: "Roles" }, { label: "Input validation" }] },
      { title: "Data", nodes: [{ label: "Private network", key: true }, { label: "Encryption" }, { label: "Backups" }] },
      { title: "People", nodes: [{ label: "Access review" }, { label: "The human part", note: "usually the way in" }] },
    ],
  },
  hosting: {
    caption: "Two machines on a private wire. The database is never on the internet.",
    stages: [
      { title: "Visitor", nodes: [{ label: "Browser" }, { label: "App" }] },
      { title: "Edge", gate: true, nodes: [{ label: "Cloudflare", note: "TLS, cache, filtering" }] },
      { title: "App server", nodes: [{ label: "Web & API", note: "the only public machine" }] },
      { title: "Data server", nodes: [{ label: "PostgreSQL", key: true }, { label: "Redis" }, { label: "Backups" }] },
    ],
  },
  products: {
    caption: "Shipping is the start of the work, not the end of it.",
    stages: [
      { title: "Build", nodes: [{ label: "Design & code" }] },
      { title: "Ship", nodes: [{ label: "Live, with users" }] },
      { title: "Operate", nodes: [{ label: "Host" }, { label: "Monitor" }, { label: "Secure" }] },
      { title: "Learn", nodes: [{ label: "What real use shows", key: true }] },
    ],
    loopFrom: 3,
    loopTo: 0,
    loopLabel: "Back into the product",
  },
};

const fr: Dict = {
  "ios-apps": {
    caption: "D'un commit sur ma machine à une app dans la poche de votre client.",
    stages: [
      { title: "Construire", nodes: [{ label: "Swift / SwiftUI" }, { label: "Flutter" }] },
      { title: "Signer", nodes: [{ label: "Certificats" }, { label: "Provisioning" }] },
      { title: "Tester", nodes: [{ label: "TestFlight", note: "vrais appareils, vrais utilisateurs" }] },
      { title: "Validation", gate: true, nodes: [{ label: "App Review", note: "Apple décide", key: true }] },
      { title: "En ligne", nodes: [{ label: "App Store" }] },
    ],
    loopFrom: 3,
    loopTo: 1,
    loopLabel: "Refusé : corriger et resoumettre",
  },
  "android-apps": {
    caption: "Une base de code, deux stores, pas de deuxième équipe.",
    stages: [
      { title: "Source", nodes: [{ label: "Une base Flutter", key: true }] },
      { title: "Compiler", nodes: [{ label: "Build Android" }, { label: "Build iOS" }] },
      { title: "Signer", nodes: [{ label: "Signature Play" }, { label: "Signature Apple" }] },
      { title: "En ligne", nodes: [{ label: "Google Play" }, { label: "App Store" }] },
    ],
  },
  "app-publishing": {
    caption: "Ce qui coule la plupart des apps n'est pas le code, c'est le dossier.",
    stages: [
      { title: "Préparer", nodes: [{ label: "Fiche du store" }, { label: "Captures" }] },
      { title: "Déclarer", nodes: [{ label: "Étiquettes de confidentialité" }, { label: "Usage des données" }, { label: "Classification d'âge" }] },
      { title: "Soumettre", gate: true, nodes: [{ label: "Validation", note: "des jours, pas des minutes", key: true }] },
      { title: "Publier", nodes: [{ label: "Déploiement progressif" }, { label: "Mises à jour" }] },
    ],
    loopFrom: 2,
    loopTo: 1,
    loopLabel: "Refusé : répondre et resoumettre",
  },
  websites: {
    caption: "Un site rapporte en quatre étapes. La plupart des agences n'en construisent qu'une.",
    stages: [
      { title: "Trouvé", nodes: [{ label: "Google" }, { label: "Réponses IA", key: true }, { label: "Bouche à oreille" }] },
      { title: "Charge", nodes: [{ label: "Core Web Vitals", note: "rapide sur mobile, en 4G" }] },
      { title: "Convainc", nodes: [{ label: "La page elle-même" }] },
      { title: "Convertit", nodes: [{ label: "Formulaire" }, { label: "Réservation" }, { label: "Paiement" }] },
    ],
  },
  "it-support": {
    caption: "Tout ce qui peut casser, et un seul numéro quand ça casse.",
    stages: [
      { title: "Votre parc", nodes: [{ label: "Appareils" }, { label: "Messagerie" }, { label: "Réseau" }, { label: "Imprimantes & caisses" }] },
      { title: "Tombe en panne", gate: true, nodes: [{ label: "Un interlocuteur", note: "moi", key: true }] },
      { title: "Est réparé", nodes: [{ label: "À distance" }, { label: "Sur place" }] },
      { title: "Le reste", nodes: [{ label: "Documenté", note: "pour que ça ne revienne pas" }] },
    ],
  },
  cybersecurity: {
    caption: "Quatre couches. Il suffit qu'une seule soit molle.",
    stages: [
      { title: "Bordure", nodes: [{ label: "DNS & WAF" }, { label: "Limites de débit" }] },
      { title: "Application", nodes: [{ label: "Auth & 2FA" }, { label: "Rôles" }, { label: "Validation des entrées" }] },
      { title: "Données", nodes: [{ label: "Réseau privé", key: true }, { label: "Chiffrement" }, { label: "Sauvegardes" }] },
      { title: "Humains", nodes: [{ label: "Revue des accès" }, { label: "Le facteur humain", note: "le plus souvent la porte d'entrée" }] },
    ],
  },
  hosting: {
    caption: "Deux machines sur un fil privé. La base de données n'est jamais sur internet.",
    stages: [
      { title: "Visiteur", nodes: [{ label: "Navigateur" }, { label: "Application" }] },
      { title: "Bordure", gate: true, nodes: [{ label: "Cloudflare", note: "TLS, cache, filtrage" }] },
      { title: "Serveur applicatif", nodes: [{ label: "Web & API", note: "la seule machine publique" }] },
      { title: "Serveur de données", nodes: [{ label: "PostgreSQL", key: true }, { label: "Redis" }, { label: "Sauvegardes" }] },
    ],
  },
  products: {
    caption: "La mise en ligne est le début du travail, pas la fin.",
    stages: [
      { title: "Construire", nodes: [{ label: "Design & code" }] },
      { title: "Livrer", nodes: [{ label: "En ligne, avec des utilisateurs" }] },
      { title: "Exploiter", nodes: [{ label: "Héberger" }, { label: "Surveiller" }, { label: "Sécuriser" }] },
      { title: "Apprendre", nodes: [{ label: "Ce que l'usage réel montre", key: true }] },
    ],
    loopFrom: 3,
    loopTo: 0,
    loopLabel: "De retour dans le produit",
  },
};

const de: Dict = {
  "ios-apps": {
    caption: "Von einem Commit auf meinem Rechner bis zur App auf dem Handy Ihrer Kunden.",
    stages: [
      { title: "Bauen", nodes: [{ label: "Swift / SwiftUI" }, { label: "Flutter" }] },
      { title: "Signieren", nodes: [{ label: "Zertifikate" }, { label: "Provisioning" }] },
      { title: "Testen", nodes: [{ label: "TestFlight", note: "echte Geräte, echte Nutzer" }] },
      { title: "Prüfung", gate: true, nodes: [{ label: "App Review", note: "Apple entscheidet", key: true }] },
      { title: "Live", nodes: [{ label: "App Store" }] },
    ],
    loopFrom: 3,
    loopTo: 1,
    loopLabel: "Abgelehnt: beheben und neu einreichen",
  },
  "android-apps": {
    caption: "Eine Codebasis, zwei Stores, kein zweites Team.",
    stages: [
      { title: "Quelle", nodes: [{ label: "Eine Flutter-Codebasis", key: true }] },
      { title: "Kompilieren", nodes: [{ label: "Android-Build" }, { label: "iOS-Build" }] },
      { title: "Signieren", nodes: [{ label: "Play-Signatur" }, { label: "Apple-Signatur" }] },
      { title: "Live", nodes: [{ label: "Google Play" }, { label: "App Store" }] },
    ],
  },
  "app-publishing": {
    caption: "Was die meisten Apps versenkt, ist nicht der Code, sondern der Papierkram.",
    stages: [
      { title: "Vorbereiten", nodes: [{ label: "Store-Eintrag" }, { label: "Screenshots" }] },
      { title: "Erklären", nodes: [{ label: "Datenschutz-Labels" }, { label: "Datennutzung" }, { label: "Altersfreigabe" }] },
      { title: "Einreichen", gate: true, nodes: [{ label: "Prüfung", note: "Tage, nicht Minuten", key: true }] },
      { title: "Ausrollen", nodes: [{ label: "Stufenweise" }, { label: "Updates" }] },
    ],
    loopFrom: 2,
    loopTo: 1,
    loopLabel: "Abgelehnt: antworten und neu einreichen",
  },
  websites: {
    caption: "Eine Seite verdient in vier Schritten. Die meisten Agenturen bauen nur den dritten.",
    stages: [
      { title: "Gefunden", nodes: [{ label: "Google" }, { label: "KI-Antworten", key: true }, { label: "Empfehlung" }] },
      { title: "Lädt", nodes: [{ label: "Core Web Vitals", note: "schnell am Handy, im 4G" }] },
      { title: "Überzeugt", nodes: [{ label: "Die Seite selbst" }] },
      { title: "Wandelt um", nodes: [{ label: "Formular" }, { label: "Buchung" }, { label: "Kasse" }] },
    ],
  },
  "it-support": {
    caption: "Alles was kaputtgehen kann, und eine Nummer wenn es passiert.",
    stages: [
      { title: "Ihr Bestand", nodes: [{ label: "Geräte" }, { label: "E-Mail" }, { label: "Netzwerk" }, { label: "Drucker & Kassen" }] },
      { title: "Geht kaputt", gate: true, nodes: [{ label: "Ein Ansprechpartner", note: "ich", key: true }] },
      { title: "Wird repariert", nodes: [{ label: "Aus der Ferne" }, { label: "Vor Ort" }] },
      { title: "Bleibt repariert", nodes: [{ label: "Dokumentiert", note: "damit es nicht wiederkommt" }] },
    ],
  },
  cybersecurity: {
    caption: "Vier Schichten. Ein Angreifer braucht nur eine weiche davon.",
    stages: [
      { title: "Rand", nodes: [{ label: "DNS & WAF" }, { label: "Ratenbegrenzung" }] },
      { title: "Anwendung", nodes: [{ label: "Auth & 2FA" }, { label: "Rollen" }, { label: "Eingabeprüfung" }] },
      { title: "Daten", nodes: [{ label: "Privates Netz", key: true }, { label: "Verschlüsselung" }, { label: "Backups" }] },
      { title: "Menschen", nodes: [{ label: "Zugriffsprüfung" }, { label: "Der Mensch", note: "meist der Weg hinein" }] },
    ],
  },
  hosting: {
    caption: "Zwei Maschinen an einem privaten Draht. Die Datenbank hängt nie im Internet.",
    stages: [
      { title: "Besucher", nodes: [{ label: "Browser" }, { label: "App" }] },
      { title: "Rand", gate: true, nodes: [{ label: "Cloudflare", note: "TLS, Cache, Filter" }] },
      { title: "App-Server", nodes: [{ label: "Web & API", note: "die einzige öffentliche Maschine" }] },
      { title: "Daten-Server", nodes: [{ label: "PostgreSQL", key: true }, { label: "Redis" }, { label: "Backups" }] },
    ],
  },
  products: {
    caption: "Der Start ist der Anfang der Arbeit, nicht ihr Ende.",
    stages: [
      { title: "Bauen", nodes: [{ label: "Design & Code" }] },
      { title: "Starten", nodes: [{ label: "Live, mit Nutzern" }] },
      { title: "Betreiben", nodes: [{ label: "Hosten" }, { label: "Überwachen" }, { label: "Absichern" }] },
      { title: "Lernen", nodes: [{ label: "Was echte Nutzung zeigt", key: true }] },
    ],
    loopFrom: 3,
    loopTo: 0,
    loopLabel: "Zurück ins Produkt",
  },
};

const BY_LOCALE: Record<Locale, Dict> = { en, fr, de };

/** The diagram for a service, keyed by its canonical slug. */
export function getDiagram(locale: Locale, slug: string): Diagram | undefined {
  return BY_LOCALE[locale][slug] ?? en[slug];
}

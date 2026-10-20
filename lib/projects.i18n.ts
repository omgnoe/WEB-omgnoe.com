/**
 * French and German translations of the portfolio entries.
 *
 * Keyed by slug; every field falls back to the English source in
 * `projects.ts`. Tech `tags` stay untranslated on purpose (they are product
 * names), and so do the per-image `gallery` alt texts, because those
 * screenshots show English product UIs. The main screenshot's alt text is
 * generated from the UI dictionary and is localised.
 */

import type { Locale } from "@/lib/i18n";
import type { WorkItem } from "@/lib/projects";

export type WorkTranslation = Partial<
  Pick<WorkItem, "tagline" | "description" | "body" | "role" | "highlights">
>;

const fr: Record<string, WorkTranslation> = {
  boxbee: {
    tagline: "Client de messagerie dopé à l'IA, fait au Luxembourg",
    description:
      "Un client de messagerie dopé à l'IA pour les professionnels : résumés, brouillons de réponse dans la bonne langue et briefing quotidien. Natif sur Mac, Windows et iOS, hébergé entièrement dans l'UE.",
    body: [
      "BoxBee est un client de messagerie dopé à l'IA conçu pour les professionnels. Il résume chaque message en quelques secondes, rédige les réponses dans la langue dans laquelle le message est arrivé, étiquette automatiquement la boîte de réception par priorité et sert un briefing quotidien chaque matin, pour que la journée commence par une vue d'ensemble et non par une pile.",
      "Il tourne nativement sur Mac et Windows via Electron et sur iPhone et iPad via une application Swift/SwiftUI, fonctionne avec n'importe quel fournisseur IMAP (Gmail, iCloud, Outlook, domaines personnalisés) et s'articule autour de BeeCrypted, de la messagerie chiffrée de bout en bout et sans mot de passe entre utilisateurs BoxBee. Fait au Luxembourg, hébergé dans l'UE, sans exposition au CloudAct américain.",
    ],
    role: ["Produit complet", "Bureau + iOS", "IA / LLM", "Facturation"],
    highlights: [
      "Résumés, brouillons de réponse et briefings quotidiens par IA : adaptés à la langue et au ton, inférence hébergée dans l'UE.",
      "BeeCrypted : messagerie chiffrée de bout en bout, sans mot de passe, entre utilisateurs BoxBee.",
      "IMAP universel : Gmail, iCloud, Outlook et domaines personnalisés dans une seule application.",
      "Applications natives sur trois plateformes : Mac et Windows via Electron, iPhone et iPad via SwiftUI.",
      "Notarisé par Apple sur macOS, signé sur Windows, mise à jour automatique depuis les versions de boxbee.co.",
      "Facturation hybride : abonnements Stripe sur le web plus achats intégrés Apple, réunis en un seul modèle de licence.",
      "Hébergement exclusivement dans l'UE, aucune exposition au CloudAct américain. Vos messages restent où ils doivent être.",
    ],
  },
  salonify: {
    tagline: "Plateforme de réservation et de caisse pour salons",
    description:
      "Une place de marché complète pour la beauté et le bien-être : réservation en ligne, caisse, versements via Stripe Connect, fidélité et applications mobiles natives. En ligne sur plusieurs marchés européens et asiatiques.",
    body: [
      "Salonify est un système d'exploitation complet pour les salons et les entreprises de bien-être : réservation en ligne, gestion d'agenda, une caisse complète, fidélité client, marketing et analytique, le tout sur une seule plateforme.",
      "Il fonctionne comme une place de marché avec versements via Stripe Connect, des applications mobiles natives côté client et côté professionnel, la gestion multidevise et la localisation sur plusieurs marchés européens et asiatiques. Construit et exploité de bout en bout, de la base de données et de l'infrastructure de paiement jusqu'aux applications dans les stores.",
    ],
    role: ["Produit complet", "Web + Mobile", "Paiements", "Infrastructure"],
    highlights: [
      "Authentification durcie : JWT plus jetons de rafraîchissement, OAuth (Google / Apple / Facebook), 2FA, contrôles basés sur les rôles et limitation de débit.",
      "Envois de fichiers sécurisés, validés par les octets d'en-tête et non par l'extension ; audité en sécurité et testé en intrusion.",
      "Tourne sur une configuration Hetzner à deux serveurs (application et données) via un réseau privé. PostgreSQL et Redis ne sont jamais exposés publiquement.",
      "Localisé en plus de 12 langues et sur plusieurs domaines européens et asiatiques, avec des applications natives client et professionnel.",
    ],
  },
  luxpos: {
    tagline: "Caisse et plateforme de gestion, Luxembourg",
    description:
      "Un seul compte pour toute une entreprise : caisse, comptabilité avec TVA automatique, banque, cartes de fidélité et Tap to Pay sur iPhone. Conçu pour le marché luxembourgeois.",
    body: [
      "LUXPOS est une caisse et une plateforme de gestion modernes conçues pour la restauration, les bars et le commerce : plans de salle, gestion des tables, additions séparées, écran de cuisine, clôture journalière et rapports.",
      "Au-delà de la caisse, la plateforme réunit la comptabilité avec TVA automatique, la connexion bancaire, les cartes de fidélité numériques et les paiements par carte intégrés. Elle prend en charge Tap to Pay sur iPhone, les configurations multi-sites et multidevises, et un back office web clair. Pensée pour être rapide en salle et simple à exploiter.",
    ],
    role: ["Produit complet", "Caisse", "Paiements", "Comptabilité", "Back office"],
    highlights: [
      "Tap to Pay sur iPhone : encaissez les cartes sans contact directement sur l'appareil, sans matériel supplémentaire (entitlement approuvé par Apple).",
      "Comptabilité avec TVA automatique et déclaration eCDF pour le marché luxembourgeois.",
      "Écran de cuisine en temps réel qui pousse les commandes de la salle vers la cuisine instantanément.",
      "Architecture multi-locataire, multi-sites et multidevise, avec des données isolées par entreprise.",
      "Parcours de caisse résistants aux coupures, pour que le service ne s'arrête pas quand le réseau vacille.",
      "Conteneurisé avec Docker, mises en production progressives sans interruption.",
    ],
  },
  doctomap: {
    tagline: "Trouvez votre médecin au Luxembourg",
    description:
      "Une plateforme de réservation en ligne qui met en relation les patients avec les médecins, spécialistes et thérapeutes du Luxembourg. Disponibilités en temps réel, profils vérifiés, téléconsultation et rendez-vous immédiats.",
    body: [
      "Doctomap met en relation les patients avec les médecins, spécialistes et thérapeutes du Luxembourg. Les patients cherchent par spécialité, par symptôme ou par localisation et réservent un rendez-vous en temps réel en quelques clics.",
      "La plateforme comprend des profils de praticiens vérifiés, la téléconsultation, la gestion multilingue et un back office permettant aux cabinets de gérer leurs disponibilités, leurs agendas et leurs réservations.",
    ],
    role: ["Produit complet", "Moteur de réservation", "Back office", "Sécurité"],
    highlights: [
      "Disponibilités en temps réel et réservation immédiate, avec synchronisation d'agenda pour les cabinets.",
      "Téléconsultation et notifications SMS propulsées par Twilio.",
      "Sécurité surveillée par un SIEM Wazuh : journaux d'audit et détection d'intrusion sur des données de santé sensibles.",
      "Plateforme multilingue (FR / DE / EN) conçue pour le marché luxembourgeois.",
      "API NestJS plus PostgreSQL/Prisma, déployée en répartition de charge sur Hetzner.",
    ],
  },
  tta: {
    tagline: "Groupe technologique européen",
    description:
      "Le groupe technologique derrière Salonify, LUXPOS, BoxBee et DepotGest : une plateforme commune pour le logiciel, l'IA, les paiements et l'automatisation, construite et exploitée depuis le Luxembourg.",
    body: [
      "TTA Technologies est le groupe derrière mes produits. Plutôt que de construire des outils isolés, TTA construit la plateforme commune sur laquelle ils reposent tous : logiciel, intelligence artificielle, paiements, automatisation et infrastructure d'entreprise sur un socle unique.",
      "Salonify, LUXPOS, BoxBee et DepotGest tournent tous sur cette base : infrastructure commune, pratiques de sécurité communes, outillage d'exploitation commun. Le site du groupe présente la plateforme, les produits et le programme partenaires.",
    ],
    role: ["Plateforme de groupe", "Marque & site", "Infrastructure"],
    highlights: [
      "Une plateforme qui fait tourner quatre produits en production, de la caisse à la réservation, de la messagerie à la logistique.",
      "Parc de serveurs partagé avec agents de surveillance, cockpit d'administration central et suivi de disponibilité.",
      "Console d'administration au niveau du groupe, qui agrège les statistiques en direct de chaque produit.",
      "Conçu, rédigé et mis en ligne comme le visage public du groupe.",
    ],
  },
  depotgest: {
    tagline: "Gestion d'entrepôt en 3D",
    description:
      "Gestion d'entrepôt, boutique en ligne et logistique sur une seule plateforme : chaque étagère comme jumeau numérique en 3D, des parcours de préparation, et la comptabilité LUXPOS intégrée. Conçu au Luxembourg.",
    body: [
      "DepotGest rend un entrepôt visible : chaque emplacement de stockage existe comme jumeau numérique en 3D, et chaque vente passe par le même pipeline que la préparation de commande, la boutique en ligne et la comptabilité LUXPOS.",
      "La plateforme couvre la gestion des stocks avec suivi des lots et des dates de péremption, les codes-barres GS1-128, une API REST et une boutique en ligne connectée sur le nom de domaine de l'entreprise. Conçue pour les sociétés qui veulent grandir sans perdre le contrôle de leurs rayonnages.",
    ],
    role: ["Produit complet", "Gestion d'entrepôt", "Boutique en ligne", "Lien comptable"],
    highlights: [
      "Jumeau numérique en 3D de l'entrepôt : chaque emplacement, étagère et zone est visible et cliquable.",
      "Suivi des lots, des péremptions et des codes-barres GS1-128, conçu pour une exploitation conforme à la GoBD.",
      "Boutique en ligne connectée plus comptabilité LUXPOS, pour que stock, ventes et écritures restent synchronisés.",
      "API REST pour les intégrations et les flux sur mesure.",
    ],
  },
  "sellout-ai": {
    tagline: "Photographiez. Analysez. Vendez.",
    description:
      "Des annonces générées par IA pour vos objets d'occasion. Prenez une photo, laissez l'IA identifier, estimer le prix et rédiger une annonce professionnelle en quelques minutes, puis vendez plus intelligemment sur chaque place de marché.",
    body: [
      "SellOut AI transforme une photo en annonce prête à publier. Photographiez votre objet d'occasion : l'IA l'identifie, suggère un prix et rédige une description professionnelle et multilingue en quelques minutes.",
      "L'application est conçue pour supprimer les frictions de la vente sur les places de marché : analyser, générer et vendre plus intelligemment. Livrée comme application mobile, avec prise de vue et analyse par IA sur l'appareil.",
    ],
    role: ["Produit complet", "Mobile", "IA / LLM"],
    highlights: [
      "L'identification par vision par ordinateur transforme une seule photo en fiche produit structurée.",
      "Textes d'annonce multilingues générés par LLM et suggestions de prix intelligentes en quelques secondes.",
      "Parcours de prise de vue sur l'appareil, pensé pour la vitesse : photographier, vérifier, publier.",
      "Développé avec Flutter pour une sensation rapide et native sur iOS.",
    ],
  },
  absaar: {
    tagline: "L'innovation en énergie depuis 1969",
    description:
      "Page de marque pour ABSAAR, le spécialiste allemand de l'énergie automobile : batteries, boosters de démarrage et chargeurs. Une présentation sombre et percutante de la marque et de son héritage.",
    body: [
      "ABSAAR est une marque allemande d'énergie automobile dont les racines remontent à 1969 : batteries, boosters de démarrage, chargeurs et solutions d'énergie vendus partout en Europe.",
      "J'ai construit une page d'atterrissage sombre et affirmée qui met l'héritage technique de la marque et sa gamme de produits au premier plan, avec une bannière percutante et un récit produit clair.",
    ],
    role: ["Page d'atterrissage"],
    highlights: [
      "Bannière sombre et affirmée qui assume l'héritage technique de la marque depuis 1969.",
      "Pages rapides, rendues statiquement, réglées pour la performance et le référencement.",
      "Un récit produit clair à travers les batteries, les boosters de démarrage et les chargeurs.",
    ],
  },
  barbertruck: {
    tagline: "Le premier barbier mobile du Luxembourg",
    description:
      "Site de style éditorial urbain pour le premier barbier mobile du Luxembourg : un Mercedes Sprinter entièrement aménagé en studio, une typographie surdimensionnée, et une réservation qui vient à vous.",
    body: [
      "BarberTruck est le premier barbier mobile du Luxembourg : un Mercedes Sprinter entièrement aménagé comme un véritable studio, qui sert ses clients sur place au Luxembourg et en Europe.",
      "J'ai construit tout le site dans un style éditorial urbain affirmé : typographie d'affichage surdimensionnée, images en monochrome avec un seul accent orange, des pages pour le camion, le menu de services Presidents, les emplacements, les entreprises et les événements, tout relié à la réservation en ligne.",
    ],
    role: ["Site internet", "Marque", "Réservation"],
    highlights: [
      "Design éditorial urbain : typographie condensée surdimensionnée, images monochromes, une seule couleur d'accent.",
      "Un menu de services avec du caractère : chaque coupe porte le nom d'un président.",
      "Des pages statiques rapides avec réservation en ligne, pour un service qui se déplace jusqu'au client.",
    ],
  },
  o2nails: {
    tagline: "Technologie de nail art de luxe",
    description:
      "Site internet pour O2NAILS, technologie de nail art de luxe et impression numérique sur ongles. Une vitrine produit épurée et haut de gamme, avec collections et boutique.",
    body: [
      "O2NAILS apporte la technologie d'impression numérique sur ongles au marché de la beauté de luxe : imprimer du nail art complexe en quelques secondes.",
      "J'ai construit un site épuré et haut de gamme qui met en valeur la technologie et les collections et qui guide les visiteurs vers la découverte et l'achat de la gamme.",
    ],
    role: ["Site internet", "Boutique"],
    highlights: [
      "Vitrine produit haut de gamme pour la technologie d'impression numérique sur ongles.",
      "Présentation épurée des collections, qui mène le visiteur de la découverte à la boutique.",
      "Développement rapide et pensé SEO d'abord pour une marque de beauté de luxe.",
    ],
  },
  dspimmo: {
    tagline: "Agence immobilière, Luxembourg",
    description:
      "Page d'atterrissage et back office pour une agence immobilière luxembourgeoise : maisons, appartements et terrains, avec la gestion des annonces en coulisses.",
    body: [
      "DSPImmo est une agence immobilière au Luxembourg spécialisée dans les maisons, les appartements et les terrains.",
      "J'ai livré la page d'atterrissage publique qui présente l'agence et ses annonces, ainsi qu'un back office pour gérer les biens, les demandes et le contenu.",
    ],
    role: ["Page d'atterrissage", "Back office"],
    highlights: [
      "Page d'atterrissage soignée et animée, avec des chiffres forts et un récit d'agence.",
      "Back office pour gérer les annonces immobilières, les demandes et le contenu.",
      "Multilingue et construit pour le référencement immobilier local au Luxembourg.",
    ],
  },
  homecenter: {
    tagline: "Mobilier & showroom, Luxembourg",
    description:
      "Réalisation de bout en bout pour Home Center Luxembourg, un showroom de meubles de 3.500 m² : page d'atterrissage, boutique en ligne, back office et caisse en magasin.",
    body: [
      "Home Center est un magasin et showroom de meubles de 3.500 m² à Hollerich, Luxembourg, où la tradition rencontre l'habitat moderne.",
      "J'ai construit toute la chaîne pour eux : la page d'atterrissage publique, une boutique en ligne, le back office pour gérer le catalogue et les commandes, et une caisse en magasin. Un seul système connecté, de la vitrine à l'encaissement.",
    ],
    role: ["Page d'atterrissage", "Boutique", "Back office", "Caisse"],
    highlights: [
      "Un seul système connecté de la vitrine à l'encaissement : page d'atterrissage, boutique, back office et caisse en magasin.",
      "Catalogue et stock partagés entre la boutique en ligne et le showroom physique de 3.500 m².",
      "Caisse en magasin reliée aux mêmes commandes et au même stock que le web.",
      "Back office pour le catalogue, les commandes et les clients en un seul endroit.",
    ],
  },
  dynapharm: {
    tagline: "Commerce santé B2B avec automatisation logistique",
    description:
      "Une plateforme de commerce B2B santé et bien-être avec un moteur complet d'entrepôt et de comptabilité : préparation guidée au scanner, facturation automatisée avec rapprochement des virements bancaires, et génération d'étiquettes DHL.",
    body: [
      "Dynapharm est une boutique B2B pour les professionnels de santé : une vitrine à accès restreint, un catalogue complet et la commande pour des comptes professionnels vérifiés.",
      "Derrière la boutique, j'ai construit un moteur d'exploitation complet. Les commandes arrivent dans un flux d'entrepôt avec un parcours de préparation au scanner qui guide les préparateurs sur le trajet le plus efficace. Les factures sont générées automatiquement et rapprochées des virements bancaires entrants pour la comptabilité, et les étiquettes d'expédition sont produites via une intégration DHL associée à chaque commande. De la commande à la préparation, la facturation, le rapprochement et l'expédition, presque sans aucune étape manuelle.",
    ],
    role: ["Boutique", "Back office", "Entrepôt / logistique", "Automatisation comptable"],
    highlights: [
      "Parcours de préparation au scanner : flux de préparateur et d'entrepôt optimisé, de la commande au colis emballé.",
      "Facturation automatique avec reconnaissance des virements bancaires, qui rapproche les paiements directement dans la comptabilité.",
      "Intégration DHL qui génère automatiquement la bonne étiquette d'expédition par commande.",
      "Vitrine B2B à accès restreint pour les professionnels de santé vérifiés.",
      "Un seul système connecté : catalogue, commandes, logistique et finances.",
    ],
  },
  hevert: {
    tagline: "Médecines naturelles allemandes, marché asiatique",
    description:
      "Boutique en ligne qui amène les médecines naturelles et les vitamines allemandes de Hevert sur le marché de Hong Kong : catalogue, panier et paiement avec gestion multidevise.",
    body: [
      "Hevert est une marque pharmaceutique familiale allemande de médecines naturelles et de vitamines, de confiance depuis 1956. Hevert Hong Kong amène la gamme sur le marché asiatique.",
      "J'ai construit la boutique en ligne : catalogue produits, recherche, espace client, panier et paiement, localisée pour Hong Kong avec des prix en HKD et un contenu produit en anglais.",
    ],
    role: ["Boutique", "Vitrine", "Localisation"],
    highlights: [
      "Vitrine épurée qui présente un catalogue pharmaceutique réglementé de façon claire et sûre.",
      "Localisée pour le marché de Hong Kong, avec des prix en HKD.",
      "Navigation rapide dans le catalogue avec recherche, collections et fiches produit.",
    ],
  },
  nexa: {
    tagline: "Énergie autonome et e-commerce",
    description:
      "Boutique en ligne pour Nexa : panneaux solaires, batteries LiFePO4, stations d'énergie portables, boosters de démarrage et équipement d'entretien de véhicules. Des solutions autonomes pour la maison, le camping et les professionnels.",
    body: [
      "Nexa est un distributeur d'énergie : panneaux solaires, batteries LiFePO4, stations d'énergie portables, AdBlue, matériel de soudure et entretien de véhicules. Des solutions autonomes pour la maison, le camping et les professionnels.",
      "J'ai construit l'expérience e-commerce : une vitrine épurée et rapide avec navigation par catégories, fiches produit et paiement, optimisée pour la conversion et la recherche.",
    ],
    role: ["Boutique", "Vitrine"],
    highlights: [
      "Vitrine orientée conversion, avec une mise en avant forte des catégories et des produits.",
      "Boutique multilingue (DE) optimisée pour un chargement rapide et le référencement.",
      "Construite sur une base e-commerce robuste, avec un paiement et une logistique fiables.",
    ],
  },
};

const de: Record<string, WorkTranslation> = {
  boxbee: {
    tagline: "KI-Mail-Client, gemacht in Luxemburg",
    description:
      "Ein KI-gestützter Mail-Client für Profis: Zusammenfassungen, Antwortvorschläge in der richtigen Sprache und ein täglicher Überblick. Nativ auf Mac, Windows und iOS, vollständig in der EU gehostet.",
    body: [
      "BoxBee ist ein KI-gestützter Mail-Client für Berufstätige. Er fasst jede Mail in Sekunden zusammen, entwirft Antworten in der Sprache, in der die Nachricht kam, sortiert das Postfach automatisch nach Priorität und liefert jeden Morgen einen Tagesüberblick, damit der Tag mit dem Gesamtbild beginnt und nicht mit dem Stapel.",
      "Er läuft nativ auf Mac und Windows über Electron und auf iPhone und iPad über eine Swift/SwiftUI-App, arbeitet mit jedem IMAP-Anbieter (Gmail, iCloud, Outlook, eigene Domains) und ist um BeeCrypted gebaut, passwortlose Ende-zu-Ende-verschlüsselte Mail zwischen BoxBee-Nutzern. Gemacht in Luxemburg, gehostet in der EU, ohne Zugriffsrisiko durch den US-CloudAct.",
    ],
    role: ["Komplettes Produkt", "Desktop + iOS", "KI / LLM", "Abrechnung"],
    highlights: [
      "KI-Zusammenfassungen, Antwortvorschläge und Tagesüberblicke: sprach- und tonbewusst, Inferenz in der EU gehostet.",
      "BeeCrypted: passwortlose Ende-zu-Ende-verschlüsselte Mail zwischen BoxBee-Nutzern.",
      "Universelles IMAP: Gmail, iCloud, Outlook und eigene Domains in einer App.",
      "Native Apps auf drei Plattformen: Mac und Windows über Electron, iPhone und iPad über SwiftUI.",
      "Von Apple notarisiert auf macOS, signiert auf Windows, mit automatischen Updates aus den Releases von boxbee.co.",
      "Hybride Abrechnung: Stripe-Abos im Web plus Apple-In-App-Kauf, vereint in einem Lizenzmodell.",
      "Hosting ausschließlich in der EU, kein Zugriffsrisiko durch den US-CloudAct. Ihre Mail bleibt, wo sie hingehört.",
    ],
  },
  salonify: {
    tagline: "Buchungs- und Kassenplattform für Salons",
    description:
      "Ein kompletter Marktplatz für Schönheit und Wellness: Online-Buchung, Kasse, Auszahlungen über Stripe Connect, Treueprogramm und native Mobile-Apps. Live in mehreren EU- und asiatischen Märkten.",
    body: [
      "Salonify ist ein komplettes Betriebssystem für Salons und Wellnessbetriebe: Online-Buchung, Kalenderverwaltung, eine vollständige Kasse, Kundenbindung, Marketing und Auswertungen, alles auf einer Plattform.",
      "Es läuft als Marktplatz mit Auszahlungen über Stripe Connect, mit nativen Mobile-Apps für Kunden und Betriebe, Mehrwährungsunterstützung und Lokalisierung über mehrere europäische und asiatische Märkte. Von Anfang bis Ende gebaut und betrieben, von der Datenbank und der Zahlungsinfrastruktur bis zu den Apps in den Stores.",
    ],
    role: ["Komplettes Produkt", "Web + Mobile", "Zahlungen", "Infrastruktur"],
    highlights: [
      "Gehärtete Anmeldung: JWT plus Refresh-Tokens, OAuth (Google / Apple / Facebook), 2FA, rollenbasierte Prüfungen und Ratenbegrenzung.",
      "Sichere Datei-Uploads, geprüft über die Kopfbytes statt über die Dateiendung; sicherheitsgeprüft und penetrationsgetestet.",
      "Läuft auf einem Hetzner-Aufbau mit zwei Servern (Anwendung und Daten) über ein privates Netz. PostgreSQL und Redis sind nie öffentlich erreichbar.",
      "In über 12 Sprachen und auf mehreren europäischen und asiatischen Domains lokalisiert, mit nativen Kunden- und Betriebs-Apps.",
    ],
  },
  luxpos: {
    tagline: "Kassen- und Unternehmensplattform, Luxemburg",
    description:
      "Ein Konto für den ganzen Betrieb: Kasse, Buchhaltung mit automatischer Mehrwertsteuer, Bankanbindung, Treuekarten und Tap to Pay auf dem iPhone. Für den luxemburgischen Markt gebaut.",
    body: [
      "LUXPOS ist eine moderne Kassen- und Unternehmensplattform für Restaurants, Bars und Einzelhandel: Raumpläne, Tischverwaltung, geteilte Rechnungen, ein Küchenbildschirm, Tagesabschluss und Berichte.",
      "Über die Kasse hinaus bündelt sie Buchhaltung mit automatischer Mehrwertsteuer, Bankanbindung, digitale Treuekarten und integrierte Kartenzahlungen. Sie unterstützt Tap to Pay auf dem iPhone, Mehrfilial- und Mehrwährungsbetrieb und ein klares Web-Backoffice. Gebaut, um im Service schnell und im Betrieb einfach zu sein.",
    ],
    role: ["Komplettes Produkt", "Kasse", "Zahlungen", "Buchhaltung", "Backoffice"],
    highlights: [
      "Tap to Pay auf dem iPhone: kontaktlose Karten direkt auf dem Gerät annehmen, ohne zusätzliche Hardware (von Apple freigegebenes Entitlement).",
      "Buchhaltung mit automatischer Mehrwertsteuer und eCDF-Meldung für den luxemburgischen Markt.",
      "Küchenbildschirm in Echtzeit, der Bestellungen vom Service sofort in die Küche schiebt.",
      "Mehrmandanten-, Mehrfilial- und Mehrwährungsarchitektur mit getrennten Daten pro Betrieb.",
      "Ausfallsichere Kassenabläufe, damit der Service nicht stoppt, wenn das Netz kurz wegbricht.",
      "In Docker verpackt, rollende Auslieferungen ohne Ausfallzeit.",
    ],
  },
  doctomap: {
    tagline: "Finden Sie Ihren Arzt in Luxemburg",
    description:
      "Eine Online-Buchungsplattform, die Patienten mit Ärzten, Fachärzten und Therapeuten in Luxemburg verbindet. Verfügbarkeiten in Echtzeit, geprüfte Profile, Telekonsultation und sofortige Termine.",
    body: [
      "Doctomap verbindet Patienten mit Ärzten, Fachärzten und Therapeuten in ganz Luxemburg. Patienten suchen nach Fachrichtung, Symptom oder Ort und buchen Termine in Echtzeit mit wenigen Klicks.",
      "Dazu gehören geprüfte Behandlerprofile, Telekonsultation, Mehrsprachigkeit und ein Backoffice, mit dem Praxen Verfügbarkeiten, Kalender und Buchungen verwalten.",
    ],
    role: ["Komplettes Produkt", "Buchungsmaschine", "Backoffice", "Sicherheit"],
    highlights: [
      "Verfügbarkeiten in Echtzeit und Sofortbuchung mit Kalenderabgleich für Praxen.",
      "Telekonsultation und SMS-Benachrichtigungen über Twilio.",
      "Sicherheit überwacht mit einem Wazuh-SIEM: Prüfprotokolle und Angriffserkennung auf sensiblen Gesundheitsdaten.",
      "Mehrsprachige Plattform (FR / DE / EN), gebaut für den luxemburgischen Markt.",
      "NestJS-API plus PostgreSQL/Prisma, lastverteilt auf Hetzner ausgeliefert.",
    ],
  },
  tta: {
    tagline: "Europäische Technologiegruppe",
    description:
      "Die Technologiegruppe hinter Salonify, LUXPOS, BoxBee und DepotGest: eine gemeinsame Plattform für Software, KI, Zahlungen und Automatisierung, gebaut und betrieben aus Luxemburg.",
    body: [
      "TTA Technologies ist die Gruppe hinter meinen Produkten. Statt isolierte Werkzeuge zu bauen, baut TTA die gemeinsame Plattform, auf der sie alle stehen: Software, künstliche Intelligenz, Zahlungen, Automatisierung und Firmeninfrastruktur auf einem gemeinsamen Fundament.",
      "Salonify, LUXPOS, BoxBee und DepotGest laufen alle auf dieser Basis: gemeinsame Infrastruktur, gemeinsame Sicherheitspraktiken, gemeinsames Betriebswerkzeug. Die Gruppenseite stellt die Plattform, die Produkte und das Partnerprogramm vor.",
    ],
    role: ["Gruppenplattform", "Marke & Webseite", "Infrastruktur"],
    highlights: [
      "Eine Plattform, die vier ausgelieferte Produkte trägt, von Kasse über Buchung und Mail bis Logistik.",
      "Gemeinsames Serverfeld mit Überwachungsagenten, zentralem Verwaltungscockpit und Verfügbarkeitsmessung.",
      "Verwaltungskonsole auf Gruppenebene, die Live-Zahlen aus jedem Produkt zusammenführt.",
      "Entworfen, geschrieben und veröffentlicht als das öffentliche Gesicht der Gruppe.",
    ],
  },
  depotgest: {
    tagline: "Lagerverwaltung in 3D",
    description:
      "Lagerverwaltung, Webshop und Logistik auf einer Plattform: jedes Regal als digitaler 3D-Zwilling, Kommissionierwege und die LUXPOS-Buchhaltung eingebaut. Entwickelt in Luxemburg.",
    body: [
      "DepotGest macht ein Lager sichtbar: Jeder Lagerplatz existiert als digitaler Zwilling in 3D, und jeder Verkauf läuft durch dieselbe Strecke wie Kommissionierung, Webshop und LUXPOS-Buchhaltung.",
      "Die Plattform deckt Bestandsverwaltung mit Charge- und Verfallsverfolgung, GS1-128-Barcodes, eine REST-API und einen angebundenen Webshop auf der eigenen Domain des Betriebs ab. Gebaut für Firmen, die wachsen wollen, ohne die Kontrolle über ihre Regale zu verlieren.",
    ],
    role: ["Komplettes Produkt", "Lagerverwaltung", "Webshop", "Buchhaltungsanbindung"],
    highlights: [
      "Digitaler 3D-Zwilling des Lagers: jeder Platz, jedes Regal und jede Zone ist sichtbar und anklickbar.",
      "Charge-, Verfalls- und GS1-128-Barcodeverfolgung, gebaut für einen GoBD-konformen Betrieb.",
      "Angebundener Webshop plus LUXPOS-Buchhaltung, damit Bestand, Verkäufe und Bücher im Gleichklang bleiben.",
      "REST-API für Anbindungen und eigene Abläufe.",
    ],
  },
  "sellout-ai": {
    tagline: "Fotografieren. Analysieren. Verkaufen.",
    description:
      "KI-generierte Anzeigen für Ihre Gebrauchtartikel. Ein Foto machen, die KI erkennt den Artikel, schlägt einen Preis vor und schreibt in Minuten eine professionelle Anzeige, dann verkaufen Sie klüger auf jedem Marktplatz.",
    body: [
      "SellOut AI macht aus einem Foto eine fertige Anzeige. Fotografieren Sie Ihren Gebrauchtartikel: Die KI erkennt ihn, schlägt einen Preis vor und schreibt in Minuten eine professionelle, mehrsprachige Beschreibung.",
      "Die App ist gebaut, um die Reibung beim Verkauf auf Marktplätzen zu entfernen: analysieren, erzeugen und klüger verkaufen. Ausgeliefert als Mobile-App mit Aufnahme und KI-Analyse auf dem Gerät.",
    ],
    role: ["Komplettes Produkt", "Mobile", "KI / LLM"],
    highlights: [
      "Erkennung per Bildverarbeitung macht aus einem einzigen Foto ein strukturiertes Produktprofil.",
      "Von einem LLM erzeugte, mehrsprachige Anzeigentexte und kluge Preisvorschläge in Sekunden.",
      "Aufnahmeablauf auf dem Gerät, auf Geschwindigkeit entworfen: fotografieren, prüfen, veröffentlichen.",
      "Mit Flutter gebaut, für ein schnelles, natives Gefühl auf iOS.",
    ],
  },
  absaar: {
    tagline: "Innovation in Energie seit 1969",
    description:
      "Markenseite für ABSAAR, den deutschen Spezialisten für Fahrzeugenergie: Batterien, Starthilfegeräte und Ladegeräte. Eine dunkle, wirkungsstarke Darstellung der Marke und ihrer Geschichte.",
    body: [
      "ABSAAR ist eine deutsche Marke für Fahrzeugenergie mit Wurzeln bis 1969: Batterien, Starthilfegeräte, Ladegeräte und Energielösungen, die in ganz Europa verkauft werden.",
      "Ich habe eine dunkle, selbstbewusste Landingpage gebaut, die die technische Geschichte der Marke und ihr Produktsortiment in den Vordergrund stellt, mit einer wirkungsstarken Bühne und klarer Produkterzählung.",
    ],
    role: ["Landingpage"],
    highlights: [
      "Dunkle, selbstbewusste Bühne, die die technische Geschichte der Marke seit 1969 aufgreift.",
      "Schnelle, statisch erzeugte Seiten, abgestimmt auf Leistung und Suchmaschinen.",
      "Klare Produkterzählung über Batterien, Starthilfegeräte und Ladegeräte.",
    ],
  },
  barbertruck: {
    tagline: "Luxemburgs erster mobiler Barbershop",
    description:
      "Webseite im Street-Editorial-Stil für Luxemburgs ersten mobilen Barbershop: ein vollständig ausgebauter Mercedes Sprinter als Studio, überdimensionale Schrift und eine Buchung, die zu Ihnen kommt.",
    body: [
      "BarberTruck ist Luxemburgs erster mobiler Barbershop: ein vollständig ausgebauter Mercedes Sprinter, eingerichtet wie ein echtes Studio, der Kunden vor Ort in Luxemburg und Europa bedient.",
      "Ich habe die komplette Webseite in einem selbstbewussten Street-Editorial-Stil gebaut: überdimensionale Displayschrift, monochrome Bilder mit einem einzigen orangen Akzent, Seiten für den Truck, das Presidents-Servicemenü, die Standorte, Firmenkunden und Veranstaltungen, alles an die Online-Buchung angebunden.",
    ],
    role: ["Webseite", "Marke", "Buchung"],
    highlights: [
      "Street-Editorial-Design: überdimensionale schmale Schrift, monochrome Bilder, eine Akzentfarbe.",
      "Ein Servicemenü mit Charakter: jeder Schnitt ist nach einem Präsidenten benannt.",
      "Schnelle statische Seiten mit Online-Buchung, für einen Service, der zum Kunden fährt.",
    ],
  },
  o2nails: {
    tagline: "Nail-Art-Technologie der Luxusklasse",
    description:
      "Webseite für O2NAILS, Nail-Art-Technologie der Luxusklasse und digitaler Nageldruck. Eine klare, hochwertige Produktbühne mit Kollektionen und Shop.",
    body: [
      "O2NAILS bringt die Technologie des digitalen Nageldrucks in den Luxus-Beautymarkt: aufwendige Nail-Art in Sekunden drucken.",
      "Ich habe eine klare, hochwertige Webseite gebaut, die Technologie und Kollektionen in Szene setzt und Besucher vom Entdecken bis zum Kauf führt.",
    ],
    role: ["Webseite", "Shop"],
    highlights: [
      "Hochwertige Produktbühne für die Technologie des digitalen Nageldrucks.",
      "Klares Kollektionslayout, das Besucher vom Entdecken bis zum Shop führt.",
      "Schnell gebaut und auf Suchmaschinen ausgelegt, für eine Luxus-Beautymarke.",
    ],
  },
  dspimmo: {
    tagline: "Immobilienagentur, Luxemburg",
    description:
      "Landingpage und Backoffice für eine luxemburgische Immobilienagentur: Häuser, Wohnungen und Grundstücke, mit der Objektverwaltung hinter den Kulissen.",
    body: [
      "DSPImmo ist eine Immobilienagentur in Luxemburg, die mit Häusern, Wohnungen und Grundstücken handelt.",
      "Ich habe die öffentliche Landingpage geliefert, die die Agentur und ihre Objekte vorstellt, dazu ein Backoffice zur Verwaltung von Objekten, Anfragen und Inhalten.",
    ],
    role: ["Landingpage", "Backoffice"],
    highlights: [
      "Sauber gestaltete, animierte Landingpage mit starken Agenturzahlen und Erzählung.",
      "Backoffice zur Verwaltung von Objektangeboten, Anfragen und Inhalten.",
      "Mehrsprachig und auf lokales Immobilien-SEO in Luxemburg ausgelegt.",
    ],
  },
  homecenter: {
    tagline: "Möbel & Showroom, Luxemburg",
    description:
      "Komplettumsetzung für Home Center Luxemburg, einen Möbel-Showroom mit 3.500 m²: Landingpage, Onlineshop, Backoffice und ein Kassensystem im Laden.",
    body: [
      "Home Center ist ein Möbelhaus und Showroom mit 3.500 m² in Hollerich, Luxemburg, wo Tradition auf modernes Wohnen trifft.",
      "Ich habe den kompletten Stack dafür gebaut: die öffentliche Landingpage, einen Onlineshop, das Backoffice zur Verwaltung von Katalog und Bestellungen und eine Kasse im Laden. Ein verbundenes System von der Schaufensterseite bis zum Bezahlen.",
    ],
    role: ["Landingpage", "Shop", "Backoffice", "Kasse"],
    highlights: [
      "Ein verbundenes System von der Schaufensterseite bis zum Bezahlen: Landingpage, Shop, Backoffice und Kasse im Laden.",
      "Gemeinsamer Katalog und Bestand zwischen Webshop und dem physischen Showroom mit 3.500 m².",
      "Kasse im Laden, angebunden an dieselben Bestellungen und denselben Bestand wie online.",
      "Backoffice für Katalog, Bestellungen und Kunden an einem Ort.",
    ],
  },
  dynapharm: {
    tagline: "B2B-Gesundheitshandel mit Logistikautomatisierung",
    description:
      "Eine B2B-Handelsplattform für Gesundheit und Wellness mit vollständigem Lager- und Buchhaltungsmotor: scannergeführte Kommissionierung, automatische Rechnungsstellung mit Abgleich der Banküberweisungen und DHL-Etikettenerzeugung.",
    body: [
      "Dynapharm ist ein B2B-Shop für Fachkräfte im Gesundheitswesen: eine zugangsbeschränkte Shopseite, ein vollständiger Katalog und Bestellung für geprüfte Geschäftskonten.",
      "Hinter dem Shop habe ich einen kompletten Betriebsmotor gebaut. Bestellungen laufen in einen Lagerablauf mit einem scannergestützten Kommissionierweg, der die Kommissionierer auf der effizientesten Route führt. Rechnungen werden automatisch erzeugt und für die Buchhaltung gegen eingehende Banküberweisungen abgeglichen, und Versandetiketten entstehen über eine DHL-Anbindung passend zu jeder Bestellung. Von der Bestellung bis kommissioniert, berechnet, abgeglichen und versandt, fast ohne manuelle Schritte.",
    ],
    role: ["Shop", "Backoffice", "Lager / Logistik", "Buchhaltungsautomatisierung"],
    highlights: [
      "Scannergeführter Kommissionierweg: optimierter Ablauf für Kommissionierer und Lager, von der Bestellung bis zum gepackten Paket.",
      "Automatische Rechnungsstellung mit Erkennung von Banküberweisungen, die Zahlungen direkt in die Buchhaltung abgleicht.",
      "DHL-Anbindung, die pro Bestellung automatisch das richtige Versandetikett erzeugt.",
      "Zugangsbeschränkter B2B-Shop für geprüfte Fachkräfte im Gesundheitswesen.",
      "Ein verbundenes System: Katalog, Bestellungen, Logistik und Finanzen.",
    ],
  },
  hevert: {
    tagline: "Deutsche Naturarzneimittel, asiatischer Markt",
    description:
      "Onlineshop, der Heverts deutsche Naturarzneimittel und Vitamine auf den Hongkonger Markt bringt: Katalog, Warenkorb und Bezahlvorgang mit Mehrwährungsunterstützung.",
    body: [
      "Hevert ist eine deutsche Familienmarke für Naturarzneimittel und Vitamine, vertrauenswürdig seit 1956. Hevert Hongkong bringt das Sortiment auf den asiatischen Markt.",
      "Ich habe den Onlineshop gebaut: Produktkatalog, Suche, Kundenbereich, Warenkorb und Bezahlvorgang, lokalisiert für Hongkong mit Preisen in HKD und englischen Produktinhalten.",
    ],
    role: ["Shop", "Shopseite", "Lokalisierung"],
    highlights: [
      "Klare Shopseite, die einen regulierten Pharmakatalog verständlich und sicher darstellt.",
      "Lokalisiert für den Hongkonger Markt, mit Preisen in HKD.",
      "Schnelles Durchsehen des Katalogs mit Suche, Kollektionen und Produktdetailseiten.",
    ],
  },
  nexa: {
    tagline: "Netzunabhängige Energie und E-Commerce",
    description:
      "Onlineshop für Nexa: Solarmodule, LiFePO4-Batterien, tragbare Powerstations, Starthilfegeräte und Fahrzeugpflege. Netzunabhängige Lösungen für Haus, Camping und Profis.",
    body: [
      "Nexa ist ein Händler für Energie und Strom: Solarmodule, LiFePO4-Batterien, tragbare Powerstations, AdBlue, Schweißtechnik und Fahrzeugpflege. Netzunabhängige Lösungen für Haus, Camping und Profis.",
      "Ich habe das E-Commerce-Erlebnis gebaut: eine klare, schnelle Shopseite mit Kategoriennavigation, Produktdetails und Bezahlvorgang, optimiert auf Abschluss und Suchmaschinen.",
    ],
    role: ["Shop", "Shopseite"],
    highlights: [
      "Auf Abschluss ausgelegte Shopseite mit starker Kategorie- und Produktpräsentation.",
      "Mehrsprachiger Shop (DE), optimiert auf schnelles Laden und Suchmaschinen.",
      "Auf einem robusten E-Commerce-Fundament gebaut, mit zuverlässigem Bezahlen und Versand.",
    ],
  },
};

export const workTranslations: Record<Locale, Record<string, WorkTranslation>> = {
  en: {},
  fr,
  de,
};

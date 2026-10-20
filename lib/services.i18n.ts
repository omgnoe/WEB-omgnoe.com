/**
 * French and German translations of the services.
 *
 * Keyed by the canonical (English) slug. Everything not listed here falls
 * back to the English source in `services.ts`, so a missing field degrades to
 * English rather than to an empty page.
 *
 * The `title` fields are deliberately keyword-shaped: they are the H1 and the
 * <title>, and "Création de site internet au Luxembourg" is what people type.
 */

import type { Locale } from "@/lib/i18n";
import type { Service } from "@/lib/services";

export type ServiceTranslation = Partial<
  Pick<
    Service,
    | "name"
    | "title"
    | "short"
    | "meta"
    | "intro"
    | "deliverables"
    | "proof"
    | "faq"
    | "keywords"
    | "photoAlt"
  >
>;

const fr: Record<string, ServiceTranslation> = {
  "ios-apps": {
    name: "Applis iOS",
    title: "Développement d'applications iOS au Luxembourg",
    short:
      "Applications natives pour iPhone, iPad et Mac. Swift, SwiftUI et Flutter, jusqu'à l'App Store.",
    meta: "Développement d'applications iOS au Luxembourg : applications natives iPhone, iPad et Mac en Swift, SwiftUI et Flutter, livrées sur l'App Store. De l'idée à une application publiée, signée et validée.",
    intro: [
      "Je développe les applications de l'écosystème Apple comme Apple veut qu'elles soient faites : rapides, avec une vraie sensation de natif, et soignées. Selon le projet, cela veut dire Swift et SwiftUI pour une application entièrement native, ou Flutter quand une seule base de code doit couvrir iPhone et Android ensemble.",
      "J'ai fait passer la validation Apple à des clients de messagerie, des applications de caisse avec Tap to Pay sur iPhone, des applications de réservation et des outils d'IA. Cela comprend les parties que la plupart des équipes sous-estiment : la signature et les profils de provisionnement, les entitlements, StoreKit et les achats intégrés, les notifications push, les widgets, et le fait de passer la validation au premier ou au deuxième essai plutôt qu'au cinquième.",
      "Vous avez une seule personne qui couvre le design, le code, le backend et tout le processus App Store. Pas de passage de relais, pas de contexte perdu.",
    ],
    deliverables: [
      "Applications iPhone et iPad natives en Swift / SwiftUI",
      "Applications multiplateformes en Flutter (une base de code, iOS + Android)",
      "Applications Mac, notarisées et avec mise à jour automatique",
      "Tap to Pay sur iPhone et StoreKit / achats intégrés",
      "Notifications push, widgets, synchronisation en arrière-plan",
      "Soumission à l'App Store, gestion de la validation et des mises en production",
    ],
    proof:
      "Livré : BoxBee pour iPhone et iPad, LUXPOS avec Tap to Pay sur iPhone, les applications client et professionnel de Salonify.",
    faq: [
      {
        q: "Vous développez en natif ou en multiplateforme ?",
        a: "Les deux. Entièrement natif en Swift/SwiftUI quand l'application doit être profondément intégrée à iOS, Flutter quand une seule base de code pour iOS et Android vous fait réellement économiser. Je vous recommande celui qui convient à votre cas, pas celui qui m'arrange.",
      },
      {
        q: "Pouvez-vous prendre en charge tout le processus App Store ?",
        a: "Oui. Création du compte développeur, certificats, provisionnement, bêtas TestFlight, communication avec l'App Review et la mise en production elle-même. Vous validez, je m'occupe du reste.",
      },
      {
        q: "Développez-vous aussi le backend avec lequel l'application communique ?",
        a: "Presque toujours. Je construis l'API, la base de données et l'infrastructure en même temps que l'application, pour que tout s'emboîte et qu'il y ait un seul responsable pour l'ensemble du système.",
      },
    ],
    keywords: [
      "développement application iOS Luxembourg",
      "développeur iPhone Luxembourg",
      "développeur SwiftUI",
      "développement application Flutter",
      "publication App Store",
      "créer une application mobile Luxembourg",
    ],
  },
  "android-apps": {
    name: "Applis Android",
    title: "Développement d'applications Android au Luxembourg",
    short:
      "Applications Android en Flutter : une base de code, une sensation native, livrée sur Google Play.",
    meta: "Développement d'applications Android au Luxembourg : applications Flutter à la sensation native, notifications push, paiements et mode hors ligne, publiées sur Google Play. Une base de code pour Android et iOS.",
    intro: [
      "La plupart des projets qui ont besoin d'une application Android ont aussi besoin d'une application iOS. C'est pour cela que je développe Android avec Flutter : une base de code qui compile en véritables binaires natifs pour les deux plateformes, avec une apparence et un comportement que les utilisateurs ne distinguent pas d'une application native.",
      "Je couvre tout le côté Android : le langage Material là où il a sa place, les notifications via Firebase Cloud Messaging, la facturation Google Play, les liens profonds, la synchronisation de données en mode hors ligne d'abord, et tout le processus Play Console, des pistes de test internes au déploiement en production.",
      "Le résultat : une application, deux stores, et la moitié du coût de maintenance de deux bases de code natives séparées.",
    ],
    deliverables: [
      "Applications Flutter pour Android (et iOS depuis la même base de code)",
      "Publication Google Play : fiches, pistes de test, déploiement en production",
      "Notifications push via Firebase Cloud Messaging",
      "Facturation Google Play et paiements Stripe",
      "Synchronisation hors ligne d'abord et traitements en arrière-plan",
      "Configuration de la Play Console, signature et gestion des versions",
    ],
    proof:
      "Livré : l'application professionnelle Salonify sur Google Play, avec déploiement progressif auprès de clients réels.",
    faq: [
      {
        q: "Pourquoi Flutter et pas du Kotlin natif ?",
        a: "Pour la plupart des applications métier, Flutter offre la même expérience utilisateur pour environ la moitié du coût de développement et de maintenance, parce qu'iOS vient presque gratuitement. Quand un projet a réellement besoin d'un accès plateforme au niveau de Kotlin, je vous le dis avant de commencer.",
      },
      {
        q: "Pouvez-vous publier sous le compte Play Store de ma société ?",
        a: "Oui, et je le recommande : l'application doit vivre dans votre compte, avec moi comme développeur invité. Je m'occupe de la vérification, des clés de signature et du processus de publication avec vous.",
      },
      {
        q: "Et les tablettes et les grands écrans ?",
        a: "Les mises en page sont responsives par défaut. Si les tablettes comptent pour votre usage, par exemple une application de comptoir ou de borne, je les conçois explicitement.",
      },
    ],
    keywords: [
      "développement application Android Luxembourg",
      "développeur Flutter Luxembourg",
      "publication Google Play",
      "développement application multiplateforme",
      "développeur application mobile Luxembourg",
    ],
  },
  "app-publishing": {
    name: "Publication sur les stores",
    title: "Publication sur l'App Store et Google Play",
    short:
      "Signature, validation, fiches de store et mises en production. Je fais passer les applications devant Apple et Google.",
    meta: "Service de publication d'applications : soumission App Store et Google Play, signature, certificats, gestion de la validation, fiches de store et gestion des versions pour les applications iOS et Android.",
    intro: [
      "Développer une application, c'est la moitié du travail. La faire passer la validation Apple, la signer correctement, la présenter correctement dans le store et la mettre à jour sans rien casser, c'est l'autre moitié, et c'est là que beaucoup d'équipes perdent des semaines.",
      "Je prends la publication en charge comme un service : comptes développeur, certificats et provisionnement, déclarations de confidentialité, communication avec l'App Review et la Play Console, déploiements progressifs, et la fiche de store elle-même avec des captures et des textes qui convertissent. J'ai géré des refus, des recours et des demandes d'entitlement, dont l'entitlement Tap to Pay d'Apple, et je sais comment raisonnent les équipes de validation.",
      "Si vous avez déjà une application bloquée en validation ou un processus de publication qui casse à chaque fois, c'est le moyen le plus rapide d'y remédier.",
    ],
    deliverables: [
      "Création et vérification des comptes Apple Developer et Google Play",
      "Certificats, clés de signature et provisionnement faits correctement",
      "Fiches de store : captures, médias de présentation, textes, mots-clés",
      "Soumission et gestion des refus sur les deux stores",
      "TestFlight et pistes de test Play pour les bêtas",
      "Gestion des versions : déploiements progressifs, publications par phases, correctifs",
    ],
    proof:
      "Passés en validation : BoxBee (Mac, iOS), LUXPOS (entitlement Tap to Pay), les applications Salonify sur les deux stores.",
    faq: [
      {
        q: "Mon application est refusée en boucle. Pouvez-vous aider ?",
        a: "En général oui. La plupart des refus viennent d'un petit nombre de causes : déclarations de confidentialité, règles de paiement, modes d'arrière-plan ou métadonnées. Je diagnostique le refus, je corrige la cause et j'écris les notes au validateur qui font passer l'application.",
      },
      {
        q: "Pouvez-vous publier une application que vous n'avez pas développée ?",
        a: "Oui. J'audite d'abord la configuration de build et de signature, puis je reprends le processus de store. Si l'application elle-même doit être modifiée pour passer la validation, je peux aussi le faire.",
      },
      {
        q: "Gérez-vous les mises à jour après le lancement ?",
        a: "Oui. La gestion continue des versions est disponible en forfait mensuel : je publie vos mises à jour, je surveille le déploiement et je gère toute communication avec les stores.",
      },
    ],
    keywords: [
      "service publication App Store",
      "aide refus validation app",
      "publication Google Play",
      "gestion des versions application",
      "configuration TestFlight",
    ],
  },
  websites: {
    name: "Sites internet",
    title: "Création de site internet au Luxembourg",
    short:
      "De la page d'atterrissage à la plateforme complète avec boutique, réservation et back office. Rapide, pensé pour le SEO, construit pour convertir.",
    meta: "Création de site internet au Luxembourg : sites vitrines, boutiques en ligne, plateformes de réservation et SaaS développés avec Next.js. Rapides, optimisés pour le référencement, multilingues et pensés mobile d'abord, de la page unique à la plateforme complète.",
    intro: [
      "Je construis tout, du site d'une seule page bien affûté à la plateforme complète avec boutique, moteur de réservation et back office. Le point commun : des pages rapides, un design propre, du SEO technique dès le premier commit, et un code que le prochain développeur peut réellement reprendre.",
      "Ma stack, c'est Next.js, React et Tailwind côté affichage, Node et PostgreSQL derrière. Les sites partent en ligne avec des données structurées, des sitemaps, des métadonnées correctes, l'optimisation des images et le multilingue là où le marché luxembourgeois l'exige, en français, en allemand, en anglais et au-delà.",
      "Pour des entreprises, j'ai livré des sites de marque, des boutiques en ligne, des pages immobilières avec back office, des boutiques B2B avec automatisation logistique et des systèmes de showroom complets qui relient la boutique en ligne à la caisse du magasin.",
    ],
    deliverables: [
      "Pages d'atterrissage et sites de marque qui chargent vite et qui se référencent",
      "Boutiques en ligne et sites e-commerce",
      "Parcours de réservation et portails clients",
      "Back offices et tableaux de bord d'administration",
      "SEO technique : données structurées, sitemaps, Core Web Vitals",
      "Versions multilingues pour le marché luxembourgeois (FR, DE, EN, LU)",
    ],
    proof:
      "Livré : ABSAAR, BarberTruck, DSPImmo, Home Center, Dynapharm, O2NAILS, Nexa, Hevert Hong Kong et d'autres.",
    faq: [
      {
        q: "Combien de temps prend un site internet ?",
        a: "Une page d'atterrissage ciblée part en ligne en une à deux semaines. Une boutique ou un site avec réservation et back office prend généralement quatre à huit semaines selon le périmètre. Je vous donne un calendrier concret après une seule conversation.",
      },
      {
        q: "Faites-vous le design en plus du développement ?",
        a: "Oui. La plupart des clients arrivent avec un logo et une idée ; je prends la suite jusqu'à un site fini, designé, développé et mis en ligne. Si vous avez un graphiste, je développe d'après ses maquettes.",
      },
      {
        q: "Mon site sera-t-il bien référencé sur Google ?",
        a: "Le SEO technique est intégré d'office : balisage propre, données structurées, sitemaps, Core Web Vitals rapides et métadonnées par page. Je structure aussi le contenu pour les recherches que vos clients font réellement. Le classement dépend ensuite du contenu et de la concurrence, et je vous dis honnêtement à quoi vous attendre.",
      },
      {
        q: "Le site sera-t-il en plusieurs langues ?",
        a: "Oui, et au Luxembourg c'est presque toujours la bonne décision. Je construis le site en français, allemand, anglais et luxembourgeois avec les balises hreflang correctes, pour que Google serve la bonne langue à chaque visiteur au lieu de faire concurrence à vos propres pages.",
      },
    ],
    keywords: [
      "création site internet Luxembourg",
      "création site web Luxembourg",
      "agence web Luxembourg",
      "site vitrine Luxembourg",
      "développeur web Luxembourg",
      "boutique en ligne Luxembourg",
      "refonte site internet Luxembourg",
      "site internet multilingue Luxembourg",
    ],
  },
  "it-support": {
    name: "Aide informatique",
    title: "Support et dépannage informatique au Luxembourg",
    short:
      "Une aide informatique concrète pour les petites entreprises : appareils, e-mails, réseaux, imprimantes, caisses et le chaos du quotidien.",
    meta: "Support informatique pour petites entreprises au Luxembourg : appareils, e-mails, Wi-Fi, imprimantes, caisses, sauvegardes et problèmes logiciels, réglés concrètement et expliqués en langage clair.",
    intro: [
      "Les petites entreprises n'ont presque jamais besoin d'un grand service informatique. Elles ont besoin d'une personne qui décroche, comprend le problème et le règle. C'est ça, le service.",
      "J'accompagne des commerces, des salons, des restaurants et des bureaux avec l'équipement réel qu'ils utilisent : Mac et PC, e-mails et noms de domaine, Wi-Fi et réseaux, imprimantes et scanners, caisses et terminaux de paiement, tablettes et les vingt petits outils qui font tenir une entreprise.",
      "Comme je développe des logiciels et administre des serveurs à titre professionnel, je règle les causes plutôt que les symptômes, et j'explique ce qui s'est passé en langage clair, pas en jargon.",
    ],
    deliverables: [
      "Dépannage sur place et à distance pour Mac, Windows, iOS et Android",
      "E-mails, noms de domaine et DNS enfin configurés correctement",
      "Wi-Fi, réseau et imprimantes installés pour durer",
      "Caisses, terminaux de paiement et matériel de scan",
      "Des sauvegardes qui se restaurent vraiment",
      "Des conseils en langage clair sur quoi acheter et quoi éviter",
    ],
    proof:
      "Support informatique continu pour des commerces, des salons et des bureaux partout au Luxembourg, des caisses aux réseaux.",
    faq: [
      {
        q: "Vous déplacez-vous sur place ?",
        a: "Oui, partout au Luxembourg. Beaucoup de problèmes se règlent aussi à distance dans l'heure, et le distant coûte toujours moins cher, donc je commence par là quand cela a du sens.",
      },
      {
        q: "Pouvez-vous être notre informaticien attitré ?",
        a: "Oui. Plusieurs entreprises me gardent sous un petit forfait mensuel : je suis leur premier appel pour tout ce qui touche à l'informatique, et leurs systèmes sont entretenus avant de tomber en panne.",
      },
      {
        q: "Nous ne sommes pas du tout techniques. C'est un problème ?",
        a: "C'est le cas normal. Vous décrivez le problème avec vos mots, je pose les bonnes questions et je retraduis tout en langage clair.",
      },
    ],
    keywords: [
      "support informatique Luxembourg",
      "dépannage informatique Luxembourg",
      "assistance informatique petite entreprise",
      "réparation ordinateur Luxembourg",
      "installation réseau Luxembourg",
      "maintenance informatique Luxembourg",
    ],
  },
  cybersecurity: {
    name: "Cybersécurité",
    title: "Cybersécurité et durcissement des systèmes",
    short:
      "Audits de sécurité, durcissement et surveillance pour les plateformes web et l'infrastructure des petites entreprises.",
    meta: "Services de cybersécurité au Luxembourg : audits de sécurité, durcissement de serveurs, détection d'intrusion avec surveillance SIEM, authentification sécurisée et traitement des données sensibles conforme au RGPD.",
    intro: [
      "Je sécurise le type de systèmes que je construis aussi : plateformes web, API, serveurs et les entreprises derrière. Cela donne aux audits un avantage pratique, parce que je sais où les développeurs coupent les coins et où les attaquants regardent en premier.",
      "Le travail va de l'audit de sécurité ponctuel d'une plateforme existante (parcours d'authentification, contrôle d'accès, surfaces d'injection, envois de fichiers, risques liés aux dépendances) au durcissement de serveurs, à la mise en place de la détection d'intrusion avec un SIEM Wazuh, au verrouillage de Cloudflare et du DNS, et à la construction d'une authentification qui tient : 2FA, limitation de débit, gestion des sessions, contrôles de rôles.",
      "Je fais tourner cela en production sur mes propres plateformes, y compris des systèmes qui traitent des données de santé sensibles, et les mêmes standards vont dans le travail pour les clients.",
    ],
    deliverables: [
      "Audits de sécurité de plateformes web et d'API avec un rapport de constats priorisés",
      "Durcissement des serveurs et de l'infrastructure (Linux, Docker, bases de données)",
      "Mise en place et surveillance SIEM / détection d'intrusion (Wazuh)",
      "Authentification bien faite : 2FA, OAuth, limitation de débit, contrôles de rôles",
      "Sécurité Cloudflare, DNS et e-mail (SPF, DKIM, DMARC)",
      "Réponse à incident quand quelque chose a déjà mal tourné",
    ],
    proof:
      "En production : SIEM Wazuh sur des plateformes de données de santé, authentification de place de marché testée en intrusion, parcs multi-serveurs durcis.",
    faq: [
      {
        q: "À quoi ressemble un audit de sécurité ?",
        a: "J'examine votre plateforme comme le ferait un attaquant : authentification, autorisation, points d'injection, traitement des fichiers, secrets, dépendances et infrastructure. Vous recevez un rapport priorisé avec des correctifs concrets, et je peux aussi les implémenter.",
      },
      {
        q: "Nous avons eu un incident. Pouvez-vous aider maintenant ?",
        a: "Contactez-moi immédiatement. J'aide à contenir le problème, à évaluer ce qui a été consulté, à refermer la brèche et à vous ramener à un état fiable, puis je durcis pour que cela ne se reproduise pas.",
      },
      {
        q: "C'est réservé aux grandes entreprises ?",
        a: "Non. Les petites entreprises sont attaquées précisément parce que personne n'a durci leurs systèmes. Un audit d'une journée plus les correctifs supprime déjà les voies d'entrée les plus probables.",
      },
    ],
    keywords: [
      "cybersécurité Luxembourg",
      "audit de sécurité application web",
      "test d'intrusion Luxembourg",
      "durcissement serveur",
      "surveillance SIEM",
      "sécurité RGPD",
    ],
    photoAlt: "Noe Nei dans une salle de contrôle sombre",
  },
  hosting: {
    name: "Hébergement & gestion IT",
    title: "Hébergement web et infrastructure gérée",
    short:
      "Hébergement dans l'UE, déploiements, surveillance, sauvegardes et mises à jour. Vos systèmes tournent, je les garde en marche.",
    meta: "Hébergement géré et gestion informatique : serveurs dans l'UE, déploiements Docker, surveillance, sauvegardes, mises à jour et mises en production sans interruption pour les sites internet, les boutiques et les plateformes.",
    intro: [
      "Chaque produit que j'exploite vit sur une infrastructure que je gère moi-même : serveurs situés dans l'UE, Docker, PostgreSQL, Redis, réseaux privés, agents de surveillance et sauvegardes automatisées. Je propose la même configuration comme service.",
      "Hébergement géré veut dire ici tout le côté exploitation : mise en service, TLS, DNS et Cloudflare, déploiements sans interruption, mises à jour système, surveillance des journaux et de la disponibilité, des stratégies de sauvegarde testées en restaurant réellement, et des alertes qui atteignent un humain avant que les clients ne remarquent quoi que ce soit.",
      "Cela se marie naturellement avec le développement : je construis votre plateforme, puis je la garde rapide, à jour et en ligne. Mais je reprends aussi des systèmes existants qui n'ont actuellement aucun exploitant responsable.",
    ],
    deliverables: [
      "Hébergement dans l'UE (Hetzner et comparables) avec réseau privé",
      "Déploiements basés sur Docker, sans interruption de service",
      "Surveillance, alertes et suivi de disponibilité sur tous vos services",
      "Sauvegardes automatisées, testées par restauration",
      "Mises à jour système et de dépendances selon un calendrier",
      "Gestion du DNS, du TLS, de Cloudflare et de la délivrabilité des e-mails",
    ],
    proof:
      "Exploité au quotidien : un parc multi-serveurs qui fait tourner Salonify, LUXPOS, BoxBee, Doctomap et des systèmes clients, avec surveillance et sauvegardes.",
    faq: [
      {
        q: "Où se trouve l'hébergement ?",
        a: "Dans l'UE, principalement chez Hetzner en Allemagne et en Finlande. Les données restent sous juridiction européenne, ce qui compte pour le RGPD et pour les clients qui ne veulent pas être exposés au CloudAct américain.",
      },
      {
        q: "Pouvez-vous reprendre notre serveur existant ?",
        a: "Oui. J'audite ce qui tourne, je le documente, je remets les sauvegardes et la surveillance au niveau, puis je l'administre en continu. Les migrations vers des configurations plus propres se font étape par étape, sans interruption.",
      },
      {
        q: "Combien coûte l'hébergement géré ?",
        a: "Un petit site démarre à un tarif mensuel modeste, serveur compris ; les plateformes avec bases de données, files d'attente et plusieurs services sont tarifées selon ce dont elles ont réellement besoin. Vous obtenez un montant mensuel prévisible.",
      },
    ],
    keywords: [
      "hébergement web Luxembourg",
      "hébergement UE RGPD",
      "administration serveur Luxembourg",
      "déploiement Docker",
      "gestion informatique Luxembourg",
      "maintenance site internet Luxembourg",
    ],
    photoAlt: "Noe Nei plongé dans une baie de serveurs",
  },
  products: {
    name: "Produits propres",
    title: "Les produits que je construis et exploite",
    short:
      "Je ne construis pas seulement pour des clients. Je lance et j'exploite mes propres produits, de la caisse à la messagerie dopée à l'IA.",
    meta: "Noe Nei construit et exploite ses propres produits logiciels : Salonify, LUXPOS, BoxBee, Doctomap et DepotGest. Une expérience de produit qui se retrouve dans chaque projet client.",
    intro: [
      "La moitié de ma semaine va dans des produits que je possède et que j'exploite : Salonify (réservation et caisse pour les salons), LUXPOS (caisse et comptabilité), BoxBee (client de messagerie dopé à l'IA), Doctomap (prise de rendez-vous médicaux) et DepotGest (gestion d'entrepôt). De vrais produits, de vrais clients, une vraie responsabilité de disponibilité.",
      "Cela change ma manière de travailler pour mes clients. Je sais ce qui arrive après la mise en ligne : le support, la surveillance, les paiements qui échouent à 2 heures du matin, les validations App Store, les demandes RGPD, les factures de serveur. Je construis donc des systèmes qui survivent au contact du réel, pas des démos qui impressionnent une seule fois.",
      "Cela veut aussi dire que je peux être un partenaire au-delà du code : tarification, prise en main, fidélisation, parcours de paiement et exploitation sont des choses que je fais chaque jour pour mes propres sociétés.",
    ],
    deliverables: [
      "Une stratégie produit ancrée dans l'exploitation de vrais produits",
      "Des MVP réellement livrables, pas jetables",
      "Architecture de paiement et d'abonnement (Stripe, achats intégrés)",
      "Analytique, surveillance et outillage d'exploitation dès le premier jour",
      "Un avis honnête sur ce qu'il faut développer, acheter ou abandonner",
    ],
    proof:
      "En ligne aujourd'hui : Salonify, LUXPOS, BoxBee, Doctomap, DepotGest et la plateforme du groupe TTA Technologies.",
    faq: [
      {
        q: "En quoi cela compte pour mon projet ?",
        a: "Parce que vous obtenez des décisions de quelqu'un qui doit vivre avec ses propres décisions. L'architecture, les paiements et l'exploitation sont choisis comme je les choisis pour des produits que j'exploite moi-même, où un mauvais choix me coûte directement.",
      },
      {
        q: "Prenez-vous des parts ou vous associez-vous à des idées ?",
        a: "Occasionnellement, quand l'idée et les personnes correspondent. Le cas par défaut est une relation client normale, mais je suis ouvert à discuter d'aventures communes.",
      },
      {
        q: "Puis-je voir les produits en ligne ?",
        a: "Oui : salonify.eu, luxpos.lu, boxbee.co, doctomap.lu et depotgest.com sont tous en ligne et accessibles. Ce que vous y voyez est ce que je livre.",
      },
    ],
    keywords: [
      "studio produit Luxembourg",
      "développeur fondateur SaaS",
      "développement MVP startup Luxembourg",
      "produits logiciels Luxembourg",
    ],
    photoAlt: "Noe Nei examinant des piles de travaux imprimés",
  },
};

const de: Record<string, ServiceTranslation> = {
  "ios-apps": {
    name: "iOS-Apps",
    title: "iOS-App-Entwicklung in Luxemburg",
    short:
      "Native Apps für iPhone, iPad und Mac. Swift, SwiftUI und Flutter, bis in den App Store.",
    meta: "iOS-App-Entwicklung in Luxemburg: native iPhone-, iPad- und Mac-Apps mit Swift, SwiftUI und Flutter, ausgeliefert in den App Store. Von der Idee bis zur veröffentlichten, signierten und geprüften App.",
    intro: [
      "Ich baue Apps für das Apple-Ökosystem so, wie Apple sie gebaut haben will: schnell, mit echtem nativen Gefühl und sauber ausgearbeitet. Je nach Projekt heißt das Swift und SwiftUI für eine vollständig native App, oder Flutter, wenn eine Codebasis iPhone und Android zusammen abdecken soll.",
      "Ich habe Mail-Clients, Kassen-Apps mit Tap to Pay auf dem iPhone, Buchungs-Apps und KI-Werkzeuge durch die Apple-Prüfung gebracht. Dazu gehören die Teile, die die meisten Teams unterschätzen: Signierung und Provisioning, Entitlements, StoreKit und In-App-Käufe, Push-Benachrichtigungen, Widgets, und das Bestehen der Prüfung beim ersten oder zweiten Versuch statt beim fünften.",
      "Sie haben eine Person, die Design, Code, Backend und den App-Store-Prozess abdeckt. Keine Übergaben, kein verlorener Kontext.",
    ],
    deliverables: [
      "Native iPhone- und iPad-Apps in Swift / SwiftUI",
      "Plattformübergreifende Apps in Flutter (eine Codebasis, iOS + Android)",
      "Mac-Apps, notarisiert und mit automatischen Updates",
      "Tap to Pay auf dem iPhone und StoreKit / In-App-Käufe",
      "Push-Benachrichtigungen, Widgets, Synchronisierung im Hintergrund",
      "App-Store-Einreichung, Prüfungsbegleitung und Release-Management",
    ],
    proof:
      "Ausgeliefert: BoxBee für iPhone und iPad, LUXPOS mit Tap to Pay auf dem iPhone, die Kunden- und Profi-Apps von Salonify.",
    faq: [
      {
        q: "Bauen Sie vollständig nativ oder plattformübergreifend?",
        a: "Beides. Vollständig nativ in Swift/SwiftUI, wenn die App tief in iOS integriert sein soll, Flutter, wenn eine Codebasis für iOS und Android Ihnen echtes Geld spart. Ich empfehle das Richtige für Ihren Fall, nicht das, was mir bequem ist.",
      },
      {
        q: "Können Sie den ganzen App-Store-Prozess übernehmen?",
        a: "Ja. Einrichtung des Entwicklerkontos, Zertifikate, Provisioning, TestFlight-Betas, Kommunikation mit der App-Prüfung und die Veröffentlichung selbst. Sie geben frei, ich mache den Rest.",
      },
      {
        q: "Bauen Sie auch das Backend, mit dem die App spricht?",
        a: "Fast immer. Ich baue die API, die Datenbank und die Infrastruktur parallel zur App, damit alles zusammenpasst und es einen Verantwortlichen für das ganze System gibt.",
      },
    ],
    keywords: [
      "iOS App Entwicklung Luxemburg",
      "iPhone App Entwickler Luxemburg",
      "SwiftUI Entwickler",
      "Flutter App Entwicklung",
      "App Store Veröffentlichung",
      "App entwickeln lassen Luxemburg",
    ],
  },
  "android-apps": {
    name: "Android-Apps",
    title: "Android-App-Entwicklung in Luxemburg",
    short:
      "Android-Apps mit Flutter: eine Codebasis, natives Gefühl, ausgeliefert zu Google Play.",
    meta: "Android-App-Entwicklung in Luxemburg: Flutter-Apps mit nativem Gefühl, Push-Benachrichtigungen, Zahlungen und Offline-Betrieb, veröffentlicht bei Google Play. Eine Codebasis für Android und iOS.",
    intro: [
      "Die meisten Projekte, die eine Android-App brauchen, brauchen auch eine iOS-App. Deshalb baue ich Android mit Flutter: eine Codebasis, die zu echten nativen Binaries für beide Plattformen kompiliert, mit einem Erscheinungsbild, das Nutzer nicht von plattformnativen Apps unterscheiden können.",
      "Ich decke die ganze Android-Seite ab: Material-Design dort, wo es hingehört, Push über Firebase Cloud Messaging, Google-Play-Abrechnung, Deep Links, Offline-First-Datensynchronisierung und den Play-Console-Prozess von internen Testkanälen bis zur Produktionsauslieferung.",
      "Das Ergebnis: eine App, zwei Stores, die Hälfte der Wartungskosten von zwei getrennten nativen Codebasen.",
    ],
    deliverables: [
      "Flutter-Apps für Android (und iOS aus derselben Codebasis)",
      "Google-Play-Veröffentlichung: Einträge, Testkanäle, Produktionsauslieferung",
      "Push-Benachrichtigungen über Firebase Cloud Messaging",
      "Google-Play-Abrechnung und Stripe-Zahlungen",
      "Offline-First-Synchronisierung und Hintergrundaufgaben",
      "Play-Console-Einrichtung, Signierung und Release-Verwaltung",
    ],
    proof:
      "Ausgeliefert: die Salonify-Profi-App bei Google Play, mit stufenweiser Auslieferung an echte Kunden.",
    faq: [
      {
        q: "Warum Flutter und nicht natives Kotlin?",
        a: "Für die meisten Geschäfts-Apps liefert Flutter dieselbe Nutzererfahrung für etwa die Hälfte der Bau- und Wartungskosten, weil iOS fast gratis mitkommt. Wenn ein Projekt wirklich Plattformzugriff auf Kotlin-Niveau braucht, sage ich das vor dem Start.",
      },
      {
        q: "Können Sie unter dem Play-Store-Konto meiner Firma veröffentlichen?",
        a: "Ja, und ich empfehle es: Die App soll in Ihrem Konto leben, mit mir als eingeladenem Entwickler. Verifizierung, Signierschlüssel und Veröffentlichungsprozess mache ich mit Ihnen gemeinsam.",
      },
      {
        q: "Was ist mit Tablets und großen Bildschirmen?",
        a: "Layouts sind standardmäßig responsiv. Wenn Tablets für Ihren Anwendungsfall wichtig sind, zum Beispiel eine Theken- oder Kiosk-App, entwerfe ich sie ausdrücklich dafür.",
      },
    ],
    keywords: [
      "Android App Entwicklung Luxemburg",
      "Flutter Entwickler Luxemburg",
      "Google Play Veröffentlichung",
      "plattformübergreifende App Entwicklung",
      "Mobile App Entwickler Luxemburg",
    ],
  },
  "app-publishing": {
    name: "Store-Veröffentlichung",
    title: "Veröffentlichung im App Store und bei Google Play",
    short:
      "Signierung, Prüfung, Store-Einträge und Releases. Ich bringe Apps durch die Prüfung bei Apple und Google.",
    meta: "App-Veröffentlichung als Dienstleistung: Einreichung im App Store und bei Google Play, Signierung, Zertifikate, Prüfungsbegleitung, Store-Einträge und Release-Verwaltung für iOS- und Android-Apps.",
    intro: [
      "Eine App zu bauen ist die halbe Arbeit. Sie durch die Apple-Prüfung zu bringen, korrekt zu signieren, gut im Store darzustellen und sicher zu aktualisieren, ist die andere Hälfte, und genau dort verlieren viele Teams Wochen.",
      "Ich übernehme die Veröffentlichungsseite als Dienstleistung: Entwicklerkonten, Zertifikate und Provisioning, Datenschutzangaben, Kommunikation mit der App-Prüfung und der Play Console, stufenweise Auslieferungen und den Store-Eintrag selbst, mit Screenshots und Texten, die konvertieren. Ich habe Apps durch Ablehnungen, Einsprüche und Entitlement-Anträge gebracht, darunter das Tap-to-Pay-Entitlement von Apple, und weiß, wie die Prüfteams denken.",
      "Wenn Sie schon eine App haben, die in der Prüfung hängt, oder einen Veröffentlichungsprozess, der immer wieder kaputtgeht, ist das der schnellste Weg, das zu reparieren.",
    ],
    deliverables: [
      "Einrichtung und Verifizierung der Apple-Developer- und Google-Play-Konten",
      "Zertifikate, Signierschlüssel und Provisioning richtig gemacht",
      "Store-Einträge: Screenshots, Vorschaumedien, Texte, Keywords",
      "Einreichung und Behandlung von Ablehnungen in beiden Stores",
      "TestFlight und Play-Testkanäle für Betas",
      "Release-Verwaltung: stufenweise Auslieferung, phasenweise Releases, Hotfixes",
    ],
    proof:
      "Durch die Prüfung gebracht: BoxBee (Mac, iOS), LUXPOS (Tap-to-Pay-Entitlement), die Salonify-Apps in beiden Stores.",
    faq: [
      {
        q: "Meine App wird immer wieder abgelehnt. Können Sie helfen?",
        a: "Meistens ja. Die meisten Ablehnungen kommen aus einer kleinen Zahl von Ursachen: Datenschutzangaben, Zahlungsregeln, Hintergrundmodi oder Metadaten. Ich finde die Ursache, behebe sie und schreibe die Prüfernotizen, die die App durchbringen.",
      },
      {
        q: "Können Sie eine App veröffentlichen, die Sie nicht gebaut haben?",
        a: "Ja. Ich prüfe zuerst Build und Signierung, dann übernehme ich den Store-Prozess. Wenn die App selbst Änderungen braucht, um die Prüfung zu bestehen, kann ich die auch machen.",
      },
      {
        q: "Übernehmen Sie Updates nach dem Start?",
        a: "Ja. Laufende Release-Verwaltung gibt es als monatliche Pauschale: Ich liefere Ihre Updates aus, beobachte die Auslieferung und übernehme die Kommunikation mit den Stores.",
      },
    ],
    keywords: [
      "App Store Veröffentlichung Service",
      "Hilfe App Ablehnung Prüfung",
      "Google Play Veröffentlichung",
      "App Release Management",
      "TestFlight Einrichtung",
    ],
  },
  websites: {
    name: "Webseiten",
    title: "Webseite erstellen lassen in Luxemburg",
    short:
      "Von der Landingpage bis zur kompletten Plattform mit Shop, Buchung und Backoffice. Schnell, SEO zuerst, auf Umsatz gebaut.",
    meta: "Webseite erstellen lassen in Luxemburg: Webseiten, Onlineshops, Buchungsplattformen und SaaS mit Next.js gebaut. Schnell, suchmaschinenoptimiert, mehrsprachig und mobil zuerst, von der Landingpage bis zur kompletten Plattform.",
    intro: [
      "Ich baue alles, von der scharf geschnittenen Einseiter-Webseite bis zur kompletten Plattform mit Shop, Buchungsmaschine und Backoffice. Der gemeinsame Nenner: schnelle Seiten, klares Design, technisches SEO ab dem ersten Commit und ein Aufbau, den der nächste Entwickler wirklich weiterpflegen kann.",
      "Mein Stack ist Next.js, React und Tailwind vorne, Node und PostgreSQL dahinter. Die Seiten gehen mit strukturierten Daten, Sitemaps, korrekten Metadaten, Bildoptimierung und Mehrsprachigkeit online, dort wo der luxemburgische Markt sie braucht, auf Deutsch, Französisch, Englisch und mehr.",
      "Für Unternehmen habe ich Markenseiten, E-Commerce-Shops, Immobilien-Landingpages mit Backoffice, B2B-Shops mit Logistikautomatisierung und komplette Showroom-Systeme geliefert, die den Webshop mit der Kasse im Laden verbinden.",
    ],
    deliverables: [
      "Landingpages und Markenseiten, die schnell laden und ranken",
      "Onlineshops und E-Commerce-Systeme",
      "Buchungsstrecken und Kundenportale",
      "Backoffices und Verwaltungsoberflächen",
      "Technisches SEO: strukturierte Daten, Sitemaps, Core Web Vitals",
      "Mehrsprachige Umsetzungen für den luxemburgischen Markt (DE, FR, EN, LU)",
    ],
    proof:
      "Geliefert: ABSAAR, BarberTruck, DSPImmo, Home Center, Dynapharm, O2NAILS, Nexa, Hevert Hongkong und weitere.",
    faq: [
      {
        q: "Wie lange dauert eine Webseite?",
        a: "Eine fokussierte Landingpage geht in einer bis zwei Wochen online. Ein Shop oder eine Seite mit Buchung und Backoffice braucht je nach Umfang typischerweise vier bis acht Wochen. Nach einem Gespräch nenne ich Ihnen einen konkreten Zeitplan.",
      },
      {
        q: "Machen Sie Design und Entwicklung?",
        a: "Ja. Die meisten Kunden kommen mit einem Logo und einer Idee; ich übernehme von dort bis zur fertigen, gestalteten, gebauten und veröffentlichten Seite. Wenn Sie einen Designer haben, baue ich nach dessen Vorlage.",
      },
      {
        q: "Wird meine Seite bei Google ranken?",
        a: "Technisches SEO ist von Anfang an eingebaut: saubere Auszeichnung, strukturierte Daten, Sitemaps, schnelle Core Web Vitals und Metadaten pro Seite. Ich strukturiere die Inhalte außerdem nach den Suchanfragen, die Ihre Kunden wirklich stellen. Das Ranking hängt dann von Inhalt und Wettbewerb ab, und ich sage Ihnen ehrlich, was zu erwarten ist.",
      },
      {
        q: "Wird die Seite mehrsprachig?",
        a: "Ja, und in Luxemburg ist das fast immer die richtige Entscheidung. Ich baue die Seite auf Deutsch, Französisch, Englisch und Luxemburgisch mit korrekten hreflang-Angaben, damit Google jedem Besucher die richtige Sprache ausliefert, statt dass Ihre eigenen Seiten sich gegenseitig Konkurrenz machen.",
      },
    ],
    keywords: [
      "Webseite erstellen Luxemburg",
      "Webseite erstellen lassen Luxemburg",
      "Webdesign Luxemburg",
      "Webentwicklung Luxemburg",
      "Homepage erstellen Luxemburg",
      "Onlineshop erstellen Luxemburg",
      "Webentwickler Luxemburg",
      "mehrsprachige Webseite Luxemburg",
    ],
  },
  "it-support": {
    name: "IT-Hilfe",
    title: "IT-Support und Computerhilfe in Luxemburg",
    short:
      "Handfeste IT-Hilfe für kleine Betriebe: Geräte, E-Mail, Netzwerke, Drucker, Kassen und das tägliche Chaos.",
    meta: "IT-Support für kleine Betriebe in Luxemburg: Geräte, E-Mail, WLAN, Drucker, Kassen, Backups und Softwareprobleme, handfest gelöst und in klarer Sprache erklärt.",
    intro: [
      "Kleine Betriebe brauchen selten eine große IT-Abteilung. Sie brauchen eine Person, die abnimmt, das Problem versteht und es löst. Genau das ist diese Leistung.",
      "Ich betreue Läden, Salons, Restaurants und Büros mit der Technik, die sie wirklich benutzen: Macs und PCs, E-Mail und Domains, WLAN und Netzwerke, Drucker und Scanner, Kassen und Zahlungsterminals, Tablets und die zwanzig kleinen Werkzeuge, die einen Betrieb zusammenhalten.",
      "Weil ich beruflich Software baue und Server betreibe, behebe ich Ursachen statt Symptome, und ich erkläre in klarer Sprache, was passiert ist, nicht in Fachjargon.",
    ],
    deliverables: [
      "Fehlersuche vor Ort und aus der Ferne für Mac, Windows, iOS und Android",
      "E-Mail, Domains und DNS endlich richtig eingerichtet",
      "WLAN, Netzwerk und Drucker so eingerichtet, dass es läuft",
      "Kassen, Zahlungsterminals und Scanner-Hardware",
      "Backups, die sich wirklich zurückspielen lassen",
      "Beratung in klarer Sprache, was sich zu kaufen lohnt und was nicht",
    ],
    proof:
      "Laufender IT-Support für Einzelhandel, Salons und Büros in ganz Luxemburg, von der Kasse bis zum Netzwerk.",
    faq: [
      {
        q: "Kommen Sie vor Ort?",
        a: "Ja, in ganz Luxemburg. Viele Probleme lassen sich auch aus der Ferne innerhalb einer Stunde lösen, und aus der Ferne ist immer günstiger, deshalb fange ich dort an, wenn es sinnvoll ist.",
      },
      {
        q: "Können Sie unser fester IT-Ansprechpartner sein?",
        a: "Ja. Mehrere Betriebe halten mich mit einer kleinen Monatspauschale: Ich bin ihr erster Anruf bei allem, was IT ist, und ihre Systeme werden gewartet, bevor sie ausfallen.",
      },
      {
        q: "Wir sind überhaupt nicht technisch. Ist das ein Problem?",
        a: "Das ist der Normalfall. Sie beschreiben das Problem mit Ihren Worten, ich stelle die richtigen Fragen und übersetze alles zurück in klare Sprache.",
      },
    ],
    keywords: [
      "IT Support Luxemburg",
      "Computerhilfe Luxemburg",
      "IT Hilfe kleine Firma Luxemburg",
      "Computer Reparatur Luxemburg",
      "Netzwerk einrichten Luxemburg",
      "IT Betreuung Luxemburg",
    ],
  },
  cybersecurity: {
    name: "Cybersicherheit",
    title: "Cybersicherheit und Systemhärtung",
    short:
      "Sicherheitsaudits, Härtung und Überwachung für Webplattformen und die Infrastruktur kleiner Betriebe.",
    meta: "Cybersicherheit in Luxemburg: Sicherheitsaudits, Serverhärtung, Angriffserkennung mit SIEM-Überwachung, sichere Anmeldung und DSGVO-gerechter Umgang mit sensiblen Daten.",
    intro: [
      "Ich sichere die Art von Systemen ab, die ich auch baue: Webplattformen, APIs, Server und die Betriebe dahinter. Das gibt Audits einen praktischen Vorteil, weil ich weiß, wo Entwickler abkürzen und wo Angreifer zuerst hinsehen.",
      "Die Arbeit reicht vom einmaligen Sicherheitsaudit einer bestehenden Plattform (Anmeldewege, Zugriffskontrolle, Injektionsflächen, Datei-Uploads, Risiken aus Abhängigkeiten) bis zum Härten von Servern, dem Aufbau einer Angriffserkennung mit einem Wazuh-SIEM, dem Abriegeln von Cloudflare und DNS und dem Bau einer Anmeldung, die hält: 2FA, Ratenbegrenzung, Sitzungsverwaltung, Rollenprüfungen.",
      "Ich betreibe das produktiv auf meinen eigenen Plattformen, darunter Systeme mit sensiblen Gesundheitsdaten, und dieselben Standards gehen in die Kundenarbeit.",
    ],
    deliverables: [
      "Sicherheitsaudits von Webplattformen und APIs mit priorisiertem Befundbericht",
      "Härtung von Servern und Infrastruktur (Linux, Docker, Datenbanken)",
      "Aufbau und Betrieb von SIEM / Angriffserkennung (Wazuh)",
      "Anmeldung richtig gemacht: 2FA, OAuth, Ratenbegrenzung, Rollenprüfungen",
      "Cloudflare-, DNS- und E-Mail-Sicherheit (SPF, DKIM, DMARC)",
      "Vorfallsbehandlung, wenn schon etwas passiert ist",
    ],
    proof:
      "Produktiv im Einsatz: Wazuh-SIEM auf Gesundheitsdaten-Plattformen, penetrationsgetestete Marktplatz-Anmeldung, gehärtete Mehrserver-Umgebungen.",
    faq: [
      {
        q: "Wie sieht ein Sicherheitsaudit aus?",
        a: "Ich sehe mir Ihre Plattform so an, wie ein Angreifer es täte: Anmeldung, Berechtigungen, Injektionspunkte, Dateiverarbeitung, Geheimnisse, Abhängigkeiten und Infrastruktur. Sie bekommen einen priorisierten Bericht mit konkreten Korrekturen, und ich kann die Korrekturen auch umsetzen.",
      },
      {
        q: "Wir hatten einen Vorfall. Können Sie jetzt helfen?",
        a: "Melden Sie sich sofort. Ich helfe, das Problem einzugrenzen, zu bewerten, worauf zugegriffen wurde, die Lücke zu schließen und Sie in einen vertrauenswürdigen Zustand zurückzubringen, und härte danach ab, damit es nicht wieder passiert.",
      },
      {
        q: "Ist das nur für große Firmen?",
        a: "Nein. Kleine Betriebe werden genau deshalb angegriffen, weil niemand ihre Systeme gehärtet hat. Ein Audit von einem Tag plus Korrekturen entfernt schon die wahrscheinlichsten Einstiegswege.",
      },
    ],
    keywords: [
      "Cybersicherheit Luxemburg",
      "Sicherheitsaudit Webanwendung",
      "Penetrationstest Luxemburg",
      "Serverhärtung",
      "SIEM Überwachung",
      "DSGVO Sicherheit",
    ],
    photoAlt: "Noe Nei in einem dunklen Kontrollraum",
  },
  hosting: {
    name: "Hosting & IT-Betreuung",
    title: "Webhosting und verwaltete Infrastruktur",
    short:
      "Hosting in der EU, Auslieferungen, Überwachung, Backups und Updates. Ihre Systeme laufen, ich halte sie am Laufen.",
    meta: "Verwaltetes Hosting und IT-Betreuung: Server in der EU, Docker-Auslieferungen, Überwachung, Backups, Updates und Releases ohne Ausfallzeit für Webseiten, Shops und Plattformen.",
    intro: [
      "Jedes Produkt, das ich betreibe, läuft auf Infrastruktur, die ich selbst verwalte: Server in der EU, Docker, PostgreSQL, Redis, private Netze, Überwachungsagenten und automatische Backups. Dieselbe Einrichtung biete ich als Dienstleistung an.",
      "Verwaltetes Hosting heißt hier die ganze Betriebsseite: Bereitstellung, TLS, DNS und Cloudflare, Auslieferungen ohne Ausfallzeit, Systemupdates, Protokoll- und Verfügbarkeitsüberwachung, Backup-Strategien, die durch echtes Zurückspielen getestet sind, und Alarme, die einen Menschen erreichen, bevor Kunden etwas merken.",
      "Das passt natürlich zur Entwicklung: Ich baue Ihre Plattform und halte sie danach schnell, aktuell und online. Ich übernehme aber auch bestehende Systeme, für die es gerade keinen verantwortlichen Betreiber gibt.",
    ],
    deliverables: [
      "Hosting in der EU (Hetzner und vergleichbar) mit privatem Netzwerk",
      "Docker-basierte Auslieferungen ohne Ausfallzeit",
      "Überwachung, Alarmierung und Verfügbarkeitsmessung über alle Dienste",
      "Automatische, durch Zurückspielen getestete Backups",
      "System- und Abhängigkeitsupdates nach Plan",
      "Verwaltung von DNS, TLS, Cloudflare und E-Mail-Zustellbarkeit",
    ],
    proof:
      "Täglich im Betrieb: eine Mehrserver-Umgebung mit Salonify, LUXPOS, BoxBee, Doctomap und Kundensystemen, mit Überwachung und Backups.",
    faq: [
      {
        q: "Wo steht das Hosting?",
        a: "In der EU, vor allem bei Hetzner in Deutschland und Finnland. Die Daten bleiben unter EU-Recht, was für die DSGVO zählt und für Kunden, die nicht dem US-CloudAct ausgesetzt sein wollen.",
      },
      {
        q: "Können Sie unseren bestehenden Server übernehmen?",
        a: "Ja. Ich prüfe, was läuft, dokumentiere es, bringe Backups und Überwachung auf Stand und betreue es danach laufend. Umzüge auf saubere Aufbauten laufen Schritt für Schritt, ohne Ausfallzeit.",
      },
      {
        q: "Was kostet verwaltetes Hosting?",
        a: "Eine kleine Seite beginnt bei einem geringen Monatsbetrag, Server inklusive; Plattformen mit Datenbanken, Warteschlangen und mehreren Diensten werden nach dem bepreist, was sie wirklich brauchen. Sie bekommen eine planbare Monatszahl.",
      },
    ],
    keywords: [
      "Webhosting Luxemburg",
      "EU Hosting DSGVO",
      "Serververwaltung Luxemburg",
      "Docker Auslieferung",
      "IT Betreuung Luxemburg",
      "Webseite Wartung Luxemburg",
    ],
    photoAlt: "Noe Nei vertieft in ein Serverregal",
  },
  products: {
    name: "Eigene Produkte",
    title: "Produkte, die ich baue und betreibe",
    short:
      "Ich baue nicht nur für Kunden. Ich bringe eigene Produkte heraus und betreibe sie, von der Kasse bis zur KI-Mail.",
    meta: "Noe Nei baut und betreibt eigene Softwareprodukte: Salonify, LUXPOS, BoxBee, Doctomap und DepotGest. Produkterfahrung, die in jedes Kundenprojekt einfließt.",
    intro: [
      "Die Hälfte meiner Woche geht in Produkte, die mir gehören und die ich betreibe: Salonify (Buchung und Kasse für Salons), LUXPOS (Kasse und Buchhaltung), BoxBee (KI-Mail-Client), Doctomap (Arzttermine) und DepotGest (Lagerverwaltung). Echte Produkte, echte Kunden, echte Verantwortung für die Verfügbarkeit.",
      "Das ändert, wie ich für Kunden arbeite. Ich weiß, was nach dem Start passiert: Support, Überwachung, Zahlungen, die um 2 Uhr nachts scheitern, App-Store-Prüfungen, DSGVO-Anfragen, Serverrechnungen. Also baue ich Systeme, die den Kontakt mit der Realität überleben, keine Demos, die einmal beeindrucken.",
      "Es heißt auch, dass ich über den Code hinaus Partner sein kann: Preisgestaltung, Einarbeitung, Kundenbindung, Zahlungsabläufe und Betrieb sind Dinge, die ich täglich für meine eigenen Firmen mache.",
    ],
    deliverables: [
      "Produktstrategie, die auf dem Betrieb echter Produkte beruht",
      "MVPs, die wirklich auslieferbar sind, nicht zum Wegwerfen",
      "Zahlungs- und Abo-Architektur (Stripe, In-App-Kauf)",
      "Auswertung, Überwachung und Betriebswerkzeuge ab dem ersten Tag",
      "Ehrlicher Rat, was man bauen, kaufen oder weglassen sollte",
    ],
    proof:
      "Heute live: Salonify, LUXPOS, BoxBee, Doctomap, DepotGest und die Gruppenplattform von TTA Technologies.",
    faq: [
      {
        q: "Warum ist das für mein Projekt wichtig?",
        a: "Weil Sie Entscheidungen von jemandem bekommen, der mit seinen eigenen Entscheidungen leben muss. Architektur, Zahlungen und Betrieb wähle ich so, wie ich sie für Produkte wähle, die ich selbst betreibe, wo eine schlechte Wahl mich direkt kostet.",
      },
      {
        q: "Nehmen Sie Beteiligungen oder steigen Sie in Ideen ein?",
        a: "Gelegentlich, wenn Idee und Menschen passen. Der Standardfall ist eine normale Kundenbeziehung, aber über gemeinsame Vorhaben rede ich gerne.",
      },
      {
        q: "Kann ich die Produkte live ansehen?",
        a: "Ja: salonify.eu, luxpos.lu, boxbee.co, doctomap.lu und depotgest.com sind alle online und offen. Was Sie dort sehen, ist das, was ich ausliefere.",
      },
    ],
    keywords: [
      "Produktstudio Luxemburg",
      "SaaS Gründer Entwickler",
      "Startup MVP Entwicklung Luxemburg",
      "Softwareprodukte Luxemburg",
    ],
    photoAlt: "Noe Nei beim Durchsehen von Stapeln gedruckter Arbeiten",
  },
};

export const serviceTranslations: Record<Locale, Record<string, ServiceTranslation>> = {
  en: {},
  fr,
  de,
};

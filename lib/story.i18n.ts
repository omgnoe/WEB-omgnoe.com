/**
 * French and German versions of the /about long story and the CV.
 *
 * Chapters are keyed by their stable `id`, never by position. The small
 * index-aligned arrays (a chapter's shots and links, the CV role bullets) are
 * length-checked at merge time: if a translation drifts out of sync with the
 * English source, that one array falls back to English instead of rendering
 * the wrong caption under the wrong photo.
 *
 * Deliberately NOT translated: real article headlines in the press trail and
 * real award titles. Those are quotations; only the surrounding note moves.
 */

import type { Locale } from "@/lib/i18n";

export type ChapterTranslation = {
  period?: string;
  title?: string;
  body?: string[];
  pull?: string;
  pullCite?: string;
  /** Index-aligned with the English `shots`. */
  shots?: { alt: string; caption: string }[];
  ranking?: { label: string; note: string };
  /** Index-aligned with the English `links`, labels only. */
  links?: string[];
};

export type RoleTranslation = { period?: string; title?: string; org?: string; bullets?: string[] };

export type StoryTranslation = {
  numberWords: string[];
  chapters: Record<string, ChapterTranslation>;
  lessons: string[];
  /** Index-aligned with `roles`. */
  roles: RoleTranslation[];
  /** Index-aligned with `skillGroups`, labels only. */
  skillLabels: string[];
  /** Keyed by the language's own name, which never changes. */
  languageLevels: Record<string, string>;
  /** Index-aligned with `education`. */
  education: { title?: string; period?: string }[];
  /** Index-aligned with `credentials`: title and org blurb. */
  credentials: { title?: string; org?: string }[];
  /** Index-aligned with `pressGroups`; item notes are index-aligned too. */
  press: { label: string; blurb: string; notes: string[] }[];
  chrome: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    h1a: string;
    h1b: string;
    lead: string;
    leadNote: string;
    jumpCv: string;
    workWithMe: string;
    stillHere: string;
    portraitAlt: string;
    archiveAlt: string;
    facts: { k: string; v: string }[];
    storyKicker: string;
    storyH2: (count: string) => string;
    lessonsKicker: string;
    lessonsH2: string;
    offClockKicker: string;
    offClock: string;
    cvKicker: string;
    cvH2: string;
    experience: string;
    stackTools: string;
    languages: string;
    education: string;
    credentials: string;
    open: string;
    ctaKicker: string;
    ctaH2: string;
    ctaLead: string;
  };
};

const fr: StoryTranslation = {
  numberWords: [
    "Zéro", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit",
    "Neuf", "Dix", "Onze", "Douze", "Treize", "Quatorze", "Quinze",
    "Seize", "Dix-sept", "Dix-huit", "Dix-neuf", "Vingt",
  ],
  chapters: {
    "fantasy-pictures": {
      period: "2016",
      title: "Fantasy Pictures",
      body: [
        "J'avais quatorze ans la première fois qu'on m'a payé pour mon travail. Cela s'appelait Fantasy Pictures et ce n'était pas une société, c'était un gamin avec un appareil photo, une table de montage et considérablement plus d'ambition que de matériel.",
        "Cela m'a appris la seule chose qui n'a jamais cessé d'être vraie : personne ne vous offre un premier client. Vous allez le chercher, ou il n'y a pas de travail.",
      ],
    },
    ourluxembourg: {
      period: "Juin 2018",
      title: "Seize ans, et le public a choisi la mienne",
      body: [
        "Dans le cadre de la stratégie de marque du pays, le gouvernement a lancé #OurLuxembourg : publiez votre photo du Luxembourg sur Instagram. Plus de 1.300 personnes l'ont fait. J'ai publié une image de passants descendant l'avenue de la Liberté, un jour où la rue était fermée à la circulation.",
        "Le prix du public allait aux photos ayant reçu le plus de cœurs sur le compte officiel du Luxembourg. La mienne est arrivée première. L'annonce du gouvernement du 13 juin 2018 le mentionne en une ligne : premier prix du public, Noe Nei. J'avais seize ans.",
        "Je ne mets pas cela ici parce qu'un prix compte. Je le mets ici parce que c'était le premier signal venu de l'extérieur de ma propre tête que l'appareil photo n'était pas qu'un loisir. Deux ans plus tard j'enregistrais la société, et sept ans plus tard des rédactions nationales publiaient encore mes images avec mon nom dessous.",
      ],
      links: ["Les photos primées sur Delano", "L'annonce du gouvernement"],
    },
    fapic: {
      period: "2020",
      title: "Fapic, à dix-huit ans",
      body: [
        "Dès que la loi me l'a permis, j'ai enregistré ma propre société. Fapic : production musicale, vidéo, photographie, création web. De grands noms y sont passés.",
        "J'étais producteur et musicien bien avant d'être développeur. En mai 2020, le Lëtzebuerger Journal a publié une interview complète de moi sur la musique, sous le titre Träume leben : vivre ses rêves. Ce que je disais alors, c'était que vos auditeurs ne devraient pas perdre leurs objectifs de vue. Cela se lit différemment maintenant que je sais ce que les quatre années suivantes allaient faire aux miens.",
        "Pendant un temps, la musique payait.",
      ],
      links: ["Lëtzebuerger Journal, 7 mai 2020"],
      shots: [
        { alt: "Le logo Fapic", caption: "Fapic, 2020" },
        { alt: "Tournage de nuit sur place en t-shirt Fapic Group", caption: "En tournage, de nuit" },
      ],
    },
    pivot: {
      period: "Le virage",
      title: "Pourquoi j'ai quitté la scène musicale",
      body: [
        "Le côté musique avait une part pour laquelle je n'avais pas signé. Tout le monde ne règle pas un désaccord sur un prix par e-mail. J'ai été menacé plus d'une fois, à un moment sous la menace d'un couteau.",
        "J'ai donc arrêté d'accepter ce travail et j'ai réorienté Fapic vers les petites et moyennes entreprises : marques, commerces, sites internet, des clients qui règlent une facture par virement. C'était la première fois que je choisissais délibérément la version ennuyeuse et durable d'une activité plutôt que la version excitante. Ce ne serait pas la dernière.",
      ],
    },
    bofrost: {
      period: "2023",
      title: "J'étais mauvais vendeur, alors je suis allé vendre",
      body: [
        "Mes compétences commerciales étaient franchement mauvaises et je le savais. J'ai donc pris un poste de vente sur le terrain chez bofrost en me fixant une condition pour partir : je ne démissionnerais pas avant d'être le meilleur vendeur de la succursale.",
        "J'ai vendu du vin à des viticulteurs. Je suis devenu le meilleur vendeur. Puis je suis parti, j'ai ramené ces compétences dans ma propre société, et j'ai signé un contrat de 30.000 euros avec une entreprise active à l'international. Le plus gros contrat que j'avais jamais signé.",
      ],
      pull: "Corrigez votre point faible exprès. Le mien était la vente, alors je suis allé vendre.",
    },
    wolt: {
      period: "Janv. à mai 2024",
      title: "J'ai photographié 200 restaurants, puis j'ai demandé un emploi",
      body: [
        "Wolt a engagé Fapic pour photographier ses restaurants. J'en ai photographié environ deux cents. Quelque part dans cette mission, j'ai arrêté d'être un prestataire et j'ai commencé à être un élève. Je voulais savoir comment une entreprise comme celle-là fonctionne vraiment : la relation client, l'expérience client, l'attitude qu'ils gardent en interne envers leurs propres équipes. Tout leur écosystème me fascinait. J'ai donc postulé, et je les ai rejoints au support.",
        "J'y suis entré pour me réorienter et j'en suis sorti avec plus que ce que j'étais venu chercher. J'ai appris le marché de l'intérieur, et de l'intérieur je pouvais voir le manque. Tout le monde dans ce pays connaissait la livraison de restaurant. Personne ne faisait les courses et les produits du quotidien, immédiatement, dans tout le Luxembourg.",
        "Ce manque est devenu Umarket. Je l'ai lancé en mars 2024, alors que j'étais encore sur leur liste de paie.",
        "En mai, ils se sont séparés de moi, une fois qu'ils ont compris ce que je construisais. Je comprends la décision, et je reste reconnaissant de ce que ces mois m'ont appris. Cette entreprise me motive encore aujourd'hui.",
        "Aujourd'hui, chaque supermarché ici livre, souvent via Wolt. C'est complètement normal maintenant. Ce ne l'était pas quand nous avons commencé.",
      ],
    },
    umarket: {
      period: "Mars 2024",
      title: "Tout ce que j'avais, sur un seul pari",
      body: [
        "J'ai mis les 30.000 euros et chaque autre euro que je possédais dans Umarket, un service de livraison 24h/24 et 7j/7 pour le Luxembourg : les courses et les produits du quotidien, pas la restauration. Le stock, la publicité, l'aménagement, tout.",
        "Pendant six mois j'ai vécu au bureau. Je dormais sur le canapé et mon dos s'en souvient encore. Je mangeais des nouilles instantanées d'Action pour que le loyer soit payé, parce que tout ce qui n'était pas de la survie partait dans la société. Une nuit, pendant que j'étais en tournage, le bureau a été cambriolé. Rien n'a été pris. Cela m'a quand même coûté une semaine de sommeil.",
        "J'ai cru en cette société comme on ne parvient à croire en quelque chose qu'une seule fois.",
        "Et cela a marché. Au deuxième trimestre 2024, son premier trimestre complet, Umarket était la cinquième application de livraison la plus téléchargée au Luxembourg, sur la même liste que Wolt et Uber Eats. Une application autofinancée, depuis un bureau dans lequel je dormais, à côté de sociétés portant quelques centaines de millions de financement.",
      ],
      ranking: {
        label: "Top 5 des applications de livraison, Luxembourg",
        note: "2e trimestre 2024, téléchargements, iOS et Android confondus",
      },
      shots: [
        { alt: "Visuel de campagne Umarket : livraison 24h/24 pour tout le Luxembourg", caption: "24h/24 pour tout le pays" },
        { alt: "L'application Umarket tournant sur Android", caption: "L'application, sur le store" },
        { alt: "Visuel de lancement Umarket pour l'App Store et Google Play", caption: "Visuel de lancement" },
        { alt: "L'équipe de livraison Umarket de nuit", caption: "L'équipe de nuit" },
      ],
    },
    october: {
      period: "Octobre 2024",
      title: "Ce n'est pas le marché qui a eu raison",
      body: [
        "C'est une personne. Mon associé m'a fait payer la rénovation du bâtiment, puis a fait passer le bâtiment à sa propre société et s'est mis à reconstruire ce que j'avais construit.",
        "Pas de noms, ce chapitre est clos. Ce que je dirai, c'est ceci : il s'est retrouvé avec un bâtiment rénové que j'avais financé et la marchandise que j'avais payée, et il n'en est même pas approché. Sa société a déposé le bilan.",
      ],
    },
    zero: {
      period: "Nov. à déc. 2024",
      title: "Zéro",
      body: [
        "Plus de société. Plus de toit. Plus d'argent. En quelques semaines j'ai perdu la chose que j'avais construite et la chose que j'aimais, et j'avais vingt-deux ans.",
        "Il n'y a pas de manière entrepreneuriale propre de décrire ces deux mois, alors je ne vais pas essayer. Ce fut la pire période de ma vie et je ne l'ai pas bien gérée.",
        "Je m'en suis sorti. C'est la seule affirmation que je fais ici.",
      ],
    },
    "paid-debt": {
      period: "Après",
      title: "J'ai payé ce que je devais quand même",
      body: [
        "J'étais insolvable et tous les intéressés le savaient. J'ai quand même appelé chaque fournisseur à qui je devais de l'argent et négocié un arrangement avec chacun, un par un, alors que rien ne m'y obligeait en pratique.",
        "Au cours des mois qui ont suivi, j'ai remboursé environ 30.000 euros de dettes de la société sur mon propre salaire.",
      ],
      pull: "Payez ce que vous devez, même quand vous n'y êtes plus obligé. C'est la seule chose qui vous appartienne encore quand tout le reste est parti.",
    },
    snj: {
      period: "Janv. à mars 2025",
      title: "La communication pour ceux à côté de qui je venais de me tenir",
      body: [
        "Je me suis inscrit à un Fräiwëllegendéngscht, le service volontaire du SNJ, le service national de la jeunesse luxembourgeois, et j'ai été affecté à la Stëmm vun der Strooss de janvier à mars 2025. C'est l'organisation derrière les centres de jour, les cantines et les magasins de seconde main pour les personnes en détresse sociale dans ce pays.",
        "J'y suis entré à temps plein comme Assistant in Communication, en charge de la communication et de l'informatique : j'ai produit des séries vidéo pour eux et assuré le support technique. Le travail que je savais déjà faire, remis à une organisation qui s'occupe de gens qui étaient à un pas de là où je venais d'être.",
        "Cela m'a donné une structure pour me lever le matin et une indemnité qui partait directement dans le remboursement de la dette de la société. Au bout de trois mois, je suis parti plus tôt, parce qu'un emploi est enfin arrivé. Plus tard dans l'année, j'ai écrit sur ces mois dans le magazine Forum, aux côtés de deux autres volontaires.",
      ],
      pull: "C'étaient souvent les petits gestes qui étaient inestimables pour ces personnes. Une conversation.",
      pullCite: "Écrit pour Forum, numéro 443, mai 2025",
      links: ["Mon texte dans Forum 443"],
    },
    gap: {
      period: "L'entre-deux",
      title: "Trop qualifié, pas assez qualifié",
      body: [
        "En parallèle, je postulais partout. Pour les postes que je voulais vraiment, je n'étais pas assez qualifié sur le papier : pas de diplôme, juste une société que j'avais dirigée. Pour un poste en restauration rapide, j'étais surqualifié, et ils me l'ont dit. J'étais précisément entre les deux, et personne n'embauchait l'entre-deux.",
        "C'est la partie dont personne ne vous prévient. Cinq ans à diriger une entreprise ne valent rien du tout quand un formulaire demande un diplôme, et beaucoup trop quand il demande de faire un service.",
        "Puis une journaliste a écrit là-dessus dans le Luxembourg Times. C'est cet article qui a tout ouvert : des entreprises m'ont contacté, et c'est comme cela que j'ai trouvé le poste que j'occupe aujourd'hui.",
      ],
      links: ["L'article dans le Luxembourg Times"],
    },
    insolvency: {
      period: "La fin de Fapic",
      title: "La faillite, finalement",
      body: [
        "Le volet administratif s'est quand même mal terminé. Un créancier m'a mis un huissier au téléphone avec une assignation en faillite : cinq mille euros sous 72 heures. Je n'avais pas cinq mille euros qui dormaient quelque part. J'ai proposé mille par mois. Cela a été refusé, et le temps que ce soit soudainement accepté, peu avant l'audience, il ne me restait plus rien à mettre dans la procédure.",
        "J'avais passé un an à essayer d'être correct avec tout le monde. La société est tombée en faillite. Je ne le cache pas et je ne le reproche à personne : à ce moment-là, c'était ma décision d'arrêter de me battre.",
      ],
    },
    rebuild: {
      period: "2025 à aujourd'hui",
      title: "Ce que j'en ai construit",
      body: [
        "J'ai profité du calme pour apprendre. Je me suis plongé dans la programmation et j'ai commencé à construire les logiciels dont j'avais eu besoin comme dirigeant et que je n'avais jamais pu me permettre d'acheter.",
        "C'est de là que vient LUXPOS, un système de caisse, de fidélité et de comptabilité pour le commerce luxembourgeois. Et Salonify, une plateforme de réservation pour les salons. Et BoxBee. Et tous les autres.",
        "Depuis mars 2025, je suis Head Developer chez DSP Invest, où je dirige Doctomap, un SaaS de gestion pour les médecins intégré à l'infrastructure e-santé nationale du Luxembourg. J'exploite mes propres produits en parallèle, avec de vrais clients payants et de vrais tickets de support.",
        "Je ne suis pas là parce que ça a bien marché. Je suis là parce que ça n'a pas marché, et que j'ai reconstruit quand même.",
      ],
    },
  },
  lessons: [
    "Les contrats valent mieux que la confiance, à chaque fois, et surtout avec les gens que vous appréciez.",
    "Une activité qui dépend du fait qu'un associé reste correct n'est pas une activité, c'est un espoir.",
    "La trésorerie est de l'oxygène. Un bénéfice sur le papier n'a jamais payé un fournisseur.",
    "Corrigez délibérément votre point faible, dans un poste où il est mesuré.",
    "Payez ce que vous devez, même quand personne ne peut vous y forcer.",
    "Construisez la version durable. La version excitante est généralement la sortie de quelqu'un d'autre.",
  ],
  roles: [
    {
      period: "Mars 2025 à aujourd'hui",
      title: "Head Developer",
      org: "DSP Invest Sarl · Luxembourg",
      bullets: [
        "Développeur principal sur Doctomap, un SaaS multi-locataire de gestion pour médecins avec intégration PID, construit en partenariat avec eSanté et la CNS, l'infrastructure e-santé nationale du Luxembourg.",
        "Sites internet, e-commerce, systèmes de réservation et outils internes, plus des automatisations pour la logistique et la comptabilité.",
        "Responsabilité complète de bout en bout : frontend, backend, serveur, mise en production, référencement, indexation et sécurité des systèmes.",
      ],
    },
    {
      period: "Janv. à mars 25",
      title: "Assistant in Communication",
      org: "Fräiwëllegendéngscht, SNJ · affecté à la Stëmm vun der Strooss · Luxembourg",
      bullets: [
        "Poste à temps plein en communication et informatique au sein de l'ONG luxembourgeoise pour les personnes en détresse sociale : production de séries vidéo et support technique.",
        "A écrit sur cette affectation pour le magazine Forum, numéro 443, mai 2025.",
      ],
    },
    {
      period: "Janv. à mai 24",
      title: "Support Associate",
      org: "Wolt · Luxembourg",
      bullets: [
        "Expérience client : fidélisation, résolution de commandes complexes et coordination à trois entre clients, livreurs et restaurants.",
        "A rejoint l'entreprise après avoir photographié environ 200 de ses restaurants dans le cadre d'un contrat Fapic, spécifiquement pour apprendre comment une plateforme de livraison gère sa relation client et sa culture interne.",
        "Ce que j'y ai appris du marché a directement mené à la création d'Umarket.",
      ],
    },
    {
      period: "2020 à 2024",
      title: "Fondateur & dirigeant",
      org: "Fapic · Agence média · Luxembourg",
      bullets: [
        "A fondé et dirigé seul une agence média pendant près de cinq ans à partir de dix-huit ans, en livrant des prestations photo, vidéo, web et de marque à des clients PME.",
        "A lancé et exploité Umarket, livraison immédiate 24h/24 de courses et de produits du quotidien partout au Luxembourg. Cinquième application de livraison la plus téléchargée du pays au deuxième trimestre 2024, aux côtés de Wolt et Uber Eats.",
        "Connaissance de terrain du droit des affaires luxembourgeois et européen, des contrats, de la fiscalité et de la comptabilité, en gérant la vente, la livraison, les ressources humaines et les finances sans équipe.",
      ],
    },
    {
      period: "Mai 23 à nov. 24",
      title: "Représentant commercial",
      org: "bofrost* · Kenn, Rhénanie-Palatinat (DE)",
      bullets: [
        "Poste de vente sur le terrain pris délibérément pour affûter la prospection, le traitement des objections et la conclusion au profit de ma propre société. Parti en tant que meilleur vendeur de la succursale.",
      ],
    },
  ],
  skillLabels: [
    "Langages",
    "Frontend",
    "Backend",
    "Infrastructure",
    "Auth & paiement",
    "Monorepo",
    "IA, au quotidien",
    "Gestion",
    "Design",
  ],
  languageLevels: {
    "Lëtzebuergesch": "Langue maternelle",
    Deutsch: "Langue maternelle",
    English: "Avancé",
    "Français": "Intermédiaire",
  },
  education: [
    { title: "DT Image, film, vidéo & photographie", period: "17 à 19 ans" },
    { title: "9e TE", period: "16 à 17 ans" },
    { title: "7e & 8e TE", period: "14 à 16 ans" },
  ],
  credentials: [
    {},
    {},
    {
      title: "1er prix du public, #OurLuxembourg",
      org: "Ministère de l'économie et Ministère des affaires étrangères, juin 2018. Environ 1.300 participations.",
    },
  ],
  press: [
    {
      label: "Mes photos dans la presse",
      blurb:
        "Des rédactions publient mes images sous mon propre crédit. C'est la partie de mon travail qui est publiée depuis le plus longtemps.",
      notes: [
        "Mes photos du déraillement, créditées © Noe Nei.",
        "Édition anglaise du même reportage, © Noe Nei.",
        "Photographie de concert, créditée Foto: Noe Nei.",
      ],
    },
    {
      label: "Écrit sur moi, et écrit par moi",
      blurb: "Des interviews, des reportages et un texte que j'ai écrit moi-même.",
      notes: [
        "Numéro 443. J'en suis coauteur : mon propre récit de l'affectation à la Stëmm vun der Strooss.",
        "L'article qui a mis fin à la recherche d'emploi.",
        "Portrait de membre, listé comme Noé Nei, Fapic Group.",
        "Interview de Liz Mikos sur la musique. Volume 73, numéro 107, page 7.",
        "L'annonce officielle : premier prix du public, Noe Nei. Également reprise par les ministères de l'économie et des affaires étrangères.",
        "Les photos primées, dont le prix du public.",
      ],
    },
  ],
  chrome: {
    metaTitle: "À propos & CV : parti de zéro, deux fois",
    metaDescription:
      "La version longue. Noe Nei a commencé à travailler à quatorze ans, a fondé son agence à dix-huit, a tout perdu avec une startup de livraison, a remboursé la dette sur son propre salaire et s'est reconstruit comme développeur au Luxembourg. CV complet, expérience, technologies et formation.",
    kicker: "À propos · la version longue",
    h1a: "J'ai été à zéro.",
    h1b: "Deux fois, ce n'est le plan de personne.",
    lead:
      "La plupart des portfolios vous montrent le meilleur. Voici l'ensemble : première facture à quatorze ans, ma propre société à dix-huit, une startup de livraison qui a pris tout ce que j'avais, deux mois avec rien, et la reconstruction qui a fait de moi un développeur.",
    leadNote:
      "C'est une lecture longue, et les éléments vérifiables sont liés à leurs sources. Si vous ne voulez que les faits, le CV commence plus bas.",
    jumpCv: "Aller au CV",
    workWithMe: "Travailler avec moi",
    stillHere: "Toujours là",
    portraitAlt: "Noe Nei, fondateur et développeur au Luxembourg",
    archiveAlt: "Noe Nei parcourant des travaux imprimés",
    facts: [
      { k: "Basé à", v: "Luxembourg" },
      { k: "Né le", v: "9 mars 2002" },
      { k: "Aujourd'hui", v: "Head Developer, DSP Invest" },
      { k: "Également", v: "Fondateur de LUXPOS, Salonify, BoxBee" },
    ],
    storyKicker: "Le parcours",
    storyH2: (count) => `${count} chapitres, dans l'ordre.`,
    lessonsKicker: "Ce que ça a coûté, ce que ça a appris",
    lessonsH2: "Six choses que j'ai payées comptant.",
    offClockKicker: "En dehors du travail",
    offClock:
      "Je fais toujours de la musique. Je ne la vends simplement plus. J'ai passé des années à transformer tout ce que j'aimais en facture, et celle-là reste un loisir.",
    cvKicker: "Curriculum vitae",
    cvH2: "La version courte, pour les gens pressés.",
    experience: "Expérience",
    stackTools: "Technologies & outils",
    languages: "Langues",
    education: "Formation",
    credentials: "Certifications & distinctions",
    open: "Ouvrir",
    ctaKicker: "Toujours en train de lire",
    ctaH2: "Alors vous savez déjà comment je traiterai votre projet.",
    ctaLead:
      "Je construis des choses qui doivent survivre au contact du réel, parce que les miennes n'ont pas eu le choix.",
  },
};

const de: StoryTranslation = {
  numberWords: [
    "Null", "Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht",
    "Neun", "Zehn", "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn",
    "Sechzehn", "Siebzehn", "Achtzehn", "Neunzehn", "Zwanzig",
  ],
  chapters: {
    "fantasy-pictures": {
      period: "2016",
      title: "Fantasy Pictures",
      body: [
        "Ich war vierzehn, als ich zum ersten Mal für Arbeit bezahlt wurde. Es hieß Fantasy Pictures und es war keine Firma, es war ein Kind mit einer Kamera, einer Schnittspur und deutlich mehr Ehrgeiz als Ausrüstung.",
        "Es hat mir das eine beigebracht, was nie aufgehört hat zu stimmen: Niemand schenkt dir einen ersten Kunden. Du gehst los und findest ihn, oder es gibt keine Arbeit.",
      ],
    },
    ourluxembourg: {
      period: "Juni 2018",
      title: "Sechzehn, und das Publikum nahm mein Bild",
      body: [
        "Im Rahmen der Landesmarke startete die Regierung #OurLuxembourg: Veröffentlicht euer Bild von Luxemburg auf Instagram. Mehr als 1.300 Menschen machten mit. Ich stellte ein Bild von Passanten auf der Avenue de la Liberté online, an einem Tag, an dem die Straße für den Verkehr gesperrt war.",
        "Der Publikumspreis ging an die Fotos mit den meisten Herzen auf dem offiziellen Luxemburg-Konto. Meines kam auf Platz eins. Die Mitteilung der Regierung vom 13. Juni 2018 führt es in einer Zeile: premier prix du public, Noe Nei. Ich war sechzehn.",
        "Ich schreibe das nicht hierhin, weil ein Preis wichtig wäre. Ich schreibe es hierhin, weil es das erste Signal von außerhalb meines eigenen Kopfes war, dass die Kamera nicht nur ein Hobby ist. Zwei Jahre später meldete ich die Firma an, und sieben Jahre später liefen bei nationalen Redaktionen noch immer meine Bilder mit meinem Namen darunter.",
      ],
      links: ["Die Siegerbilder auf Delano", "Die Mitteilung der Regierung"],
    },
    fapic: {
      period: "2020",
      title: "Fapic, mit achtzehn",
      body: [
        "In dem Moment, in dem ich es rechtlich durfte, meldete ich meine eigene Firma an. Fapic: Musikproduktion, Video, Fotografie, Webdesign. Einige große Namen liefen darüber.",
        "Ich war Produzent und Musiker, lange bevor ich Entwickler war. Im Mai 2020 brachte das Lëtzebuerger Journal ein ganzes Interview mit mir über die Musik, unter der Überschrift Träume leben. Mein Punkt damals war, dass die Zuhörer ihre Ziele nicht aus den Augen verlieren sollten. Das liest sich anders, jetzt wo ich weiß, was die nächsten vier Jahre mit meinen gemacht haben.",
        "Eine Zeit lang trug die Musik sich selbst.",
      ],
      links: ["Lëtzebuerger Journal, 7. Mai 2020"],
      shots: [
        { alt: "Das Fapic-Logo", caption: "Fapic, 2020" },
        { alt: "Nachtdreh vor Ort im Fapic-Group-Shirt", caption: "Vor Ort, Nachtdreh" },
      ],
    },
    pivot: {
      period: "Der Wechsel",
      title: "Warum ich die Musikszene verlassen habe",
      body: [
        "Die Musikseite hatte einen Teil, für den ich nicht unterschrieben hatte. Nicht jeder klärt eine Preisunstimmigkeit per E-Mail. Ich wurde mehr als einmal bedroht, einmal mit einem Messer.",
        "Also nahm ich diese Aufträge nicht mehr an und richtete Fapic stattdessen auf kleine und mittlere Betriebe aus: Marken, Läden, Webseiten, Kunden, die eine Rechnung per Überweisung begleichen. Es war das erste Mal, dass ich bewusst die langweilige, haltbare Version eines Geschäfts gewählt habe statt der aufregenden. Es sollte nicht das letzte Mal sein.",
      ],
    },
    bofrost: {
      period: "2023",
      title: "Ich war schlecht im Verkaufen, also ging ich verkaufen",
      body: [
        "Meine Verkaufsfähigkeiten waren ehrlich gesagt schwach und ich wusste es. Also nahm ich einen Außendienstjob bei bofrost und setzte mir eine Bedingung für das Gehen: Ich kündige nicht, bevor ich der beste Verkäufer der Niederlassung bin.",
        "Ich verkaufte Wein an Winzer. Ich wurde bester Verkäufer. Dann ging ich, nahm diese Fähigkeiten zurück in meine eigene Firma und schloss einen Vertrag über 30.000 Euro mit einem international tätigen Unternehmen ab. Der größte Auftrag, den ich je unterschrieben hatte.",
      ],
      pull: "Beheben Sie Ihre schwächste Fähigkeit absichtlich. Meine war das Verkaufen, also ging ich verkaufen.",
    },
    wolt: {
      period: "Jan. bis Mai 2024",
      title: "Ich fotografierte 200 Restaurants, dann fragte ich nach einem Job",
      body: [
        "Wolt buchte Fapic, um ihre Restaurants zu fotografieren. Ich habe etwa zweihundert davon fotografiert. Irgendwo in diesem Auftrag hörte ich auf, Lieferant zu sein, und fing an, Schüler zu sein. Ich wollte wissen, wie eine Firma wie diese wirklich funktioniert: Kundenbeziehung, Kundenerlebnis, die Haltung, die sie intern gegenüber den eigenen Leuten behalten. Ihr ganzes Ökosystem faszinierte mich. Also bewarb ich mich und stieg bei ihnen im Support ein.",
        "Ich ging hinein, um mich neu zu orientieren, und kam mit mehr heraus, als ich gesucht hatte. Ich lernte den Markt von innen, und von innen konnte ich die Lücke sehen. Jeder in diesem Land kannte Restaurantlieferung. Niemand machte Lebensmittel und Haushaltswaren, sofort, in ganz Luxemburg.",
        "Aus dieser Lücke wurde Umarket. Ich habe es im März 2024 gestartet, während ich noch auf ihrer Lohnliste stand.",
        "Im Mai trennten sie sich von mir, als klar wurde, was ich da baute. Ich verstehe die Entscheidung, und ich bin bis heute dankbar für das, was mir diese Monate beigebracht haben. Diese Firma motiviert mich noch heute.",
        "Heute liefert hier jeder Supermarkt, viel davon über Wolt. Es ist inzwischen völlig normal. Als wir anfingen, war es das nicht.",
      ],
    },
    umarket: {
      period: "März 2024",
      title: "Alles, was ich hatte, auf eine Wette",
      body: [
        "Ich steckte die 30.000 Euro und jeden anderen Euro, den ich besaß, in Umarket, einen Lieferdienst rund um die Uhr für Luxemburg: Lebensmittel und Haushaltswaren, kein Restaurantessen. Warenbestand, Werbung, Ausbau, alles.",
        "Sechs Monate lang lebte ich im Büro. Ich schlief auf der Couch und mein Rücken erinnert sich noch daran. Ich aß Instantnudeln von Action, damit die Miete bezahlt wurde, weil alles, was nicht Überleben war, in die Firma ging. In einer Nacht, während ich auf einem Dreh war, wurde ins Büro eingebrochen. Es wurde nichts mitgenommen. Es kostete mich trotzdem eine Woche Schlaf.",
        "Ich habe an diese Firma geglaubt, wie man nur einmal im Leben an etwas zu glauben schafft.",
        "Und es funktionierte. Im zweiten Quartal 2024, dem ersten vollen Quartal, war Umarket die fünfthäufigst geladene Lieferapp in Luxemburg, auf derselben Liste wie Wolt und Uber Eats. Eine selbstfinanzierte App aus einem Büro, in dem ich schlief, neben Firmen mit einigen Hundert Millionen an Finanzierung.",
      ],
      ranking: {
        label: "Top 5 der Lieferapps, Luxemburg",
        note: "2. Quartal 2024, Downloads, iOS und Android zusammen",
      },
      shots: [
        { alt: "Umarket-Kampagnenmotiv: Lieferung rund um die Uhr für ganz Luxemburg", caption: "Rund um die Uhr, fürs ganze Land" },
        { alt: "Die Umarket-Einkaufsapp auf Android", caption: "Die App, im Store" },
        { alt: "Umarket-Startmotiv für App Store und Google Play", caption: "Startmotiv" },
        { alt: "Das Umarket-Lieferteam bei Nacht", caption: "Das Nachtteam" },
      ],
    },
    october: {
      period: "Oktober 2024",
      title: "Gescheitert ist es nicht am Markt",
      body: [
        "Es scheiterte an einer Person. Mein Partner ließ mich die Renovierung des Gebäudes bezahlen, zog das Gebäude dann zu seiner eigenen Firma und machte sich daran, das nachzubauen, was ich gebaut hatte.",
        "Keine Namen, das Kapitel ist zu. Was ich sage, ist das: Er endete mit einem renovierten Gebäude, das ich finanziert hatte, und der Ware, die ich bezahlt hatte, und er kam trotzdem nicht annähernd heran. Seine Firma ging in die Insolvenz.",
      ],
    },
    zero: {
      period: "Nov. bis Dez. 2024",
      title: "Null",
      body: [
        "Keine Firma. Kein Dach über dem Kopf. Kein Geld. Innerhalb weniger Wochen verlor ich das, was ich gebaut hatte, und das, was ich liebte, und ich war zweiundzwanzig.",
        "Es gibt keine saubere unternehmerische Art, diese zwei Monate zu beschreiben, also versuche ich es nicht. Es war die schlimmste Zeit meines Lebens und ich bin schlecht damit umgegangen.",
        "Ich bin durchgekommen. Das ist die ganze Behauptung, die ich hier aufstelle.",
      ],
    },
    "paid-debt": {
      period: "Danach",
      title: "Ich habe trotzdem bezahlt, was ich schuldete",
      body: [
        "Ich war zahlungsunfähig und alle Beteiligten wussten es. Ich habe trotzdem jeden einzelnen Lieferanten angerufen, dem ich Geld schuldete, und mit jedem einzeln eine Vereinbarung ausgehandelt, obwohl mich praktisch nichts dazu verpflichtete.",
        "In den Monaten danach habe ich rund 30.000 Euro Firmenschulden aus meinem eigenen Gehalt abbezahlt.",
      ],
      pull: "Bezahlen Sie, was Sie schulden, auch wenn Sie es nicht mehr müssen. Es ist das Einzige, was Ihnen noch gehört, wenn alles andere weg ist.",
    },
    snj: {
      period: "Jan. bis März 2025",
      title: "Kommunikation für die, neben denen ich gerade noch gestanden hatte",
      body: [
        "Ich meldete mich für einen Fräiwëllegendéngscht an, den freiwilligen Dienst des SNJ, des luxemburgischen nationalen Jugenddienstes, und wurde von Januar bis März 2025 bei der Stëmm vun der Strooss eingesetzt. Das ist die Organisation hinter den Tagesstätten, den Kantinen und den Secondhandläden für Menschen in sozialer Not in diesem Land.",
        "Ich ging in Vollzeit als Assistant in Communication hinein, zuständig für Kommunikation und IT: Ich produzierte Videoreihen für sie und übernahm den technischen Support. Die Arbeit, die ich ohnehin konnte, übergeben an eine Organisation, die sich um Menschen kümmert, die einen kurzen Schritt von dort entfernt waren, wo ich gerade gewesen war.",
        "Es gab mir eine Struktur, für die es sich lohnte aufzustehen, und eine Beihilfe, die direkt in den Abbau der Firmenschulden ging. Nach drei Monaten ging ich früher, weil endlich ein Job kam. Später in dem Jahr habe ich über diese Monate in der Zeitschrift Forum geschrieben, zusammen mit zwei anderen Freiwilligen.",
      ],
      pull: "Es waren oft die kleinen Gesten, die für diese Menschen unbezahlbar waren. Ein Gespräch.",
      pullCite: "Geschrieben für Forum, Ausgabe 443, Mai 2025",
      links: ["Mein Beitrag in Forum 443"],
    },
    gap: {
      period: "Die Lücke",
      title: "Zu qualifiziert, nicht qualifiziert genug",
      body: [
        "Nebenher bewarb ich mich überall. Für die Stellen, die ich wirklich wollte, war ich auf dem Papier nicht qualifiziert genug: kein Abschluss, nur eine Firma, die ich geführt hatte. Für einen Job im Schnellrestaurant war ich überqualifiziert, und das sagten sie mir auch. Ich saß genau dazwischen, und die Mitte stellte niemand ein.",
        "Das ist der Teil, vor dem niemand warnt. Fünf Jahre, eine Firma zu führen, zählen als gar nichts, wenn ein Formular nach einem Diplom fragt, und als viel zu viel, wenn es nach einer Schicht fragt.",
        "Dann schrieb eine Journalistin in der Luxembourg Times darüber. Dieser Artikel war es, der alles aufgebrochen hat: Firmen meldeten sich, und so habe ich die Stelle gefunden, die ich heute habe.",
      ],
      links: ["Der Artikel in der Luxembourg Times"],
    },
    insolvency: {
      period: "Das Ende von Fapic",
      title: "Am Ende die Insolvenz",
      body: [
        "Die Papierseite endete trotzdem schlecht. Ein Gläubiger setzte mir einen Gerichtsvollzieher ans Telefon, mit einem Antrag auf Konkurseröffnung: fünftausend Euro innerhalb von 72 Stunden. Ich hatte nirgendwo fünftausend Euro liegen. Ich bot tausend im Monat an. Das wurde abgelehnt, und als es kurz vor dem Gerichtstermin plötzlich doch angenommen wurde, hatte ich dem Verfahren nichts mehr zu geben.",
        "Ich hatte ein Jahr damit verbracht, zu allen fair zu sein. Die Firma ging in die Insolvenz. Ich verstecke es nicht und ich schiebe es niemandem zu: Zu diesem Zeitpunkt war es meine Entscheidung, nicht weiterzukämpfen.",
      ],
    },
    rebuild: {
      period: "2025 bis heute",
      title: "Was ich daraus gebaut habe",
      body: [
        "Ich nutzte die Ruhe, um zu lernen. Ich ging tief in die Programmierung und begann, die Software zu bauen, die ich als Geschäftsführer gebraucht hatte und mir nie hatte kaufen können.",
        "Daraus entstand LUXPOS, ein Kassen-, Treue- und Buchhaltungssystem für den luxemburgischen Handel. Und Salonify, eine Buchungsplattform für Salons. Und BoxBee. Und die übrigen.",
        "Seit März 2025 bin ich Head Developer bei DSP Invest und leite Doctomap, ein Verwaltungs-SaaS für Ärzte, das in die nationale E-Health-Infrastruktur Luxemburgs eingebunden ist. Daneben betreibe ich meine eigenen Produkte, mit echten zahlenden Kunden und echten Support-Tickets.",
        "Ich bin nicht hier, weil es gut gelaufen ist. Ich bin hier, weil es nicht gut gelaufen ist und ich trotzdem neu gebaut habe.",
      ],
    },
  },
  lessons: [
    "Verträge schlagen Vertrauen, jedes einzelne Mal, und vor allem bei Menschen, die man mag.",
    "Ein Geschäft, das davon abhängt, dass ein Partner anständig bleibt, ist kein Geschäft, es ist eine Hoffnung.",
    "Liquidität ist Sauerstoff. Gewinn auf dem Papier hat noch nie einen Lieferanten bezahlt.",
    "Beheben Sie Ihre schwächste Fähigkeit bewusst, in einem Job, in dem sie gemessen wird.",
    "Bezahlen Sie, was Sie schulden, auch wenn niemand Sie dazu zwingen kann.",
    "Bauen Sie die haltbare Version. Die aufregende Version ist meist der Ausstieg eines anderen.",
  ],
  roles: [
    {
      period: "März 2025 bis heute",
      title: "Head Developer",
      org: "DSP Invest Sarl · Luxemburg",
      bullets: [
        "Leitender Entwickler für Doctomap, ein mehrmandantenfähiges Verwaltungs-SaaS für Ärzte mit PID-Anbindung, gebaut in Partnerschaft mit eSanté und der CNS, der nationalen E-Health-Infrastruktur Luxemburgs.",
        "Webseiten, E-Commerce, Buchungssysteme und interne Werkzeuge, dazu Automatisierungen für Logistik und Buchhaltung.",
        "Volle Verantwortung über den ganzen Stack: Frontend, Backend, Server, Auslieferung, Suchmaschinen, Indexierung und Systemsicherheit.",
      ],
    },
    {
      period: "Jan. bis März 25",
      title: "Assistant in Communication",
      org: "Fräiwëllegendéngscht, SNJ · eingesetzt bei der Stëmm vun der Strooss · Luxemburg",
      bullets: [
        "Vollzeitstelle für Kommunikation und IT bei der luxemburgischen Hilfsorganisation für Menschen in sozialer Not: Produktion von Videoreihen und technischer Support.",
        "Hat über den Einsatz für die Zeitschrift Forum geschrieben, Ausgabe 443, Mai 2025.",
      ],
    },
    {
      period: "Jan. bis Mai 24",
      title: "Support Associate",
      org: "Wolt · Luxemburg",
      bullets: [
        "Kundenerlebnis: Kundenbindung, Lösung komplexer Bestellfälle und dreiseitige Abstimmung zwischen Kunden, Kurieren und Restaurants.",
        "Eingestiegen, nachdem ich rund 200 ihrer Restaurants im Rahmen eines Fapic-Auftrags fotografiert hatte, ausdrücklich um zu lernen, wie eine Lieferplattform ihre Kundenbeziehung und ihre interne Kultur führt.",
        "Was ich dort über den Markt gelernt habe, führte direkt zur Gründung von Umarket.",
      ],
    },
    {
      period: "2020 bis 2024",
      title: "Gründer & Geschäftsführer",
      org: "Fapic · Medienagentur · Luxemburg",
      bullets: [
        "Hat ab achtzehn knapp fünf Jahre allein eine Medienagentur gegründet und geführt und Foto-, Video-, Web- und Markenarbeiten für mittelständische Kunden geliefert.",
        "Hat Umarket gestartet und betrieben, Sofortlieferung von Lebensmitteln und Haushaltswaren rund um die Uhr in ganz Luxemburg. Fünfthäufigst geladene Lieferapp des Landes im zweiten Quartal 2024, neben Wolt und Uber Eats.",
        "Praxiswissen im luxemburgischen und europäischen Wirtschaftsrecht, in Verträgen, Steuern und Buchhaltung, bei gleichzeitiger Führung von Verkauf, Lieferung, Personal und Finanzen ohne Team.",
      ],
    },
    {
      period: "Mai 23 bis Nov. 24",
      title: "Vertriebsmitarbeiter",
      org: "bofrost* · Kenn, Rheinland-Pfalz (DE)",
      bullets: [
        "Außendienststelle, bewusst gewählt, um Akquise, Einwandbehandlung und Abschluss für die eigene Firma zu schärfen. Als bester Verkäufer der Niederlassung gegangen.",
      ],
    },
  ],
  skillLabels: [
    "Sprachen",
    "Frontend",
    "Backend",
    "Infrastruktur",
    "Anmeldung & Zahlung",
    "Monorepo",
    "KI, täglich",
    "Geschäftliches",
    "Design",
  ],
  languageLevels: {
    "Lëtzebuergesch": "Muttersprache",
    Deutsch: "Muttersprache",
    English: "Fortgeschritten",
    "Français": "Mittelstufe",
  },
  education: [
    { title: "DT Bild, Film, Video & Fotografie", period: "17 bis 19" },
    { title: "9e TE", period: "16 bis 17" },
    { title: "7e & 8e TE", period: "14 bis 16" },
  ],
  credentials: [
    {},
    {},
    {
      title: "1. Publikumspreis, #OurLuxembourg",
      org: "Ministère de l'économie und Ministère des affaires étrangères, Juni 2018. Rund 1.300 Einsendungen.",
    },
  ],
  press: [
    {
      label: "Meine Fotos in der Presse",
      blurb:
        "Redaktionen veröffentlichen meine Bilder unter meinem eigenen Namen. Das ist der Teil meiner Arbeit, der am längsten veröffentlicht wird.",
      notes: [
        "Meine Fotos der Entgleisung, mit © Noe Nei gekennzeichnet.",
        "Englische Ausgabe desselben Berichts, © Noe Nei.",
        "Konzertfotografie, gekennzeichnet mit Foto: Noe Nei.",
      ],
    },
    {
      label: "Über mich geschrieben, und von mir geschrieben",
      blurb: "Interviews, Berichte und ein Beitrag, den ich selbst geschrieben habe.",
      notes: [
        "Ausgabe 443. Ich bin Mitautor: mein eigener Bericht über den Einsatz bei der Stëmm vun der Strooss.",
        "Der Artikel, der die Jobsuche beendet hat.",
        "Mitgliederporträt, geführt als Noé Nei, Fapic Group.",
        "Interview von Liz Mikos über die Musik. Jahrgang 73, Nummer 107, Seite 7.",
        "Die offizielle Mitteilung: premier prix du public, Noe Nei. Auch vom Wirtschafts- und vom Außenministerium verbreitet.",
        "Die Siegerbilder, einschließlich des Publikumspreises.",
      ],
    },
  ],
  chrome: {
    metaTitle: "Über mich & CV: zweimal bei null angefangen",
    metaDescription:
      "Die lange Version. Noe Nei hat mit vierzehn angefangen zu arbeiten, mit achtzehn seine eigene Agentur gegründet, mit einem Lieferstartup alles verloren, die Schulden aus dem eigenen Gehalt abbezahlt und sich in Luxemburg als Entwickler neu aufgebaut. Vollständiger Lebenslauf, Erfahrung, Stack und Ausbildung.",
    kicker: "Über mich · die lange Version",
    h1a: "Ich war schon bei null.",
    h1b: "Zweimal plant das niemand.",
    lead:
      "Die meisten Portfolios zeigen Ihnen die Höhepunkte. Hier ist das Ganze: erste Rechnung mit vierzehn, eigene Firma mit achtzehn, ein Lieferstartup, das alles genommen hat, was ich hatte, zwei Monate mit nichts, und der Neuaufbau, der mich zum Entwickler gemacht hat.",
    leadNote:
      "Es ist eine lange Lektüre, und alles, was überprüfbar ist, ist mit seiner Quelle verlinkt. Wenn Sie nur die Fakten wollen, der Lebenslauf beginnt weiter unten.",
    jumpCv: "Zum Lebenslauf",
    workWithMe: "Mit mir arbeiten",
    stillHere: "Immer noch da",
    portraitAlt: "Noe Nei, Gründer und Entwickler aus Luxemburg",
    archiveAlt: "Noe Nei beim Durchsehen gedruckter Arbeiten",
    facts: [
      { k: "Ansässig in", v: "Luxemburg" },
      { k: "Geboren", v: "9. März 2002" },
      { k: "Heute", v: "Head Developer, DSP Invest" },
      { k: "Außerdem", v: "Gründer von LUXPOS, Salonify, BoxBee" },
    ],
    storyKicker: "Die Geschichte",
    storyH2: (count) => `${count} Kapitel, der Reihe nach.`,
    lessonsKicker: "Was es gekostet, was es gelehrt hat",
    lessonsH2: "Sechs Dinge, die ich bar bezahlt habe.",
    offClockKicker: "Nach der Arbeit",
    offClock:
      "Ich mache noch Musik. Ich verkaufe sie nur nicht mehr. Ich habe Jahre damit verbracht, alles, was ich liebte, in eine Rechnung zu verwandeln, und diese eine bleibt ein Hobby.",
    cvKicker: "Lebenslauf",
    cvH2: "Die kurze Version, für Menschen mit wenig Zeit.",
    experience: "Erfahrung",
    stackTools: "Stack & Werkzeuge",
    languages: "Sprachen",
    education: "Ausbildung",
    credentials: "Zertifikate & Auszeichnungen",
    open: "Öffnen",
    ctaKicker: "Immer noch am Lesen",
    ctaH2: "Dann wissen Sie schon, wie ich Ihr Projekt behandeln werde.",
    ctaLead:
      "Ich baue Dinge, die den Kontakt mit der Realität überleben müssen, weil meine die Wahl nicht hatten.",
  },
};

/**
 * English is the source for the prose, so only the chrome and the number words
 * live here. `chapters` and the CV arrays stay empty: the merge falls through
 * to the English data in `story.ts`.
 */
const en: StoryTranslation = {
  numberWords: [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
  ],
  chapters: {},
  lessons: [],
  roles: [],
  skillLabels: [],
  languageLevels: {},
  education: [],
  credentials: [],
  press: [],
  chrome: {
    metaTitle: "About & CV: from zero, twice",
    metaDescription:
      "The long version. Noe Nei started working at fourteen, founded his own agency at eighteen, lost everything with a delivery startup, paid the debt out of his own salary and rebuilt as a developer in Luxembourg. Full CV, experience, stack and education.",
    kicker: "About · the long version",
    h1a: "I have been to zero.",
    h1b: "Twice is the plan for nobody.",
    lead:
      "Most portfolios show you the highlight reel. Here is the whole thing: first invoice at fourteen, own company at eighteen, a delivery startup that took everything I had, two months with nothing, and the rebuild that turned me into a developer.",
    leadNote:
      "It is a long read, and the parts that can be checked are linked to their sources. If you only want the facts, the CV starts further down.",
    jumpCv: "Jump to the CV",
    workWithMe: "Work with me",
    stillHere: "Still here",
    portraitAlt: "Noe Nei, founder and developer from Luxembourg",
    archiveAlt: "Noe Nei going through printed work",
    facts: [
      { k: "Based in", v: "Luxembourg" },
      { k: "Born", v: "9 March 2002" },
      { k: "Now", v: "Head Developer, DSP Invest" },
      { k: "Also", v: "Founder of LUXPOS, Salonify, BoxBee" },
    ],
    storyKicker: "The story",
    storyH2: (count) => `${count} chapters, in order.`,
    lessonsKicker: "What it cost, what it taught",
    lessonsH2: "Six things I paid for in cash.",
    offClockKicker: "Off the clock",
    offClock:
      "I still make music. I just do not sell it any more. I spent years turning everything I loved into an invoice, and this one stays a hobby.",
    cvKicker: "Curriculum vitae",
    cvH2: "The short version, for people in a hurry.",
    experience: "Experience",
    stackTools: "Stack & tools",
    languages: "Languages",
    education: "Education",
    credentials: "Certifications & awards",
    open: "Open",
    ctaKicker: "Still reading",
    ctaH2: "Then you already know how I will treat your project.",
    ctaLead:
      "I build things that have to survive contact with reality, because mine did not get the choice.",
  },
};

export const storyTranslations: Record<Locale, StoryTranslation> = { en, fr, de };


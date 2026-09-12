export interface Consultation {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  footerNote?: string;
  duration: string;
  price: string;
  isRemote?: boolean;
  imageUrl: string;
  location: string;
  type: string;
  contactOnly?: boolean;
  whatsappLabel?: string;
}

export const consultations: Consultation[] = [
  {
    id: "guidance-complete",
    title: "Consultation Guidance Complète",
    subtitle: "Première consultation",
    description:
      "Une séance approfondie pour faire le point sur votre situation actuelle et obtenir des réponses claires à vos questions. Cette consultation combine l'analyse de votre chemin de vie, l'étude de votre année personnelle en cours, et une guidance cartomancie personnalisée. Elle correspond au premier rendez-vous idéal pour étudier votre base numérologique, comprendre votre période actuelle et bénéficier d'un accompagnement structuré sur vos questions : affectives, professionnelles, familiales ou en période de transition.",
    details: [
      "L'étude de votre chemin de vie",
      "L'analyse de votre année personnelle (énergie de votre période actuelle)",
      "Une guidance personnalisée sur vos questions : affectif, professionnel, décisions, famille, transitions...",
    ],
    footerNote:
      "Une approche qui relie structure et intuition pour vous aider à mieux comprendre ce que vous traversez et à avancer plus sereinement.",
    duration: "1h30 à 1h45",
    price: "70 €",
    imageUrl: "/images/services/numerology.jpg",
    location: "À distance / Cabinet",
    type: "Guidance",
  },
  {
    id: "suivi-annee",
    title: "Consultation Suivi & Année Personnelle",
    description:
      "Une consultation complète centrée sur votre période actuelle, idéale après une première consultation complète.",
    details: [
      "Analyse détaillée de votre année personnelle",
      "Guidance pour faire le point sur votre évolution, vos questionnements actuels et vos prochains choix",
    ],
    footerNote:
      "Cette séance permet d'ajuster votre direction et de mieux comprendre les événements en cours, sans refaire l'étude complète du chemin de vie.",
    duration: "1h à 1h15",
    price: "60 €",
    imageUrl: "/images/services/suivi_annee.jpg",
    location: "À distance / Cabinet",
    type: "Guidance",
  },
  {
    id: "guidance-question",
    title: "Guidance par Question",
    subtitle: "À distance",
    description:
      "Vous avez une question précise sur un sujet précis ? Ce format vous permet d'obtenir une réponse personnalisée.\n\nExemples de domaines :\n• Professionnel : évolution de carrière, changement de poste, création d'entreprise...\n• Sentimental : évolution d'une relation, rencontre, séparation...\n• Financier : gestion, investissement, héritage...\n• Déménagement : départ, expatriation, changement de région...\n• Familial : mariage, enfant, relations familiales...\n\nEn m'envoyant votre question + date de naissance, deux options possibles :\n• Rendez-vous direct : nous faisons la séance ensemble en temps réel\n• Analyse différée : je réalise votre analyse à la date qui me convient et vous envoie le compte rendu par message ou par e-mail\n\nFormat au choix : réponse écrite détaillée ou réponse audio explicative",
    details: [],
    duration: "Envoi sous quelques jours",
    price: "30 €",
    isRemote: true,
    imageUrl: "/images/services/cartomancy.jpg",
    location: "À distance",
    type: "Guidance",
  },
  {
    id: "soin-lahochi",
    title: "Soin énergétique LAHOCHI",
    subtitle: "À distance ou en cabinet",
    description:
      "Un soin énergétique puissant par apposition des mains, permettant de stimuler les mécanismes d'auto-guérison du corps et d'apaiser le mental.",
    details: [
      "Rééquilibre les énergies du corps",
      "Apaise le stress et l'anxiété",
      "Favorise la guérison émotionnelle et physique",
      "Procure une profonde relaxation",
    ],
    footerNote: "Idéal pour retrouver vitalité et sérénité.",
    duration: "45 min à 1h",
    price: "60 €",
    imageUrl: "/images/services/lahochi.jpg",
    location: "À distance / Cabinet",
    type: "Soin Énergétique",
  },
  {
    id: "lahochi-compagnon",
    title: "Lahochi Compagnon",
    subtitle: "Pour votre animal",
    description:
      "Une séance Lahochi pensée pour votre animal, dans le respect de son rythme, de son comportement et de ce qu'il est prêt à recevoir. Elle peut être proposée lorsqu'il traverse un changement, une nouvelle étape de vie ou simplement lorsque vous souhaitez lui offrir un moment de calme et de bien-être.",
    details: [
      "Accompagnement lors d'un déménagement, d'une adoption ou d'un changement dans le foyer",
      "Un temps de calme adapté au rythme de l'animal",
      "À distance à partir d'une photo récente et de quelques informations",
      "Possibilité de séance à domicile autour de Gerponville",
      "Aucun contact imposé : l'animal reste libre de bouger ou de s'éloigner",
    ],
    footerNote:
      "Le Lahochi animalier est une pratique de bien-être complémentaire. Il ne remplace pas un vétérinaire, ne permet pas d'établir un diagnostic et ne doit jamais conduire à interrompre ou modifier un traitement vétérinaire.",
    duration: "Selon le rythme de l'animal",
    price: "45 € à distance · 55 € à domicile",
    imageUrl: "/images/services/lahochi-compagnon.jpg",
    location: "À distance / Domicile local",
    type: "Soin Énergétique",
  },
  {
    id: "pack-compagnon-serenite",
    title: "Pack Compagnon Sérénité",
    subtitle: "3 séances à distance",
    description:
      "Un accompagnement sur plusieurs séances pour les animaux qui traversent une période de changement et pour lesquels vous souhaitez installer plusieurs temps de calme et de recentrage dans la durée.",
    details: [
      "3 séances Lahochi à distance",
      "Adaptation de chaque séance à l'évolution de votre animal",
      "Retour après chaque séance",
    ],
    footerNote:
      "Une formule pensée pour accompagner votre compagnon sur plusieurs étapes, toujours dans le respect de son rythme.",
    duration: "3 séances",
    price: "115 €",
    imageUrl: "/images/services/pack-compagnon-serenite.jpg",
    location: "À distance",
    type: "Soin Énergétique",
  },
  {
    id: "harmonisation-objets",
    title: "Harmonisation d'objets",
    subtitle: "À distance sur photo",
    description:
      "Certains objets nous accompagnent depuis longtemps, ont une valeur particulière ou occupent une place importante dans notre quotidien. Je vous propose un travail Lahochi autour d'un objet personnel, ou de plusieurs petits objets, à partir d'une photographie et de l'intention que vous souhaitez leur associer.",
    details: [
      "Travail principalement à distance à partir d'une photographie",
      "Pour un objet ou plusieurs petits objets selon leur taille",
      "Définition de votre intention avant la séance",
      "Tarif confirmé avant la prestation à partir des photos transmises",
    ],
    footerNote:
      "Cette démarche est énergétique et symbolique. Elle ne modifie pas les propriétés physiques, chimiques ou médicales de l'objet concerné.",
    duration: "Sur photo",
    price: "À partir de 25 €",
    imageUrl: "/images/services/harmonisation-objets.jpg",
    location: "À distance",
    type: "Soin Énergétique",
    contactOnly: true,
    whatsappLabel: "Me contacter",
  },
];

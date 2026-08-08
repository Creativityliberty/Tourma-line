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
}

export const consultations: Consultation[] = [
  {
    id: "guidance-complete",
    title: "Consultation Guidance Complète",
    subtitle: "Première consultation",
    description:
      "Une séance approfondie pour faire le point sur votre situation actuelle et explorer vos questions. Cette consultation combine l'analyse de votre chemin de vie, l'étude de votre année personnelle en cours et une guidance par les cartes. Elle convient à un premier rendez-vous pour poser votre base numérologique, mettre votre période actuelle en perspective et travailler sur vos sujets affectifs, professionnels, familiaux ou vos transitions.",
    details: [
      "L'étude de votre chemin de vie",
      "L'analyse de votre année personnelle et de votre période actuelle",
      "Une guidance personnalisée autour de vos questions : affectif, professionnel, décisions, famille, transitions...",
    ],
    footerNote:
      "Une approche qui relie structure et intuition pour vous aider à prendre du recul sur ce que vous traversez.",
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
      "Une consultation centrée sur votre période actuelle, idéale après une première consultation complète.",
    details: [
      "Analyse détaillée de votre année personnelle",
      "Guidance pour faire le point sur votre évolution, vos questionnements actuels et vos prochains choix",
    ],
    footerNote:
      "Cette séance permet de remettre votre situation en perspective sans refaire l'étude complète du chemin de vie.",
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
      "Vous avez une question précise sur un sujet précis ? Ce format permet d'explorer votre situation à partir de votre question et de votre date de naissance.\n\nExemples de domaines :\n• Professionnel : évolution de carrière, changement de poste, création d'entreprise...\n• Sentimental : évolution d'une relation, rencontre, séparation...\n• Financier : gestion, projet, héritage...\n• Déménagement : départ, expatriation, changement de région...\n• Familial : mariage, enfant, relations familiales...\n\nEn m'envoyant votre question + date de naissance, deux options possibles :\n• Rendez-vous direct : nous faisons la séance ensemble en temps réel\n• Analyse différée : je réalise votre analyse puis vous envoie le compte rendu par message ou par e-mail\n\nFormat au choix : réponse écrite détaillée ou réponse audio explicative",
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
      "Une séance énergétique Lahochi proposée comme un temps de détente, de recentrage et de bien-être, selon un protocole d'imposition des mains.",
    details: [
      "Un temps calme consacré au recentrage",
      "Une séance pensée pour favoriser la détente",
      "Des ressentis personnels et variables selon les personnes",
      "Une pratique de bien-être complémentaire, sans promesse thérapeutique",
    ],
    footerNote:
      "Le Lahochi ne remplace pas un diagnostic, un traitement ni un suivi par un professionnel de santé.",
    duration: "45 min à 1h",
    price: "60 €",
    imageUrl: "/images/services/lahochi.jpg",
    location: "À distance / Cabinet",
    type: "Soin Énergétique",
  },
];

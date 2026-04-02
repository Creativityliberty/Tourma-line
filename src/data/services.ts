import React from "react";
import {
  CartomancyIcon,
  LahochiIcon,
  NumerologyIcon,
} from "../components/ui/icons";

export interface Service {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  contentTitle: string;
  content: string;
  features?: Array<{ title: string; description: string }>;
  calendlyButtonText?: string;
  calendlyUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const services: Record<string, Service> = {
  numerology: {
    id: "numerology",
    title: "Numérologie",
    icon: NumerologyIcon,
    contentTitle: "Numérologie — Votre chemin de vie déchiffré avec précision",
    content:
      "La numérologie est une science ancienne qui étudie l'impact des nombres sur notre existence. À travers l'analyse de votre date de naissance, Line Simon vous révèle des aspects essentiels de votre personnalité, vos talents cachés, et les défis auxquels vous êtes confronté dans votre vie. Consultation disponible en cabinet à Gerponville (Seine-Maritime), à domicile à Fécamp, Valmont, Cany-Barville, et à distance par téléphone pour toute la France. Chaque consultation vous aide à mieux comprendre vos choix, vos relations et les événements marquants de votre vie, afin de prendre des décisions éclairées et d'aligner votre vie avec votre véritable mission.",
    calendlyButtonText: "Réserver une consultation de numérologie",
    calendlyUrl: "https://cal.com/line-simon",
    imageUrl: "/images/services/numerology.jpg",
    imageAlt: "Line Simon, numérologue en Normandie — consultation numérologie Seine-Maritime",
  },
  cartomancy: {
    id: "cartomancy",
    title: "Cartomancie",
    icon: CartomancyIcon,
    contentTitle: "Cartomancie — Des réponses claires grâce aux cartes",
    content:
      "Cartomancienne installée en Normandie, Line Simon lit et interprète les cartes pour obtenir des réponses aux questions que vous vous posez. Que ce soit pour éclairer vos choix professionnels, amoureux ou personnels, la cartomancie offre des conseils pratiques et des prévisions sur votre avenir. J'utilise des jeux de cartes traditionnels ou des oracles pour explorer les énergies présentes et vous guider vers des solutions adaptées à votre situation. Séances disponibles à Gerponville (76540), Fécamp, ou partout en France par téléphone.",
    calendlyButtonText: "Réserver une séance de cartomancie",
    calendlyUrl: "https://cal.com/line-simon",
    imageUrl: "/images/services/cartomancy.jpg",
    imageAlt: "Cartomancienne Normandie — cartes tarot et oracles, Séance avec Line Simon",
  },
  lahochi: {
    id: "lahochi",
    title: "Soin LAHOCHI",
    icon: LahochiIcon,
    contentTitle: "Soin Énergétique LAHOCHI — Une puissante vague de guérison",
    content:
      "Le LAHOCHI est une méthode de soins énergétiques très puissante, souvent comparée au Reiki, pratiquée par Line Simon en Normandie. Son nom, 'LahoChi', fait référence à l'énergie divine universelle canalisée à travers les mains du praticien pour être transmise à la personne recevant le soin. Séances disponibles à Gerponville (Seine-Maritime), à domicile à Fécamp, Valmont et Cany-Barville, ou à distance (soin énergétique à distance possible). Le Lahochi utilise des fréquences vibratoires élevées pour rééquilibrer les énergies du corps et favoriser la guérison physique, émotionnelle et spirituelle.",
    features: [
      {
        title: "Transmission d'énergie par les mains",
        description:
          "Je canalise l'énergie à travers mes mains en les plaçant sur ou près du corps du receveur.",
      },
      {
        title: "Soin holistique",
        description:
          "Le LAHOCHI agit sur les différents niveaux de l'être humain : physique, émotionnel, mental et spirituel.",
      },
      {
        title: "Équilibrage des chakras",
        description:
          "Le Lahochi aide à équilibrer les chakras du corps, favorisant ainsi un flux énergétique harmonieux.",
      },
      {
        title: "Vibration élevée",
        description:
          "Le LAHOCHI est réputé pour être un soin à hautes fréquences vibratoires ce qui permet des résultats rapides et profonds.",
      },
      {
        title: "Soin à distance",
        description:
          "Cette méthode peut aussi être pratiquée à distance, ce qui la rend accessible à toute personne, peu importe sa localisation.",
      },
    ],
    calendlyButtonText: "Réserver un soin LAHOCHI",
    calendlyUrl: "https://cal.com/line-simon",
    imageUrl: "/images/services/lahochi.jpg",
    imageAlt: "Illustration de soin énergétique LAHOCHI",
  },
};

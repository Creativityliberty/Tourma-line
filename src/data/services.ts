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
    contentTitle: "Comprendre votre chemin de vie et la période que vous traversez",
    content:
      "Je m'appuie sur votre date de naissance pour explorer votre chemin de vie, votre année personnelle, vos cycles et certains schémas de votre parcours.\n\nCette lecture permet de mettre en lumière des éléments de votre personnalité, des périodes importantes et les dynamiques présentes dans votre vie aujourd'hui.",
    calendlyButtonText: "Réserver une consultation de numérologie",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/numerology.jpg",
    imageAlt: "Consultation de numérologie avec Line chez Tourma-Line",
  },
  cartomancy: {
    id: "cartomancy",
    title: "Cartomancie",
    icon: CartomancyIcon,
    contentTitle: "Éclairer les questions qui vous préoccupent",
    content:
      "J'utilise les cartes comme support de guidance pour approfondir une situation précise.\n\nRelation, travail, famille, projet ou décision : le tirage me permet d'explorer votre question avec vous et de vous apporter un éclairage adapté à votre situation.",
    calendlyButtonText: "Réserver une séance de cartomancie",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/cartomancy.jpg",
    imageAlt: "Séance de cartomancie avec Line chez Tourma-Line",
  },
  lahochi: {
    id: "lahochi",
    title: "Lahochi",
    icon: LahochiIcon,
    contentTitle: "Un temps de détente et de recentrage",
    content:
      "Je pratique le Lahochi par apposition des mains, au cabinet ou à distance selon la prestation.\n\nJe propose ces séances comme un temps pour ralentir, vous recentrer et vous accorder un moment consacré à votre bien-être.",
    features: [
      {
        title: "Un temps consacré à vous",
        description:
          "La séance se déroule dans un cadre calme, respectueux et adapté à votre rythme.",
      },
      {
        title: "Au cabinet ou à distance",
        description:
          "La modalité dépend de la prestation choisie et de ce qui vous convient le mieux.",
      },
      {
        title: "Pratique de bien-être complémentaire",
        description:
          "Le Lahochi ne remplace pas un diagnostic, un traitement ou un suivi par un professionnel de santé.",
      },
    ],
    calendlyButtonText: "Réserver une séance Lahochi",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/lahochi.jpg",
    imageAlt: "Séance Lahochi avec Line chez Tourma-Line",
  },
};

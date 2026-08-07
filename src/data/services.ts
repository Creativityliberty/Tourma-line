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
    contentTitle: "Numérologie — Chemin de vie, année personnelle & cycles",
    content:
      "La numérologie est une pratique d'interprétation symbolique des nombres associés notamment à votre date de naissance. Line l'utilise comme support de réflexion pour explorer votre chemin de vie, votre année personnelle, vos cycles et les thèmes qui reviennent dans votre parcours. La consultation aide à prendre du recul sur une situation et à mettre des mots sur les périodes de transition.",
    calendlyButtonText: "Réserver une consultation de numérologie",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/numerology.jpg",
    imageAlt: "Line Simon, numérologue en Seine-Maritime — consultation de numérologie",
  },
  cartomancy: {
    id: "cartomancy",
    title: "Voyance & Cartomancie",
    icon: CartomancyIcon,
    contentTitle: "Voyance & cartomancie — Une guidance par les cartes",
    content:
      "La cartomancie utilise les cartes comme support de lecture et de dialogue. Amour, travail, famille ou décision personnelle : Line adapte le tirage à votre question pour vous proposer des pistes de réflexion claires et structurées. La séance n'est pas présentée comme une certitude absolue sur l'avenir, mais comme un accompagnement pour mieux lire votre situation.",
    calendlyButtonText: "Réserver une séance de voyance et cartomancie",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/cartomancy.jpg",
    imageAlt: "Line Simon, voyante et cartomancienne en Seine-Maritime — tirage de cartes",
  },
  lahochi: {
    id: "lahochi",
    title: "Soin énergétique LAHOCHI",
    icon: LahochiIcon,
    contentTitle: "Soin énergétique LAHOCHI — Détente, recentrage & bien-être",
    content:
      "Le LAHOCHI est une pratique énergétique de bien-être reposant sur un protocole d'imposition des mains, en contact ou à proximité du corps. Chez Tourma-Line, la séance est proposée comme un temps de détente, de recentrage et d'écoute de soi. Les ressentis sont personnels et variables ; cette pratique ne remplace pas un diagnostic, un traitement ni un suivi par un professionnel de santé.",
    features: [
      {
        title: "Protocole énergétique par les mains",
        description:
          "Line suit le protocole Lahochi en plaçant les mains sur ou à proximité du corps, dans un cadre calme et respectueux.",
      },
      {
        title: "Temps de détente et de recentrage",
        description:
          "La séance est pensée comme un moment pour ralentir, se poser et porter attention à ses ressentis.",
      },
      {
        title: "Expérience personnelle",
        description:
          "Les sensations et ressentis diffèrent d'une personne à l'autre ; aucun résultat thérapeutique n'est garanti.",
      },
      {
        title: "Pratique complémentaire de bien-être",
        description:
          "Le Lahochi ne remplace pas les soins médicaux, psychologiques ou paramédicaux lorsqu'ils sont nécessaires.",
      },
      {
        title: "Séance à distance possible",
        description:
          "Tourma-Line propose aussi des séances Lahochi à distance pour les personnes qui ne peuvent pas se déplacer au cabinet de Gerponville.",
      },
    ],
    calendlyButtonText: "Réserver un soin énergétique LAHOCHI",
    calendlyUrl: "https://cal.com/tourma-line",
    imageUrl: "/images/services/lahochi.jpg",
    imageAlt: "Soin énergétique Lahochi avec Line Simon, énergéticienne en Seine-Maritime",
  },
};

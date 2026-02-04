import React from 'react';
import { NumerologyIcon, CartomancyIcon, LahochiIcon } from '../components/ui/icons';

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
    id: 'numerology',
    title: 'Numérologie',
    icon: NumerologyIcon,
    contentTitle: 'Numérologie - Découvrez les secrets de votre chemin de vie',
    content: 'La numérologie est une science ancienne qui étudie l\'impact des nombres sur notre existence. À travers l\'analyse de votre date de naissance la numérologie permet de révéler des aspects essentiels de votre personnalité, de vos talents cachés, ainsi que les défis auxquels vous êtes confronté dans votre vie. Chaque consultation vous permet de mieux comprendre vos choix, vos relations et les événements marquants de votre vie, afin de prendre des décisions éclairées et d\'aligner votre vie avec votre véritable mission.',
    calendlyButtonText: 'Réserver une consultation de numérologie',
    calendlyUrl: 'https://calendly.com/tourma-line/',
    imageUrl: '/images/services/numerology.jpg',
    imageAlt: 'Illustration de numérologie avec des chiffres et symboles'
  },
  cartomancy: {
    id: 'cartomancy',
    title: 'Cartomancie',
    icon: CartomancyIcon,
    contentTitle: 'Cartomancie - Des réponses claires grâce aux cartes',
    content: 'La cartomancie est l\'art de lire et d\'interpréter les cartes pour obtenir des réponses aux questions que vous vous posez. Que ce soit pour éclairer vos choix professionnels, amoureux ou personnels, la cartomancie offre des conseils pratiques et des prévisions sur votre avenir. J\'utilise des jeux de cartes traditionnels ou des oracles pour explorer les énergies présentes et vous guider vers des solutions adaptées à votre situation.',
    calendlyButtonText: 'Réserver une séance de cartomancie',
    calendlyUrl: 'https://calendly.com/tourma-line/',
    imageUrl: '/images/services/cartomancy.jpg',
    imageAlt: 'Illustration de cartomancie avec des cartes tarot'
  },
  lahochi: {
    id: 'lahochi',
    title: 'Soin LAHOCHI',
    icon: LahochiIcon,
    contentTitle: 'Soin Énergétique LAHOCHI - Une puissante vague de guérison',
    content: 'Le LAHOCHI est une méthode de soins énergétiques qui s\'apparente à une forme de guérison par l\'énergie, often comparée au Reiki, bien qu\'elle soit considérée comme plus puissante et plus rapide. Son nom, \'LahoChi\', fait référence à l\'énergie divine universelle qui est canalisée à travers les mains du praticien pour être transmise à la personne recevant le soin. Le Lahochi utilise des fréquences vibratoires élevées pour rééquilibrer les énergies du corps et favoriser la guérison physique, émotionnelle et spirituelle.',
    features: [
      {
        title: 'Transmission d\'énergie par les mains',
        description: 'Je canalise l\'énergie à travers mes mains en les plaçant sur ou près du corps du receveur.'
      },
      {
        title: 'Soin holistique',
        description: 'Le LAHOCHI agit sur les différents niveaux de l\'être humain : physique, émotionnel, mental et spirituel.'
      },
      {
        title: 'Équilibrage des chakras',
        description: 'Le Lahochi aide à équilibrer les chakras du corps, favorisant ainsi un flux énergétique harmonieux.'
      },
      {
        title: 'Vibration élevée',
        description: 'Le LAHOCHI est réputé pour être un soin à hautes fréquences vibratoires ce qui permet des résultats rapides et profonds.'
      },
      {
        title: 'Soin à distance',
        description: 'Cette méthode peut aussi être pratiquée à distance, ce qui la rend accessible à toute personne, peu importe sa localisation.'
      }
    ],
    calendlyButtonText: 'Réserver un soin LAHOCHI',
    calendlyUrl: 'https://calendly.com/tourma-line/',
    imageUrl: '/images/services/lahochi.jpg',
    imageAlt: 'Illustration de soin énergétique LAHOCHI'
  }
};

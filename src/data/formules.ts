import React from 'react';
import { BalanceIcon, ButterflyIcon, LahochiIcon } from '../components/ui/icons';

export interface Formule {
  id: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  objective: string;
  details: string[];
  duration: string;
  price: string;
  priceNote?: string;
  imageUrl?: string;
  imageAlt?: string;
  idealFor?: string;
}

export const formules: Formule[] = [
  {
    id: 'harmonie-interieure',
    icon: BalanceIcon,
    title: 'Formule « Harmonie Intérieure »',
    subtitle: '2 séances sur 1 mois',
    objective: 'Prendre du recul sur vos émotions et vos schémas récurrents, puis vous accorder un temps de détente et de recentrage.',
    details: [
      '1 séance combinée de numérologie et de cartomancie.',
      '1 séance énergétique Lahochi à une autre date.'
    ],
    duration: 'environ 1 mois',
    price: '120€',
    imageUrl: '/images/formules/harmonie-interieure.jpg',
    imageAlt: 'Illustration de la formule Harmonie Intérieure'
  },
  {
    id: 'renaissance',
    icon: ButterflyIcon,
    title: 'Formule « Renaissance »',
    subtitle: 'Accompagnement sur 3 mois',
    objective: 'Un accompagnement de réflexion personnelle et de bien-être sur plusieurs semaines pour traverser une période de changement avec davantage de recul.',
    details: [
      '1 séance de cartomancie + numérologie au démarrage.',
      '3 séances énergétiques Lahochi, à raison d’environ une par mois.',
      'Échanges de suivi et guidance entre les séances selon la formule.',
      '1 séance de cartomancie de clôture.'
    ],
    duration: '3 mois',
    price: '280€',
    priceNote: 'Payable en 2 fois',
    imageUrl: '/images/formules/renaissance.jpg',
    imageAlt: 'Illustration de la formule Renaissance'
  },
  {
    id: 'soin-lahochi-3-seances',
    icon: LahochiIcon,
    title: 'Formule « Soin énergétique Lahochi »',
    subtitle: 'Pack de 3 séances',
    objective: 'Trois temps de bien-être et de recentrage pour les personnes qui souhaitent inscrire la pratique Lahochi dans la durée.',
    details: [
      '3 séances énergétiques Lahochi.',
      'Un temps d’échange autour de vos ressentis entre les séances.',
      'Une formule adaptée aux périodes où vous souhaitez vous accorder des rendez-vous réguliers de détente.'
    ],
    duration: 'À définir selon vos préférences',
    price: '150€',
    imageUrl: '/images/formules/lahochi.jpg',
    imageAlt: 'Illustration de la formule Soin énergétique Lahochi'
  }
];

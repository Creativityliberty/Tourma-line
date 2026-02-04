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
    subtitle: '2 Séances sur 1 mois',
    objective: 'Apaiser les émotions, comprendre les schémas répétitifs et rééquilibrer les énergies pour restaurer l\'harmonie globale.',
    details: [
      '1 séance combinée de numérologie et de cartomancie.',
      '1 soin Lahochi (à une autre date).'
    ],
    duration: 'environ 1 mois',
    price: '120€',
    imageUrl: '/images/formules/harmonie-interieure.png',
    imageAlt: 'Illustration de la formule Harmonie Intérieure'
  },
  {
    id: 'renaissance',
    icon: ButterflyIcon,
    title: 'Formule « Renaissance »',
    subtitle: 'Accompagnement sur 3 mois',
    objective: 'Guérir en profondeur, libérer les mémoires émotionnelles et retrouver une stabilité intérieure durable (traumatismes, deuils, ruptures).',
    details: [
      '1 séance de cartomancie + numérologie (démarrage).',
      '3 soins Lahochi (1 par mois).',
      'Suivi énergétique et guidance entre les séances.',
      '1 séance de cartomancie de clôture.'
    ],
    duration: '3 mois',
    price: '280€',
    priceNote: 'Payable en 2 fois',
    imageUrl: '/images/formules/renaissance.png',
    imageAlt: 'Illustration de la formule Renaissance'
  },
  {
    id: 'soin-lahochi-3-seances',
    icon: LahochiIcon,
    title: 'Formule « Soin Lahochi »',
    subtitle: 'Pack de 3 séances',
    objective: 'Un travail énergétique profond et suivi pour ancrer le bien-être, libérer les blocages persistants et maintenir une vibration élevée.',
    details: [
      '3 séances de soin Lahochi complètes.',
      'Suivi de l\'évolution énergétique entre chaque séance.',
      'Idéal pour un travail de fond ou une période de transition.'
    ],
    duration: 'À définir selon besoins',
    price: '150€',
    imageUrl: '/images/formules/lahochi.png',
    imageAlt: 'Illustration de la formule Soin Lahochi'
  }
];

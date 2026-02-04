# Plan d'Architecture pour l'Amélioration UI de Tourma-Line

## Structure de dossiers modulaire proposée

```
src/
├── components/
│   ├── sections/          # Sections principales de la page
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Formules.tsx
│   │   ├── Benefits.tsx
│   │   ├── Pricing.tsx
│   │   ├── SessionFlow.tsx
│   │   ├── FAQ.tsx
│   │   └── Testimonials.tsx
│   ├── ui/               # Composants UI réutilisables
│   │   ├── Card.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── Button.tsx
│   │   ├── Tab.tsx
│   │   └── Accordion.tsx
│   ├── layout/           # Composants de mise en page
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── chatbot/          # Composants du chatbot
│       ├── Chatbot.tsx
│       ├── ChatButton.tsx
│       ├── ChatWindow.tsx
│       └── MessageBubble.tsx
├── data/                 # Données centralisées
│   ├── services.ts
│   ├── formules.ts
│   ├── benefits.ts
│   ├── faq.ts
│   └── testimonials.ts
├── hooks/                # Hooks personnalisés
│   ├── useChatbot.ts
│   └── useScrollAnimation.ts
├── utils/                # Utilitaires
│   ├── animations.ts
│   └── formatters.ts
└── pages/
    └── index.tsx        # Page principale (remplace App.tsx)
```

## Migration progressive depuis l'architecture actuelle

### Phase 1 : Préparation (1-2 jours)
1. Créer la structure de dossiers
2. Extraire les données des composants vers `src/data/`
3. Préparer les dossiers d'images dans `public/images/`

### Phase 2 : Refactorisation (2-3 jours)
1. Créer les composants modulaires `ServiceCard` et `FormuleCard`
2. Extraire le chatbot en composants séparés
3. Migrer les sections une par une

### Phase 3 : Améliorations UI/UX (2-3 jours)
1. Ajouter des images aux sections services et formules
2. Améliorer le design du chatbot
3. Implémenter les animations et responsive design

### Phase 4 : Tests et optimisation (1-2 jours)
1. Tests de régression
2. Optimisation des images (lazy loading)
3. Tests cross-browser

### Phase 5 : Documentation (1 jour)
1. Guide d'extension
2. Documentation des composants

## Données centralisées

### `src/data/services.ts`
```typescript
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
  numerology: { ... },
  cartomancy: { ... },
  lahochi: { ... }
};
```

### `src/data/formules.ts`
```typescript
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
}

export const formules: Formule[] = [ ... ];
```

## Améliorations du chatbot

### Composants séparés
1. `ChatButton` : Bouton flottant avec animation de pulsation
2. `ChatWindow` : Fenêtre de chat avec design amélioré
3. `MessageBubble` : Bulle de message réutilisable

### Fonctionnalités ajoutées
- Animation de pulsation continue
- Ouverture automatique après 10 secondes d'inactivité
- Indicateur de chargement visuel amélioré
- Ombre plus prononcée et bordures arrondies

## Organisation des images

```
public/images/
├── services/
│   ├── numerology.jpg
│   ├── cartomancy.jpg
│   └── lahochi.jpg
├── formules/
│   ├── harmonie-interieure.jpg
│   └── renaissance.jpg
└── icons/
    └── (icônes existantes)
```

## Compatibilité
- Préservation de toutes les fonctionnalités existantes
- Mêmes IDs de section pour la navigation
- Mêmes classes CSS pour le styling
- Migration incrémentale sans rupture

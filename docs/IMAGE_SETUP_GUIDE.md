# Guide de configuration des images

## Structure des dossiers à créer

```
public/images/
├── services/
│   ├── numerology.jpg
│   ├── cartomancy.jpg
│   └── lahochi.jpg
└── formules/
    ├── harmonie-interieure.jpg
    └── renaissance.jpg
```

## Images requises

### Pour les services (src/data/services.ts)
1. **numerology.jpg** - Illustration pour la numérologie
   - Dimensions recommandées : 800x600px
   - Format : JPG ou WebP
   - Thème : Chiffres, symboles numérologiques, chemin de vie

2. **cartomancy.jpg** - Illustration pour la cartomancie
   - Dimensions recommandées : 800x600px
   - Format : JPG ou WebP
   - Thème : Cartes tarot, oracles, divination

3. **lahochi.jpg** - Illustration pour le soin LAHOCHI
   - Dimensions recommandées : 800x600px
   - Format : JPG ou WebP
   - Thème : Énergie, guérison, mains, chakras

### Pour les formules (src/data/formules.ts)
1. **harmonie-interieure.jpg** - Illustration pour la formule Harmonie Intérieure
   - Dimensions recommandées : 600x400px
   - Format : JPG ou WebP
   - Thème : Équilibre, paix intérieure, harmonie

2. **renaissance.jpg** - Illustration pour la formule Renaissance
   - Dimensions recommandées : 600x400px
   - Format : JPG ou WebP
   - Thème : Transformation, renaissance, papillon

## Instructions pour l'équipe de design

1. **Créer les images** selon les thèmes décrits ci-dessus
2. **Optimiser les images** pour le web :
   - Compression sans perte de qualité visible
   - Poids cible : < 200KB par image
   - Utiliser WebP pour de meilleures performances
3. **Placer les images** dans les dossiers correspondants
4. **Mettre à jour les chemins** si nécessaire dans les fichiers de données

## Images par défaut (fallback)

Si les images ne sont pas disponibles immédiatement, le système utilisera :
- Des icônes SVG existantes
- Des couleurs de fond de marque
- Des placeholders avec texte descriptif

## Intégration avec les composants

Les composants `ServiceCard` et `FormuleCard` incluront :
- Lazy loading pour les performances
- Alt text descriptif pour l'accessibilité
- Fallback visuel en cas d'erreur de chargement
- Design responsive (images qui s'adaptent aux écrans)

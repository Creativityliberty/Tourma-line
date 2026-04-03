export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  persona: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "0",
    slug: "calculer-chemin-de-vie-2025-guide",
    title: "Calculer son Chemin de Vie en 2025 : Plus qu'une méthode, une boussole pour votre mission.",
    excerpt: "Pourquoi calculer son chemin de vie en 2025 est-il devenu indispensable ? Découvrez le guide complet, pas à pas, pour décoder votre vibration de naissance et aligner votre vie sur vos talents naturels.",
    date: "2024-04-15",
    readTime: "12 min",
    category: "Numérologie",
    persona: "Tous Segments",
    image: "/blog-chemin-devie.png",
    featured: true,
    content: `
      <p><strong>RÉPONSE DIRECTE :</strong> Pour calculer votre chemin de vie en 2025, additionnez tous les chiffres de votre date de naissance (jour + mois + année) et réduisez le résultat à un chiffre unique entre 1 et 9, sauf si vous obtenez un Maître Nombre (11, 22 ou 33). Ce nombre révèle votre mission de vie et la manière dont vous allez naviguer dans l'énergie de l'année 9 universelle.</p>

      <h2>L'Expérience de Line : Pourquoi ce calcul a changé ma propre vision</h2>
      <p>Pendant des années, je cherchais à tout prix à rentrer dans des cases qui n'étaient pas les miennes. C'est en découvrant ma vibration de naissance — mon fameux Chemin de Vie — que tout s'est éclairé. Depuis, j'ai accompagné des centaines de personnes (comme Sophie, 42 ans, ou Marc, en pleine reconversion) vers cette même clarté. En 2025, année universelle 9, ce besoin de sens n'a jamais été aussi fort.</p>
      
      <h3>La méthode de calcul : Pas à pas</h3>
      <p>Le calcul est simple en apparence, mais sa profondeur est infinie. Additionnez tous les chiffres de votre date de naissance jusqu'à obtenir un nombre entre 1 et 9, sans oublier les Maîtres Nombres (11, 22, 33) qui ne se réduisent pas.</p>
      
      <p><em>Exemple : 12/05/1982 = 1+2+0+5+1+9+8+2 = 28. Puis 2+8 = 10. Enfin 1+0 = 1. Chemin de Vie 1.</em></p>
      
      <h3>Ce que votre nombre révèle en 2025</h3>
      <p>Chaque nombre porte une promesse. Le 1 vibre pour l'autonomie, le 5 pour le changement, le 9 pour l'altruisme. En cette année 9 mondiale, nous sommes tous poussés à faire le tri, et votre chemin de vie vous dira exactement comment le faire sans perdre pied.</p>
    `
  },
  {
    id: "1",
    slug: "revelation-42-ans-crise-quarantaine",
    title: "Crise de la quarantaine ou éveil de conscience ? Pourquoi 42 ans est l'âge de toutes les révélations.",
    excerpt: "À 42 ans, beaucoup de femmes ressentent un basculement profond. Entre remise en question professionnelle et quête de sens, découvrez comment la numérologie éclaire ce cycle majeur de votre vie.",
    date: "2024-04-03",
    readTime: "8 min",
    category: "Transition de Vie",
    persona: "Sophie (42 ans)",
    image: "/blog-midlife.png",
    content: `
      <p><strong>RÉPONSE DIRECTE :</strong> À 42 ans, vous traversez l'un des cycles les plus puissants de la numérologie humaniste (le passage au nombre 6 : 4+2). Ce n'est pas une crise, mais un réalignement obligatoire vers votre vérité intérieure et votre équilibre émotionnel, souvent marqué par une soif de sens et de spiritualité.</p>

      <h2>Le cap des 40 ans : Plus qu'un chiffre, une vibration</h2>
      <p>Vous avez 42 ans, ou vous approchez de ce cap, et vous ressentez une étrange sensation de flottement ? Ce n'est pas un hasard. En numérologie humaniste, la quarantaine correspond à un changement de cycle majeur où l'individu passe de la construction extérieure (carrière, famille, acquisition) à la réalisation intérieure.</p>
      
      <h3>Pourquoi 42 ans est-il si particulier ?</h3>
      <p>Le nombre 42 réduit à 6 (4+2). Le 6 est le nombre de l'harmonie, de la responsabilité et de l'équilibre coeur-foyer. C'est l'âge où l'on se demande : \"Est-ce que ma vie actuelle résonne vraiment avec qui je suis à l'intérieur ?\".</p>
    `
  },
  {
    id: "2",
    slug: "trouver-sa-voie-queti-clarte-30-ans",
    title: "Le syndrome de la colocation à 30 ans : Comment la numérologie vous aide à enfin trouver votre voie.",
    excerpt: "Vous avez 28 ou 30 ans et l'impression de stagner ? Entre instabilité sentimentale et flou professionnel, apprenez à décoder votre chemin de vie pour aligner vos choix sur votre véritable identité.",
    date: "2024-04-10",
    readTime: "7 min",
    category: "Orientation",
    persona: "Chloé (28 ans)",
    image: "/blog-clarity.png",
    content: `
      <p><strong>RÉPONSE DIRECTE :</strong> Pour sortir de l'instabilité à 30 ans, vous devez identifier votre "Chemin de Vie" numérique. Ce code de naissance révèle si vous agissez selon vos talents innés ou si vous luttez contre votre nature, transformant ainsi le flou actuel en une trajectoire professionnelle et personnelle alignée.</p>

      <h2>La quête de sens de la génération 25-35 ans</h2>
      <p>À 28 ans, Chloé se sentait \"en retard\". Ses amies achetaient des appartements ou montaient des boîtes, alors qu'elle changeait encore de job tous les 18 mois, incapable de se fixer. Ce sentiment d'instabilité est le point de départ de beaucoup de mes consultations.</p>
      
      <h3>Sortir des schémas répétitifs</h3>
      <p>Pourquoi attirez-vous toujours les mêmes partenaires toxiques ? Pourquoi ce job de rêve finit-il par vous vider de votre énergie ? La réponse réside souvent dans une méconnaissance de vos propres nombres.</p>
    `
  }
];

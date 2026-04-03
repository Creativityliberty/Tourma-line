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
      <h2>L'Expérience de Line : Pourquoi ce calcul a changé ma propre vision</h2>
      <p>Pendant des années, je cherchais à tout prix à rentrer dans des cases qui n'étaient pas les miennes. C'est en découvrant ma vibration de naissance — mon fameux Chemin de Vie — que tout s'est éclairé. Depuis, j'ai accompagné des centaines de personnes (comme Sophie, 42 ans, ou Marc, en pleine reconversion) vers cette même clarté. En 2025, année universelle 9, ce besoin de sens n'a jamais été aussi fort.</p>
      
      <h3>La méthode de calcul : Pas à pas</h3>
      <p>Le calcul est simple en apparence, mais sa profondeur est infinie. Additionnez tous les chiffres de votre date de naissance jusqu'à obtenir un nombre entre 1 et 9, sans oublier les Maîtres Nombres (11, 22, 33) qui ne se réduisent pas.</p>
      
      <p><em>Exemple : 12/05/1982 = 1+2+0+5+1+9+8+2 = 28. Puis 2+8 = 10. Enfin 1+0 = 1. Chemin de Vie 1.</em></p>
      
      <h3>Ce que votre nombre révèle en 2025</h3>
      <p>Chaque nombre porte une promesse. Le <strong>1</strong> vibre pour l'autonomie, le <strong>5</strong> pour le changement, le <strong>9</strong> pour l'altruisme. En cette année 9 mondiale, nous sommes tous poussés à faire le tri, et votre chemin de vie vous dira exactement comment le faire sans perdre pied.</p>
      
      <h3>FAQ : Les questions que vous m'envoyez souvent sur WhatsApp</h3>
      <p><strong>\"Est-ce que mon chemin de vie peut changer ?\"</strong> Non, il est basé sur votre naissance, il est votre ancrage. En revanche, vous évoluez à travers lui. <br/>
      <strong>\"Pourquoi je ne me reconnais pas dans mon nombre ?\"</strong> Souvent, c'est que vous vivez \"en sous-vibration\", ou que les défis karmiques de votre thème font barrage temporairement.</p>
      
      <p>La numérologie n'est pas une sentence, c'est une invitation. Alors, prêt(e) à découvrir ce que 2025 vous réserve réellement ?</p>
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
      <h2>Le cap des 40 ans : Plus qu'un chiffre, une vibration</h2>
      <p>Vous avez 42 ans, ou vous approchez de ce cap, et vous ressentez une étrange sensation de flottement ? Ce n'est pas un hasard. En numérologie humaniste, la quarantaine correspond à un changement de cycle majeur où l'individu passe de la construction extérieure (carrière, famille, acquisition) à la réalisation intérieure.</p>
      
      <h3>Pourquoi 42 ans est-il si particulier ?</h3>
      <p>Le nombre 42 réduit à 6 (4+2). Le 6 est le nombre de l'harmonie, de la responsabilité et de l'équilibre coeur-foyer. C'est l'âge où l'on se demande : \"Est-ce que ma vie actuelle résonne vraiment avec qui je suis à l'intérieur ?\".</p>
      
      <p>C'est souvent la période où les schémas qui fonctionnaient jusqu'ici volent en éclats. La charge mentale devient pesante, le travail perd de sa aveur, et une soif de spiritualité ou de \"féminin sacré\" émerge.</p>
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
      <h2>La quête de sens de la génération 25-35 ans</h2>
      <p>À 28 ans, Chloé se sentait \"en retard\". Ses amies achetaient des appartements ou montaient des boîtes, alors qu'elle changeait encore de job tous les 18 mois, incapable de se fixer. Ce sentiment d'instabilité est le point de départ de beaucoup de mes consultations.</p>
      
      <h3>Sortir des schémas répétitifs</h3>
      <p>Pourquoi attirez-vous toujours les mêmes partenaires toxiques ? Pourquoi ce job de rêve finit-il par vous vider de votre énergie ? La réponse réside souvent dans une méconnaissance de vos propres nombres.</p>
    `
  }
];

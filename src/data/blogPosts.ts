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
}

export const blogPosts: BlogPost[] = [
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
      
      <p>C'est souvent la période où les schémas qui fonctionnaient jusqu'ici volent en éclats. La charge mentale devient pesante, le travail perd de sa saveur, et une soif de spiritualité ou de \"féminin sacré\" émerge.</p>
      
      <h3>De la confusion à la clarté</h3>
      <p>La guidance par la numérologie permet de poser des mots sur ces maux. En calculant votre chemin de vie et votre année personnelle, nous pouvons identifier si vous êtes en phase de nettoyage (Année 9) ou de démarrage (Année 1), et comment naviguer dans cette transition sans peur.</p>
      
      <p>Ne voyez pas cette période comme une crise, mais comme une opportunité de recalibrage. Vous n'êtes pas perdue, vous êtes en train de vous retrouver.</p>
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
      
      <p>Votre date de naissance contient un code : votre Chemin de Vie. Si vous êtes un Chemin 5 (Liberté/Mouvement) mais que vous vous forcez à faire un job administratif routinier par sécurité, l'épuisement est inévitable.</p>
      
      <h3>Prendre sa place</h3>
      <p>La numérologie n'est pas de la voyance, c'est un outil d'alignement. Elle vous redonne la permission d'être qui vous êtes vraiment. En comprenant vos cycles, vous arrêtez de lutter contre le courant et vous commencez à construire sur des bases solides.</p>
    `
  }
];

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_URL, SERVICES, getBlogPosts, getCityMeta } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.resolve(rootDir, "public");

const { all, local, national, international } = getCityMeta();

const SERVICES_META = {
  numerologie: {
    title: "Numérologie",
    description:
      "Consultation de numérologie à partir de votre date de naissance : chemin de vie, année personnelle, cycles, forces et défis récurrents. 70€, 1h30 à 1h45.",
    url: `${BASE_URL}/numerologie`,
  },
  cartomancie: {
    title: "Cartomancie",
    description:
      "Guidance par les cartes pour répondre à vos questions concrètes (amour, travail, famille, décisions). 70€, 1h30 à 1h45.",
    url: `${BASE_URL}/cartomancie`,
  },
  "soin-lahochi": {
    title: "Soin Lahochi",
    description:
      "Soin énergétique de haute fréquence à distance ou en cabinet : rééquilibrage énergétique, apaisement du stress, des anxiétés et des troubles du sommeil. 60€, 45 min à 1h.",
    url: `${BASE_URL}/soin-lahochi`,
  },
};

const FAQ = [
  {
    q: "Comment se déroule une consultation de numérologie ?",
    a: "Seule votre date de naissance est nécessaire. Line déchiffre votre chemin de vie, votre année personnelle et vos cycles. La séance dure 1h30 à 1h45, en cabinet à Gerponville (76540, Seine-Maritime) ou à distance (téléphone ou visio).",
  },
  {
    q: "La consultation à distance est-elle aussi précise qu'en présentiel ?",
    a: "Oui. La numérologie et la cartomancie travaillent avec des données précises (date de naissance, questions posées). La distance ne change rien à la qualité de la lecture, que vous soyez en France, en Belgique, en Suisse ou au Canada.",
  },
  {
    q: "Comment se fait la réservation et le paiement ?",
    a: "Réservation en ligne via Cal.com (https://cal.com/tourma-line) ou par WhatsApp au 06 49 65 31 86. Paiement avant la séance par carte bancaire ou PayPal.",
  },
  {
    q: "Quels sont les tarifs des consultations ?",
    a: "Consultation Guidance Complète (numérologie + cartomancie) : 70€. Consultation Suivi & Année Personnelle : 60€. Guidance par Question : 30€. Soin Lahochi : 60€. Formule Harmonie Intérieure (2 séances) : 120€. Formule Renaissance (3 mois) : 280€ payable en 2 fois. Pack 3 soins Lahochi : 150€.",
  },
  {
    q: "Le soin Lahochi se pratique-t-il à distance ?",
    a: "Oui. Le Lahochi est un soin énergétique à distance : vous êtes allongé(e) chez vous à l'heure convenue, et Line effectue le soin depuis Gerponville. Les effets sur le stress, le sommeil et les tensions sont souvent ressentis dès la première séance.",
  },
  {
    q: "Puis-je avoir un enregistrement de la consultation ?",
    a: "Oui, sur demande, un enregistrement audio de la séance peut vous être envoyé.",
  },
];

function intro() {
  return [
    "# Tourma-Line",
    "",
    "> Tourma-Line est le cabinet de Line, numérologue et cartomancienne à Gerponville (76540, Seine-Maritime, Normandie, France). Elle propose des consultations de numérologie, des guidances de cartomancie et des soins énergétiques Lahochi, en cabinet, à domicile (secteur de Fécamp) ou à distance (France, Belgique, Suisse, Monaco, Luxembourg, Canada).",
    "",
  ];
}

function keyInfo() {
  return [
    "## Informations clés",
    "",
    "- **Praticienne :** Line Simon (Tourma-Line)",
    "- **Adresse du cabinet :** 4 résidence Les Peupliers, 76540 Gerponville, Normandie, France",
    "- **Zones desservies :** Cabinet à Gerponville, déplacements locaux, consultations à distance (toute la France et international francophone)",
    "- **Téléphone :** 06 49 65 31 86",
    "- **Email :** line.simon.ls@gmail.com",
    "- **WhatsApp :** https://wa.me/33649653186",
    "- **Réservation :** https://cal.com/tourma-line",
    "- **Site web :** https://www.tourma-line.fr/",
    "- **Langue :** Français",
    "",
  ];
}

function servicesSection() {
  const lines = ["## Services", ""];
  for (const svc of SERVICES) {
    const meta = SERVICES_META[svc.slug];
    lines.push(`- **${meta.title} :** ${meta.description}`);
  }
  lines.push("");
  lines.push("### Formules d'accompagnement", "");
  lines.push("- **Formule « Harmonie Intérieure » (120€, 2 séances sur 1 mois) :** 1 séance combinée numérologie + cartomancie, 1 soin Lahochi, apaiser les émotions et comprendre les schémas répétitifs.");
  lines.push("- **Formule « Renaissance » (280€, 3 mois, payable en 2 fois) :** 1 séance de démarrage, 3 soins Lahochi (1/mois), suivi énergétique, 1 séance de clôture. Pour guérir traumatismes, deuils, ruptures.");
  lines.push("- **Formule « Soin Lahochi » pack 3 séances (150€) :** travail énergétique profond et suivi.");
  lines.push("");
  return lines;
}

function howItWorks() {
  return [
    "## Comment se passent les séances",
    "",
    "- **Au cabinet :** 4 résidence Les Peupliers, 76540 Gerponville, sur rendez-vous uniquement.",
    "- **À domicile :** secteur de Gerponville, Fécamp, Valmont, Cany-Barville, Ourville-en-Caux, Yvetot, Saint-Riquier-ès-Plains.",
    "- **À distance :** par téléphone ou visioconférence, depuis n'importe où.",
    "",
    "Une séance dure 45 min à 1h45 selon le format. Un enregistrement audio peut être fourni sur demande. Suivi possible entre les séances.",
    "",
  ];
}

function pagesSection() {
  return [
    "## Pages du site",
    "",
    `- [Accueil](${BASE_URL}/) : présentation de Line, de ses services et de son approche.`,
    `- [Prestations](${BASE_URL}/prestations) : toutes les consultations et formules proposées.`,
    `- [Numérologie](${BASE_URL}/numerologie) : consultation de numérologie à Gerponville et à distance.`,
    `- [Cartomancie](${BASE_URL}/cartomancie) : guidance par les cartes et consultations.`,
    `- [Soin Lahochi](${BASE_URL}/soin-lahochi) : soins énergétiques à distance ou en cabinet.`,
    `- [Blog](${BASE_URL}/blog) : articles de fond sur la numérologie, la cartomancie et les soins énergétiques.`,
    `- [Mentions légales](${BASE_URL}/mentions-legales)`,
    `- [Politique de confidentialité](${BASE_URL}/politique-de-confidentialite)`,
    `- [Conditions générales](${BASE_URL}/conditions-generales)`,
    "",
  ];
}

function blogSection() {
  const lines = ["## Contenu du blog", ""];
  for (const post of getBlogPosts()) {
    lines.push(`- [${post.title}](${BASE_URL}/blog/${post.slug})${post.date ? ` (publié le ${post.date})` : ""}`);
  }
  lines.push("");
  return lines;
}

function cityPagesSection() {
  const lines = ["## Pages par ville (consultations à distance)", ""];
  for (const svc of SERVICES) {
    const meta = SERVICES_META[svc.slug];
    lines.push(`### ${meta.title}`);
    lines.push("");
    for (const city of all) {
      lines.push(`- [${meta.title} à ${city.name} (${city.region}, ${city.country})](${BASE_URL}/${svc.slug}-${city.slug})`);
    }
    lines.push("");
  }
  return lines;
}

function faqSection() {
  const lines = ["## Questions fréquentes (FAQ)", ""];
  for (const item of FAQ) {
    lines.push(`**${item.q}**`);
    lines.push("");
    lines.push(item.a);
    lines.push("");
  }
  return lines;
}

function legalSection() {
  return [
    "## Mentions légales",
    "",
    `- [Mentions légales](${BASE_URL}/mentions-legales)`,
    `- [Politique de confidentialité](${BASE_URL}/politique-de-confidentialite)`,
    `- [Conditions générales de vente](${BASE_URL}/conditions-generales)`,
    "",
  ];
}

function contactSection() {
  return [
    "## Contact & réservation",
    "",
    "- **Téléphone / WhatsApp :** 06 49 65 31 86",
    "- **Email :** line.simon.ls@gmail.com",
    "- **Facebook :** https://www.facebook.com/tourma.line.534540",
    "- **Réservation en ligne :** https://cal.com/tourma-line",
    "",
  ];
}

function buildLlmsTxt() {
  return [
    ...intro(),
    ...keyInfo(),
    ...servicesSection(),
    ...howItWorks(),
    ...pagesSection(),
    ...blogSection(),
    ...legalSection(),
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim() + "\n";
}

function buildLlmsFullTxt() {
  return [
    ...intro(),
    ...keyInfo(),
    ...servicesSection(),
    ...howItWorks(),
    ...pagesSection(),
    ...blogSection(),
    ...cityPagesSection(),
    ...faqSection(),
    ...contactSection(),
    ...legalSection(),
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim() + "\n";
}

const llmsTxt = buildLlmsTxt();
const llmsFullTxt = buildLlmsFullTxt();

fs.writeFileSync(path.resolve(publicDir, "llms.txt"), llmsTxt, "utf-8");
fs.writeFileSync(path.resolve(publicDir, "llms-full.txt"), llmsFullTxt, "utf-8");

console.log(`llms.txt généré (${llmsTxt.length} caractères) → public/llms.txt`);
console.log(`llms-full.txt généré (${llmsFullTxt.length} caractères) → public/llms-full.txt`);

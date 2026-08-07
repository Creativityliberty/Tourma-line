import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_URL, SERVICES, getBlogPosts, getCityMeta } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.resolve(rootDir, "public");

const { all } = getCityMeta();

const SERVICES_META = {
  numerologie: {
    title: "Numérologie",
    description:
      "Consultation de numérologie à partir de la date de naissance : chemin de vie, année personnelle, cycles et pistes de réflexion personnalisées. 70€, 1h30 à 1h45.",
    url: `${BASE_URL}/numerologie`,
  },
  cartomancie: {
    title: "Voyance & Cartomancie",
    description:
      "Guidance par les cartes autour de questions personnelles, relationnelles et professionnelles. Consultation au cabinet ou à distance. 70€, 1h30 à 1h45.",
    url: `${BASE_URL}/cartomancie`,
  },
  "soin-lahochi": {
    title: "Soin énergétique Lahochi",
    description:
      "Pratique énergétique de bien-être proposée comme un temps de détente et de recentrage, en cabinet à Gerponville ou à distance. 60€, 45 min à 1h. Ne remplace pas un suivi médical.",
    url: `${BASE_URL}/soin-lahochi`,
  },
};

const FAQ = [
  {
    q: "Comment se déroule une consultation de numérologie ?",
    a: "La date de naissance sert de base à l'étude. Line explore notamment le chemin de vie, l'année personnelle et les cycles, puis échange avec vous sur les sujets que vous souhaitez mettre en perspective. La séance peut se faire au cabinet à Gerponville ou à distance.",
  },
  {
    q: "Les consultations sont-elles disponibles à distance ?",
    a: "Oui. La numérologie et la cartomancie sont proposées par téléphone ou visioconférence pour les personnes qui ne peuvent pas se déplacer au cabinet de Gerponville.",
  },
  {
    q: "Comment se fait la réservation et le paiement ?",
    a: "Réservation en ligne via Cal.com (https://cal.com/tourma-line) ou par WhatsApp au 06 49 65 31 86. Les modalités de paiement sont indiquées lors de la réservation.",
  },
  {
    q: "Quels sont les tarifs des consultations ?",
    a: "Consultation Guidance Complète : 70€. Consultation Suivi & Année Personnelle : 60€. Guidance par Question : 30€. Soin énergétique Lahochi : 60€. Les tarifs à jour sont à vérifier sur la page Prestations ou au moment de la réservation.",
  },
  {
    q: "Le soin Lahochi se pratique-t-il à distance ?",
    a: "Oui, Tourma-Line propose des séances Lahochi à distance. Le Lahochi est présenté comme une pratique énergétique de bien-être ; les ressentis sont personnels et aucun résultat thérapeutique n'est garanti. Il ne remplace pas un diagnostic ou un traitement médical.",
  },
  {
    q: "Puis-je avoir un enregistrement de la consultation ?",
    a: "Oui, sur demande, un enregistrement audio de certaines consultations peut être envoyé.",
  },
];

function intro() {
  return [
    "# Tourma-Line",
    "",
    "> Tourma-Line est le cabinet de Line Simon à Gerponville (76540, Seine-Maritime, Normandie, France). Elle propose des consultations de voyance et cartomancie, de numérologie et des séances énergétiques Lahochi, en cabinet ou à distance.",
    "",
  ];
}

function keyInfo() {
  return [
    "## Informations clés",
    "",
    "- **Praticienne :** Line Simon (Tourma-Line)",
    "- **Activités :** voyante et cartomancienne, numérologue, praticienne en soins énergétiques Lahochi",
    "- **Adresse du cabinet :** 4 résidence Les Peupliers, 76540 Gerponville, Normandie, France",
    "- **Zone locale :** Gerponville, Fécamp, Valmont, Cany-Barville et secteur du Pays de Caux",
    "- **Consultations à distance :** disponibles en français selon la prestation",
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
  lines.push("- **Formule « Harmonie Intérieure » :** association de guidance et d'une séance Lahochi selon la formule proposée au moment de la réservation.");
  lines.push("- **Formule « Renaissance » :** accompagnement sur plusieurs séances combinant guidance et Lahochi ; objectifs et modalités sont présentés comme un accompagnement de bien-être et de réflexion personnelle, sans promesse thérapeutique.");
  lines.push("- **Pack Lahochi :** plusieurs séances énergétiques de bien-être selon les modalités et tarifs en vigueur.");
  lines.push("");
  return lines;
}

function howItWorks() {
  return [
    "## Comment se passent les séances",
    "",
    "- **Au cabinet :** 4 résidence Les Peupliers, 76540 Gerponville, sur rendez-vous.",
    "- **Secteur local :** Gerponville, Fécamp, Valmont, Cany-Barville et communes proches selon les modalités de la prestation.",
    "- **À distance :** par téléphone ou visioconférence pour la guidance ; séance à distance possible pour le Lahochi.",
    "",
    "La durée dépend de la prestation choisie. Les informations à jour sont indiquées sur le site et lors de la réservation.",
    "",
  ];
}

function pagesSection() {
  return [
    "## Pages du site",
    "",
    `- [Accueil](${BASE_URL}/) : présentation de Line Simon, de ses services et de son cabinet à Gerponville.`,
    `- [Prestations](${BASE_URL}/prestations) : consultations et formules proposées.`,
    `- [Numérologie](${BASE_URL}/numerologie) : chemin de vie, année personnelle et cycles.`,
    `- [Voyance & Cartomancie](${BASE_URL}/cartomancie) : guidance par les cartes au cabinet ou à distance.`,
    `- [Soin énergétique Lahochi](${BASE_URL}/soin-lahochi) : pratique énergétique de bien-être au cabinet ou à distance.`,
    `- [Blog](${BASE_URL}/blog) : articles sur la numérologie, la cartomancie et les pratiques de bien-être.`,
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
  const lines = ["## Pages par ville", ""];
  for (const svc of SERVICES) {
    const meta = SERVICES_META[svc.slug];
    lines.push(`### ${meta.title}`);
    lines.push("");
    for (const city of all) {
      lines.push(`- [${meta.title} — ${city.name} (${city.region}, ${city.country})](${BASE_URL}/${svc.slug}-${city.slug})`);
    }
    lines.push("");
  }
  return lines;
}

function faqSection() {
  const lines = ["## Questions fréquentes", ""];
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

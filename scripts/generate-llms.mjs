import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_URL, SERVICES, getBlogPosts } from "./routes.mjs";
import { getPremiumLocalTargets } from "../src/data/localSeoStrategy.mjs";
import { territorialHubs } from "../src/data/territorialHubs.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.resolve(rootDir, "public");

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
    a: "Oui. La numérologie et la cartomancie sont proposées par téléphone ou visioconférence pour les personnes qui ne peuvent pas se déplacer au cabinet de Gerponville. Le Lahochi à distance est proposé comme pratique énergétique de bien-être.",
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
    "- **Zone locale principale :** Gerponville, Fécamp, Valmont, Cany-Barville, Pays de Caux et secteurs validés du littoral cauchois",
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
  return lines;
}

function pagesSection() {
  return [
    "## Pages principales",
    "",
    `- [Accueil](${BASE_URL}/) : présentation de Line Simon, de ses services et de son cabinet à Gerponville.`,
    `- [Prestations](${BASE_URL}/prestations) : consultations et formules proposées.`,
    `- [Numérologie](${BASE_URL}/numerologie) : chemin de vie, année personnelle et cycles.`,
    `- [Voyance & Cartomancie](${BASE_URL}/cartomancie) : guidance par les cartes au cabinet ou à distance.`,
    `- [Soin énergétique Lahochi](${BASE_URL}/soin-lahochi) : pratique énergétique de bien-être au cabinet ou à distance.`,
    `- [Consultation à distance](${BASE_URL}/consultation-a-distance) : voyance, numérologie et Lahochi à distance, Tourma-Line restant basé à Gerponville.`,
    `- [Blog](${BASE_URL}/blog) : guides sur la numérologie, la voyance, la cartomancie et les pratiques de bien-être.`,
    "",
  ];
}

function blogSection() {
  const lines = ["## Guides et articles", ""];
  for (const post of getBlogPosts()) {
    lines.push(`- [${post.title}](${BASE_URL}/blog/${post.slug})${post.date ? ` (publié le ${post.date})` : ""}`);
  }
  lines.push("");
  return lines;
}

function territorySection() {
  const lines = ["## Zones territoriales validées", ""];
  for (const hub of territorialHubs) {
    lines.push(`- [${hub.label}](${BASE_URL}${hub.path}) : ${hub.metaDescription}`);
  }
  lines.push("");
  return lines;
}

function premiumLocalSection() {
  const lines = ["## Pages locales prioritaires", ""];
  const targets = getPremiumLocalTargets();
  for (const target of targets) {
    const meta = SERVICES_META[target.serviceSlug];
    if (!meta) continue;
    lines.push(`- [${meta.title} — près de ${target.cityLabel}](${BASE_URL}/${target.serviceSlug}-${target.citySlug})`);
  }
  lines.push("");
  lines.push("Les autres communes de Seine-Maritime sont gérées par la base géographique et les hubs territoriaux ; elles ne disposent pas automatiquement d'une page indexable dédiée.", "");
  return lines;
}

function faqSection() {
  const lines = ["## Questions fréquentes", ""];
  for (const item of FAQ) {
    lines.push(`**${item.q}**`, "", item.a, "");
  }
  return lines;
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

function legalSection() {
  return [
    "## Informations légales",
    "",
    `- [Mentions légales](${BASE_URL}/mentions-legales)`,
    `- [Politique de confidentialité](${BASE_URL}/politique-de-confidentialite)`,
    `- [Conditions générales](${BASE_URL}/conditions-generales)`,
    "",
  ];
}

function buildLlmsTxt() {
  return [
    ...intro(),
    ...keyInfo(),
    ...servicesSection(),
    ...pagesSection(),
    ...territorySection(),
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
    ...pagesSection(),
    ...territorySection(),
    ...premiumLocalSection(),
    ...blogSection(),
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

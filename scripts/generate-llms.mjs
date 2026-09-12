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
      "Consultation de numérologie à partir de la date de naissance : chemin de vie, année personnelle et cycles. Cabinet à Gerponville ou à distance selon la prestation.",
    url: `${BASE_URL}/numerologie`,
  },
  cartomancie: {
    title: "Cartomancie",
    description:
      "Guidance par les cartes autour de questions personnelles, relationnelles et professionnelles. Cabinet à Gerponville ou à distance selon la prestation.",
    url: `${BASE_URL}/cartomancie`,
  },
  "soin-lahochi": {
    title: "Lahochi",
    description:
      "Pratique de bien-être proposée comme un temps de détente et de recentrage, au cabinet à Gerponville ou à distance selon la prestation. Ne remplace pas un suivi médical.",
    url: `${BASE_URL}/soin-lahochi`,
  },
};

const FAQ = [
  {
    q: "Comment se déroule une consultation de numérologie ?",
    a: "La date de naissance sert de base à l'étude. Line explore notamment le chemin de vie, l'année personnelle et les cycles, puis échange avec vous sur les sujets que vous souhaitez approfondir. La séance peut se faire au cabinet à Gerponville ou à distance selon la prestation.",
  },
  {
    q: "Les consultations sont-elles disponibles à distance ?",
    a: "Oui. Certaines consultations de numérologie et de cartomancie sont proposées à distance. Le Lahochi à distance est proposé comme pratique de bien-être selon la prestation choisie.",
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
    q: "Le Lahochi se pratique-t-il à distance ?",
    a: "Oui, certaines séances Lahochi sont proposées à distance. Le Lahochi est présenté comme une pratique de bien-être complémentaire et ne remplace pas un diagnostic ou un traitement médical.",
  },
];

function intro() {
  return [
    "# Tourma-Line",
    "",
    "> Tourma-Line est le cabinet de Line à Gerponville (76540, Seine-Maritime, Normandie, France). Je propose des consultations de cartomancie et de numérologie ainsi que des séances Lahochi, au cabinet ou à distance selon la prestation.",
    "",
  ];
}

function keyInfo() {
  return [
    "## Informations clés",
    "",
    "- **Praticienne :** Line (Tourma-Line)",
    "- **Activités :** cartomancienne, numérologue, praticienne Lahochi",
    "- **Adresse du cabinet :** 4 résidence Les Peupliers, 76540 Gerponville, Normandie, France",
    "- **Zone locale principale :** Gerponville, Fécamp, Valmont, Cany-Barville, Pays de Caux et secteurs voisins",
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
    `- [Accueil](${BASE_URL}/) : présentation de Line, de ses pratiques et du cabinet Tourma-Line à Gerponville.`,
    `- [Prestations](${BASE_URL}/prestations) : consultations et formules proposées.`,
    `- [Numérologie](${BASE_URL}/numerologie) : chemin de vie, année personnelle et cycles.`,
    `- [Cartomancie](${BASE_URL}/cartomancie) : guidance par les cartes au cabinet ou à distance selon la prestation.`,
    `- [Lahochi](${BASE_URL}/soin-lahochi) : pratique de bien-être au cabinet ou à distance selon la prestation.`,
    `- [Consultation à distance](${BASE_URL}/consultation-a-distance) : modalités à distance pour les prestations concernées.`,
    `- [Blog](${BASE_URL}/blog) : guides autour de la numérologie, de la cartomancie et du bien-être.`,
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
  const lines = ["## Secteurs autour du cabinet", ""];
  for (const hub of territorialHubs) {
    lines.push(`- [${hub.label}](${BASE_URL}${hub.path}) : ${hub.metaDescription}`);
  }
  lines.push("");
  return lines;
}

function premiumLocalSection() {
  const lines = ["## Pages locales", ""];
  const targets = getPremiumLocalTargets();
  for (const target of targets) {
    const meta = SERVICES_META[target.serviceSlug];
    if (!meta) continue;
    lines.push(`- [${meta.title} — près de ${target.cityLabel}](${BASE_URL}/${target.serviceSlug}-${target.citySlug})`);
  }
  lines.push("");
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

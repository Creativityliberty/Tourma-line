import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getRoutes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const blogDir = path.join(rootDir, "blog_markdowns");

const required = {
  "choisir-numerologue-consultation": {
    links: ["/numerologie", "/blog/calcul-chemin-de-vie-numerologie"],
    phrases: ["questions à poser", "signaux d'alerte"],
  },
  "annee-personnelle-numerologie": {
    links: ["/numerologie", "/blog/calcul-chemin-de-vie-numerologie"],
    phrases: ["année civile", "anniversaire", "2026"],
  },
  "choisir-voyante-cartomancienne-serieuse": {
    links: ["/cartomancie"],
    phrases: ["libre arbitre", "résultat garanti", "prix"],
  },
  "consulter-seine-maritime-cabinet-distance": {
    links: [
      "/zones/pays-de-caux",
      "/zones/fecamp-caux-littoral",
      "/zones/cote-d-albatre",
      "/zones/caux-seine-agglo",
      "/consultation-a-distance",
    ],
    phrases: ["Gerponville", "cabinet", "à distance"],
  },
};

const forbiddenCityLandingLinks = [
  "/numerologie-rouen",
  "/numerologie-le-havre",
  "/numerologie-dieppe",
  "/cartomancie-rouen",
  "/cartomancie-le-havre",
  "/cartomancie-dieppe",
  "/soin-lahochi-rouen",
  "/soin-lahochi-le-havre",
  "/soin-lahochi-dieppe",
];

const forbiddenRemoteOfficeClaims = [
  "cabinet à rouen",
  "cabinet de rouen",
  "cabinet au havre",
  "cabinet du havre",
  "cabinet à dieppe",
  "cabinet de dieppe",
];

function field(content, name) {
  const match = content.match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, "m"));
  return match ? match[1].trim() : "";
}

const files = fs
  .readdirSync(blogDir)
  .filter((file) => file.endsWith(".md"))
  .filter((file) => !file.includes("PLAN") && !file.includes("PROGRAMME"));

const postsBySlug = new Map();
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), "utf8");
  const slug = field(content, "slug");
  if (!slug) continue;
  const posts = postsBySlug.get(slug) ?? [];
  posts.push({ file, content });
  postsBySlug.set(slug, posts);
}

for (const [slug, contract] of Object.entries(required)) {
  const matches = postsBySlug.get(slug) ?? [];
  assert.equal(matches.length, 1, `Sprint 7B article must exist exactly once: ${slug}`);

  const { content, file } = matches[0];
  const lower = content.toLocaleLowerCase("fr-FR");

  assert.equal(field(content, "author"), "Line Simon", `${file} must declare author: Line Simon`);
  for (const metaField of ["date", "readTime", "category", "description"]) {
    assert(field(content, metaField), `${file} must declare ${metaField}`);
  }

  for (const link of contract.links) {
    assert(content.includes(link), `${file} must link to ${link}`);
  }
  for (const phrase of contract.phrases) {
    assert(lower.includes(phrase.toLocaleLowerCase("fr-FR")), `${file} must cover the phrase/topic: ${phrase}`);
  }

  for (const route of forbiddenCityLandingLinks) {
    assert(!content.includes(route), `${file} must not link to HOLD local landing ${route}`);
  }

  for (const riskyPhrase of ["guérison garantie", "prédiction certaine", "guérit"]) {
    assert(!lower.includes(riskyPhrase), `${file} contains prohibited guaranteed/medical wording: ${riskyPhrase}`);
  }
  if (slug !== "choisir-voyante-cartomancienne-serieuse") {
    assert(!lower.includes("résultat garanti"), `${file} must not use guaranteed-result wording`);
  }
}

const territoryArticle = postsBySlug.get("consulter-seine-maritime-cabinet-distance")?.[0]?.content ?? "";
const territoryLower = territoryArticle.toLocaleLowerCase("fr-FR");
for (const claim of forbiddenRemoteOfficeClaims) {
  assert(!territoryLower.includes(claim), `Territorial guide must not claim a remote office: ${claim}`);
}

const routes = getRoutes();
for (const slug of Object.keys(required)) {
  assert(routes.includes(`/blog/${slug}`), `Generated routes must include /blog/${slug}`);
}

const servicePage = fs.readFileSync(path.join(rootDir, "src/pages/ServicePage.tsx"), "utf8");
const numerologiePage = fs.readFileSync(path.join(rootDir, "src/pages/NumerologiePage.tsx"), "utf8");
const cartomancePage = fs.readFileSync(path.join(rootDir, "src/pages/CartomancePage.tsx"), "utf8");
const territoryHubPage = fs.readFileSync(path.join(rootDir, "src/pages/TerritoryHubPage.tsx"), "utf8");
const blogPostPage = fs.readFileSync(path.join(rootDir, "src/pages/BlogPostPage.tsx"), "utf8");

assert(servicePage.includes("Guides pour aller plus loin"), "ServicePage must expose the reciprocal editorial guide section");
assert(numerologiePage.includes("choisir-numerologue-consultation"), "NumerologiePage must link to the choosing-a-numerologist guide");
assert(numerologiePage.includes("annee-personnelle-numerologie"), "NumerologiePage must link to the personal-year guide");
assert(cartomancePage.includes("choisir-voyante-cartomancienne-serieuse"), "CartomancePage must link to the voyance trust guide");
assert(territoryHubPage.includes("consulter-seine-maritime-cabinet-distance"), "TerritoryHubPage must link to the Seine-Maritime decision guide");
assert(blogPostPage.includes("post.author") && blogPostPage.includes("#line-simon"), "BlogPostPage must identify Line Simon from article metadata and entity schema");

console.log("Editorial authority verification passed.");

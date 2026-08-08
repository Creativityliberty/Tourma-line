import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getRoutes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const sitemapGenerator = fs.readFileSync(path.join(rootDir, "scripts/generate-sitemap.mjs"), "utf8");
const llmsGenerator = fs.readFileSync(path.join(rootDir, "scripts/generate-llms.mjs"), "utf8");
const robots = fs.readFileSync(path.join(rootDir, "public/robots.txt"), "utf8");
const header = fs.readFileSync(path.join(rootDir, "src/components/layout/Header.tsx"), "utf8");
const footer = fs.readFileSync(path.join(rootDir, "src/components/layout/Footer.tsx"), "utf8");

// Sitemap must be generated from the exact indexable route registry, never from every known city.
assert(sitemapGenerator.includes("getRoutes"), "Sitemap generator must use getRoutes() as the source of indexable URLs");
assert(!sitemapGenerator.includes("getCityMeta"), "Sitemap generator must not enumerate all known cities");
assert(!sitemapGenerator.includes("national") && !sitemapGenerator.includes("international"), "Sitemap must not re-add national/international city routes");

// All indexable routes should be eligible for sitemap output, including hubs, distance page and new editorial guides.
for (const route of [
  "/consultation-a-distance",
  "/zones/pays-de-caux",
  "/zones/fecamp-caux-littoral",
  "/zones/cote-d-albatre",
  "/zones/caux-seine-agglo",
  "/blog/choisir-numerologue-consultation",
  "/blog/annee-personnelle-numerologie",
  "/blog/choisir-voyante-cartomancienne-serieuse",
  "/blog/consulter-seine-maritime-cabinet-distance",
]) {
  assert(getRoutes().includes(route), `Indexable route registry must include ${route}`);
}

// llms-full should describe the curated crawl surface, not every historical/noindex city page.
assert(llmsGenerator.includes("getPremiumLocalTargets"), "llms generator must use premium local targets");
assert(llmsGenerator.includes("territorialHubs"), "llms generator must expose validated territory hubs");
assert(!llmsGenerator.includes("for (const city of local)"), "llms-full must not enumerate every local CityPage indiscriminately");

// robots.txt should stay simple and expose the canonical sitemap.
assert(robots.includes("User-agent: *"), "robots.txt must define a default crawler policy");
assert(robots.includes("Allow: /"), "robots.txt must allow public crawling");
assert(robots.includes("Sitemap: https://www.tourma-line.fr/sitemap.xml"), "robots.txt must declare the canonical sitemap URL");
assert(!/^Disallow:\s*\/$/m.test(robots), "robots.txt must not block the whole site");

// Sitelinks are automated by Google; our controllable inputs are a logical, crawlable core navigation.
const sitelinkCandidates = [
  ["/prestations", "Prestations"],
  ["/cartomancie", "Voyance"],
  ["/numerologie", "Numérologie"],
  ["/soin-lahochi", "Énergétique"],
  ["/consultation-a-distance", "À distance"],
  ["/blog", "Blog"],
];
for (const [href, label] of sitelinkCandidates) {
  assert(header.includes(`href: \"${href}\"`) || header.includes(`href: "${href}"`), `Header must expose sitelink candidate ${label}`);
}
for (const href of ["/prestations", "/cartomancie", "/numerologie", "/soin-lahochi", "/consultation-a-distance", "/blog"]) {
  assert(footer.includes(`to=\"${href}\"`) || footer.includes(`to="${href}"`), `Footer must reinforce core page ${href}`);
}

console.log("Crawl surface / sitemap / robots / sitelink-readiness verification passed.");

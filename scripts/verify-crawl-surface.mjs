import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getRoutes, HIDDEN_BLOG_SLUGS } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const sitemapGenerator = fs.readFileSync(path.join(rootDir, "scripts/generate-sitemap.mjs"), "utf8");
const llmsGenerator = fs.readFileSync(path.join(rootDir, "scripts/generate-llms.mjs"), "utf8");
const robots = fs.readFileSync(path.join(rootDir, "public/robots.txt"), "utf8");
const header = fs.readFileSync(path.join(rootDir, "src/components/layout/Header.tsx"), "utf8");
const footer = fs.readFileSync(path.join(rootDir, "src/components/layout/Footer.tsx"), "utf8");

assert(sitemapGenerator.includes("getRoutes"), "Sitemap generator must use getRoutes() as the source of indexable URLs");
assert(!sitemapGenerator.includes("getCityMeta"), "Sitemap generator must not enumerate all known cities");
assert(!sitemapGenerator.includes("national") && !sitemapGenerator.includes("international"), "Sitemap must not re-add national/international city routes");

for (const route of [
  "/prestations",
  "/avis",
  "/rendezvous",
  "/consultation-a-distance",
  "/zones/pays-de-caux",
  "/zones/fecamp-caux-littoral",
  "/zones/cote-d-albatre",
  "/zones/caux-seine-agglo",
  "/blog/choisir-numerologue-consultation",
  "/blog/annee-personnelle-numerologie",
  "/blog/consulter-seine-maritime-cabinet-distance",
]) {
  assert(getRoutes().includes(route), `Indexable route registry must include ${route}`);
}
for (const slug of HIDDEN_BLOG_SLUGS) {
  assert(!getRoutes().includes(`/blog/${slug}`), `Misleading legacy article must stay out of the public crawl surface: ${slug}`);
}

assert(llmsGenerator.includes("getPremiumLocalTargets"), "llms generator must use premium local targets");
assert(llmsGenerator.includes("territorialHubs"), "llms generator must expose validated territory hubs");
assert(!llmsGenerator.includes("for (const city of local)"), "llms-full must not enumerate every local CityPage indiscriminately");

assert(robots.includes("User-agent: *"), "robots.txt must define a default crawler policy");
assert(robots.includes("Allow: /"), "robots.txt must allow public crawling");
assert(robots.includes("Sitemap: https://www.tourma-line.fr/sitemap.xml"), "robots.txt must declare the canonical sitemap URL");
assert(!/^Disallow:\s*\/$/m.test(robots), "robots.txt must not block the whole site");

for (const [href, label] of [
  ["/", "Accueil"],
  ["/prestations", "Prestations"],
  ["/avis", "Avis clients"],
]) {
  assert(header.includes(`href: \"${href}\"`) || header.includes(`href: "${href}"`), `Header must expose primary visitor link ${label}`);
}
assert(header.includes("Prendre rendez-vous"), "Header must expose the primary booking CTA");

for (const href of ["/prestations", "/avis", "/rendezvous", "/cartomancie", "/numerologie", "/soin-lahochi", "/consultation-a-distance", "/blog"]) {
  assert(footer.includes(`to=\"${href}\"`) || footer.includes(`to="${href}"`), `Footer must reinforce core page ${href}`);
}
assert(!/\bvoyance\b|\bvoyante\b|\bmédium\b|\bmedium\b|Line Simon/i.test(footer), "Footer must use truthful public service names and identity");

console.log("Crawl surface / sitemap / robots / navigation verification passed.");

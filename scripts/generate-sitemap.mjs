import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE_URL,
  SERVICES,
  SITE_LAST_MOD,
  getBlogPosts,
  getCityMeta,
} from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const entries = [];

function add(loc, lastmod = null) {
  entries.push({ loc, lastmod });
}

// Pages principales dont le contenu a été substantiellement mis à jour.
add(`${BASE_URL}/`, SITE_LAST_MOD);
add(`${BASE_URL}/prestations`, SITE_LAST_MOD);
add(`${BASE_URL}/numerologie`, SITE_LAST_MOD);
add(`${BASE_URL}/cartomancie`, SITE_LAST_MOD);
add(`${BASE_URL}/soin-lahochi`, SITE_LAST_MOD);

// Blog : la date de publication est utilisée lorsqu'elle est disponible.
add(`${BASE_URL}/blog`, SITE_LAST_MOD);
for (const post of getBlogPosts()) {
  add(`${BASE_URL}/blog/${post.slug}`, post.date || null);
}

// Pages villes : le template et le positionnement ont été mis à jour à SITE_LAST_MOD.
const { local, national, international } = getCityMeta();
for (const cities of [local, national, international]) {
  for (const city of cities) {
    for (const service of SERVICES) {
      add(`${BASE_URL}/${service.slug}-${city.slug}`, SITE_LAST_MOD);
    }
  }
}

// Pages légales : pas de lastmod artificiel si leur contenu n'a pas changé.
for (const route of [
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
]) {
  add(`${BASE_URL}${route}`);
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildXml() {
  const urls = entries
    .map((entry) => {
      const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "";
      return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const xml = buildXml();
const rootTarget = path.resolve(rootDir, "sitemap.xml");
const publicTarget = path.resolve(rootDir, "public", "sitemap.xml");

fs.writeFileSync(rootTarget, xml, "utf-8");
fs.writeFileSync(publicTarget, xml, "utf-8");

console.log(`Sitemap généré : ${entries.length} URLs`);
console.log(`  → ${rootTarget}`);
console.log(`  → ${publicTarget}`);

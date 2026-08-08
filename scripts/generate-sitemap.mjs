import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE_URL,
  SITE_LAST_MOD,
  getBlogPosts,
  getRoutes,
} from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const legalRoutes = new Set([
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
]);

const blogDateByRoute = new Map(
  getBlogPosts().map((post) => [`/blog/${post.slug}`, post.date || null])
);

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function lastModifiedForRoute(route) {
  if (legalRoutes.has(route)) return null;
  if (blogDateByRoute.has(route)) return blogDateByRoute.get(route);
  return SITE_LAST_MOD;
}

const entries = [...new Set(getRoutes())].map((route) => ({
  loc: `${BASE_URL}${route === "/" ? "/" : route}`,
  lastmod: lastModifiedForRoute(route),
}));

function buildXml() {
  const urls = entries
    .map((entry) => {
      const lastmod = entry.lastmod
        ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`
        : "";
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

console.log(`Sitemap généré depuis la surface indexable : ${entries.length} URLs`);
console.log(`  → ${rootTarget}`);
console.log(`  → ${publicTarget}`);

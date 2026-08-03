import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE_URL,
  STATIC_ROUTES,
  SERVICES,
  SITE_LAST_MOD,
  getBlogPosts,
  getCityMeta,
} from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const entries = [];

// Page principale
entries.push({ loc: `${BASE_URL}/`, lastmod: SITE_LAST_MOD, changefreq: "weekly", priority: "1.0" });

// Pages de service
const serviceRoutes = {
  "/prestations": { changefreq: "monthly", priority: "0.9" },
  "/numerologie": { changefreq: "monthly", priority: "0.9" },
  "/cartomancie": { changefreq: "monthly", priority: "0.9" },
  "/soin-lahochi": { changefreq: "monthly", priority: "0.9" },
};
for (const [route, conf] of Object.entries(serviceRoutes)) {
  entries.push({ loc: `${BASE_URL}${route}`, lastmod: SITE_LAST_MOD, changefreq: conf.changefreq, priority: conf.priority });
}

// Blog (liste + articles)
entries.push({ loc: `${BASE_URL}/blog`, lastmod: SITE_LAST_MOD, changefreq: "weekly", priority: "0.9" });
for (const post of getBlogPosts()) {
  entries.push({
    loc: `${BASE_URL}/blog/${post.slug}`,
    lastmod: post.date || SITE_LAST_MOD,
    changefreq: "weekly",
    priority: "0.85",
  });
}

// Pages villes (générées depuis citiesData.mjs — source unique)
const { local, national, international } = getCityMeta();
const priorityByType = { local: "0.8", national: "0.75", international: "0.7" };
const cityGroups = [
  ["local", local],
  ["national", national],
  ["international", international],
];
for (const [type, cities] of cityGroups) {
  for (const city of cities) {
    for (const svc of SERVICES) {
      entries.push({
        loc: `${BASE_URL}/${svc.slug}-${city.slug}`,
        lastmod: SITE_LAST_MOD,
        changefreq: "monthly",
        priority: priorityByType[type],
      });
    }
  }
}

// Pages légales
const legalRoutes = ["/mentions-legales", "/politique-de-confidentialite", "/conditions-generales"];
for (const route of legalRoutes) {
  entries.push({ loc: `${BASE_URL}${route}`, lastmod: SITE_LAST_MOD, changefreq: "yearly", priority: "0.3" });
}

function buildXml() {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const xml = buildXml();
const rootTarget = path.resolve(rootDir, "sitemap.xml");
const publicTarget = path.resolve(rootDir, "public", "sitemap.xml");

fs.writeFileSync(rootTarget, xml, "utf-8");
fs.writeFileSync(publicTarget, xml, "utf-8");

console.log(`Sitemap généré : ${entries.length} URLs`);
console.log(`  → ${rootTarget}`);
console.log(`  → ${publicTarget}`);

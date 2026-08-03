import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allCities, localCities, nationalCities, internationalCities } from "../src/data/citiesData.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

export const BASE_URL = "https://www.tourma-line.fr";

// Date de dernière modification du contenu (stable, à mettre à jour manuellement lors d'une vraie mise à jour)
export const SITE_LAST_MOD = "2026-08-03";

export const SERVICES = [
  { slug: "numerologie", label: "Numérologie" },
  { slug: "cartomancie", label: "Cartomancie" },
  { slug: "soin-lahochi", label: "Soin Lahochi" },
];

export const STATIC_ROUTES = [
  "/",
  "/prestations",
  "/numerologie",
  "/cartomancie",
  "/soin-lahochi",
  "/blog",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
];

function getBlogSlugs() {
  const dir = path.resolve(rootDir, "blog_markdowns");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const slugs = [];
  for (const file of files) {
    if (file.includes("PLAN") || file.includes("PROGRAMME")) continue;
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const match = content.match(/^slug:\s*["']?([^"'#\n]+)/m);
    if (match) {
      slugs.push(match[1].trim());
    }
  }
  return slugs;
}

function getBlogPostsMeta() {
  const dir = path.resolve(rootDir, "blog_markdowns");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = [];
  for (const file of files) {
    if (file.includes("PLAN") || file.includes("PROGRAMME")) continue;
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const field = (name) => {
      const m = content.match(new RegExp(`^${name}:\\s*["']?([^"'#\\n]+)`, "m"));
      return m ? m[1].trim() : "";
    };
    const slug = field("slug");
    if (!slug) continue;
    posts.push({
      slug,
      title: field("title") || slug,
      description: field("description") || "",
      date: field("date") || "",
      author: field("author") || "Line",
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPosts() {
  return getBlogPostsMeta();
}

export function getBlogSlugSet() {
  return new Set(getBlogSlugs());
}

export function getCityRoutes() {
  return allCities.flatMap((city) =>
    SERVICES.map((svc) => `/${svc.slug}-${city.slug}`)
  );
}

export function getRoutes() {
  const blogSlugs = getBlogSlugs();
  return [
    ...STATIC_ROUTES,
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...getCityRoutes(),
  ];
}

export function getCityMeta() {
  return {
    all: allCities,
    local: localCities,
    national: nationalCities,
    international: internationalCities,
  };
}

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allCities, localCities, nationalCities, internationalCities } from "../src/data/citiesData.mjs";
import { territorialHubs } from "../src/data/territorialHubs.mjs";
import { getPremiumLocalTargets } from "../src/data/localSeoStrategy.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

export const BASE_URL = "https://www.tourma-line.fr";

// Date de dernière modification des pages principales et des templates villes.
// À mettre à jour uniquement lors d'une modification substantielle de ces contenus.
export const SITE_LAST_MOD = "2026-08-08";

export const SERVICES = [
  { slug: "numerologie", label: "Numérologie" },
  { slug: "cartomancie", label: "Voyance & Cartomancie" },
  { slug: "soin-lahochi", label: "Soin énergétique Lahochi" },
];

export const TERRITORY_ROUTES = territorialHubs.map((hub) => hub.path);

export const STATIC_ROUTES = [
  "/",
  "/prestations",
  "/numerologie",
  "/cartomancie",
  "/soin-lahochi",
  "/consultation-a-distance",
  ...TERRITORY_ROUTES,
  "/blog",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
];

function getBlogSlugs() {
  const dir = path.resolve(rootDir, "blog_markdowns");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
  const slugs = [];

  for (const file of files) {
    if (file.includes("PLAN") || file.includes("PROGRAMME")) continue;
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const match = content.match(/^slug:\s*["']?([^"'#\n]+)/m);
    if (match) slugs.push(match[1].trim());
  }

  return slugs;
}

function getBlogPostsMeta() {
  const dir = path.resolve(rootDir, "blog_markdowns");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
  const posts = [];

  for (const file of files) {
    if (file.includes("PLAN") || file.includes("PROGRAMME")) continue;
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const field = (name) => {
      const match = content.match(new RegExp(`^${name}:\\s*["']?([^"'#\\n]+)`, "m"));
      return match ? match[1].trim() : "";
    };
    const slug = field("slug");
    if (!slug) continue;

    posts.push({
      slug,
      title: field("title") || slug,
      description: field("description") || "",
      date: field("date") || "",
      author: field("author") || "Line Simon",
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

// Routes runtime : les anciennes pages locales restent accessibles pour conserver
// les URLs historiques et le maillage, même lorsqu'elles ne sont plus indexables.
export function getCityRoutes() {
  return localCities.flatMap((city) =>
    SERVICES.map((service) => `/${service.slug}-${city.slug}`)
  );
}

// Routes réellement proposées à Google : seulement les landings locales qui ont
// obtenu un signal Tier A dans le moteur SEO. Les Tier B/C sont absorbées par les hubs.
export function getIndexableCityRoutes() {
  return getPremiumLocalTargets().map(
    (target) => `/${target.serviceSlug}-${target.citySlug}`
  );
}

export function getRoutes() {
  const blogSlugs = getBlogSlugs();
  return [
    ...STATIC_ROUTES,
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...getIndexableCityRoutes(),
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

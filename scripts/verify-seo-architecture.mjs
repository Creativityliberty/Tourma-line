import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  STATIC_ROUTES,
  SERVICES,
  getCityRoutes,
} from "./routes.mjs";
import {
  localCities,
  nationalCities,
  internationalCities,
} from "../src/data/citiesData.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const appSource = fs.readFileSync(path.join(rootDir, "App.tsx"), "utf8");
const vercelConfig = JSON.parse(fs.readFileSync(path.join(rootDir, "vercel.json"), "utf8"));

assert(
  STATIC_ROUTES.includes("/consultation-a-distance"),
  "STATIC_ROUTES must include /consultation-a-distance"
);

const cityRoutes = getCityRoutes();
const expectedLocalRouteCount = localCities.length * SERVICES.length;
assert.equal(
  cityRoutes.length,
  expectedLocalRouteCount,
  `Only local city/service routes should be generated (${expectedLocalRouteCount} expected)`
);

for (const city of [...nationalCities, ...internationalCities]) {
  for (const service of SERVICES) {
    assert(
      !cityRoutes.includes(`/${service.slug}-${city.slug}`),
      `Remote city route must not be generated: /${service.slug}-${city.slug}`
    );
  }
}

assert(
  appSource.includes('path="/consultation-a-distance"'),
  "App.tsx must expose /consultation-a-distance"
);
assert(
  appSource.includes("localCities.flatMap"),
  "App.tsx city routes must be generated from localCities only"
);

assert(
  Array.isArray(vercelConfig.redirects),
  "vercel.json must define standard redirects"
);

const redirectMap = new Map(
  vercelConfig.redirects.map((redirect) => [
    redirect.source,
    { destination: redirect.destination, permanent: redirect.permanent },
  ])
);

for (const city of [...nationalCities, ...internationalCities]) {
  for (const service of SERVICES) {
    const source = `/${service.slug}-${city.slug}`;
    const redirect = redirectMap.get(source);
    assert(redirect, `Missing permanent redirect for ${source}`);
    assert.equal(
      redirect.destination,
      "/consultation-a-distance",
      `Wrong destination for ${source}`
    );
    assert.equal(redirect.permanent, true, `${source} must be permanent`);
  }
}

const legacyHomeRoutes = {
  "/services": "/prestations",
  "/consultations": "/prestations",
  "/formules": "/prestations",
  "/bienfaits": "/",
  "/avis": "/",
  "/temoignages": "/",
  "/a-propos": "/",
  "/about": "/",
  "/faq": "/",
  "/contact": "/",
  "/rendezvous": "/",
};

for (const [source, destination] of Object.entries(legacyHomeRoutes)) {
  const redirect = redirectMap.get(source);
  assert(redirect, `Missing permanent redirect ${source} -> ${destination}`);
  assert.equal(redirect.destination, destination, `Wrong destination for ${source}`);
  assert.equal(redirect.permanent, true, `${source} must be permanent`);
}

const consultationPagePath = path.join(rootDir, "src/pages/ConsultationDistancePage.tsx");
assert(fs.existsSync(consultationPagePath), "ConsultationDistancePage.tsx must exist");
const consultationPage = fs.readFileSync(consultationPagePath, "utf8");
assert(
  consultationPage.includes("Consultation à distance") &&
    consultationPage.includes("Voyance") &&
    consultationPage.includes("Numérologie") &&
    consultationPage.includes("Lahochi"),
  "Distance page must clearly cover the three core service families"
);

const cityPagePath = path.join(rootDir, "src/pages/CityPage.tsx");
const cityPage = fs.readFileSync(cityPagePath, "utf8");
assert(
  cityPage.includes("fecampPremiumContent"),
  "CityPage must define dedicated premium content for Fécamp"
);
assert(
  cityPage.includes("Fécamp Caux Littoral") &&
    cityPage.includes("environ 15 km") &&
    cityPage.includes("environ 20 minutes"),
  "Fécamp page must include useful local access context"
);
assert(
  cityPage.includes("Voyante & cartomancienne près de Fécamp") &&
    cityPage.includes("Numérologue près de Fécamp") &&
    cityPage.includes("Énergéticienne près de Fécamp"),
  "Fécamp premium content must cover the three commercial service intents"
);
assert(
  cityPage.includes("Itinéraire Fécamp → Gerponville"),
  "Fécamp premium page must expose a useful directions CTA"
);

console.log("SEO architecture verification passed.");

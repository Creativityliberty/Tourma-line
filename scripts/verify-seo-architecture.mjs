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

assert.equal(
  vercelConfig.bulkRedirectsPath,
  "redirects.csv",
  "vercel.json must point bulkRedirectsPath to redirects.csv"
);

const redirectsPath = path.join(rootDir, "redirects.csv");
assert(fs.existsSync(redirectsPath), "redirects.csv must exist");
const redirects = fs.readFileSync(redirectsPath, "utf8");
assert(
  redirects.startsWith("source,destination,permanent\n"),
  "redirects.csv must use Vercel bulk redirect headers"
);

for (const city of [...nationalCities, ...internationalCities]) {
  for (const service of SERVICES) {
    const source = `/${service.slug}-${city.slug}`;
    assert(
      redirects.includes(`${source},/consultation-a-distance,true`),
      `Missing permanent redirect for ${source}`
    );
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
  assert(
    redirects.includes(`${source},${destination},true`),
    `Missing permanent redirect ${source} -> ${destination}`
  );
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

console.log("SEO architecture verification passed.");

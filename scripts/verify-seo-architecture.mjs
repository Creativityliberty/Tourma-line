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

assert(STATIC_ROUTES.includes("/consultation-a-distance"), "STATIC_ROUTES must include /consultation-a-distance");

const cityRoutes = getCityRoutes();
const expectedLocalRouteCount = localCities.length * SERVICES.length;
assert.equal(cityRoutes.length, expectedLocalRouteCount, `Only local city/service routes should be generated (${expectedLocalRouteCount} expected)`);

for (const city of [...nationalCities, ...internationalCities]) {
  for (const service of SERVICES) {
    assert(!cityRoutes.includes(`/${service.slug}-${city.slug}`), `Remote city route must not be generated: /${service.slug}-${city.slug}`);
  }
}

assert(appSource.includes('path="/consultation-a-distance"'), "App.tsx must expose /consultation-a-distance");
assert(appSource.includes("localCities.flatMap"), "App.tsx city routes must be generated from localCities only");
assert(Array.isArray(vercelConfig.redirects), "vercel.json must define standard redirects");

const redirectMap = new Map(vercelConfig.redirects.map((redirect) => [redirect.source, { destination: redirect.destination, permanent: redirect.permanent }]));
for (const city of [...nationalCities, ...internationalCities]) {
  for (const service of SERVICES) {
    const source = `/${service.slug}-${city.slug}`;
    const redirect = redirectMap.get(source);
    assert(redirect, `Missing permanent redirect for ${source}`);
    assert.equal(redirect.destination, "/consultation-a-distance", `Wrong destination for ${source}`);
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
  consultationPage.includes("Consultation à distance") && consultationPage.includes("Voyance") && consultationPage.includes("Numérologie") && consultationPage.includes("Lahochi"),
  "Distance page must clearly cover the three core service families"
);

const cityPagePath = path.join(rootDir, "src/pages/CityPage.tsx");
const cityPage = fs.readFileSync(cityPagePath, "utf8");
assert(cityPage.includes("fecampPremiumContent"), "CityPage must define dedicated premium content for Fécamp");
assert(
  cityPage.includes("Fécamp Caux Littoral") && cityPage.includes("environ 15 km") && cityPage.includes("environ 20 minutes"),
  "Fécamp page must include useful local access context"
);
assert(
  cityPage.includes("Voyante & cartomancienne près de Fécamp") && cityPage.includes("Numérologue près de Fécamp") && cityPage.includes("Énergéticienne près de Fécamp"),
  "Fécamp premium content must cover the three commercial service intents"
);
assert(cityPage.includes("Itinéraire Fécamp → Gerponville"), "Fécamp premium page must expose a useful directions CTA");

const localSeoStrategyPath = path.join(rootDir, "src/data/localSeoStrategy.mjs");
assert(fs.existsSync(localSeoStrategyPath), "Sprint 4 must define src/data/localSeoStrategy.mjs before premiumising more local pages");
const { getLocalSeoDecision, getPremiumLocalTargets } = await import("../src/data/localSeoStrategy.mjs");

const expectedSprint4 = {
  valmont: { cartomancie: ["A", 90], numerologie: ["A", 80], "soin-lahochi": ["A", 83] },
  "cany-barville": { cartomancie: ["A", 90], numerologie: ["B", 65], "soin-lahochi": ["A", 78] },
  yvetot: { cartomancie: ["A", 85], numerologie: ["B", 60], "soin-lahochi": ["B", 73] },
  "ourville-en-caux": { cartomancie: ["B", 70], numerologie: ["B", 60], "soin-lahochi": ["B", 73] },
  "saint-riquier-es-plains": { cartomancie: ["A", 79], numerologie: ["C", 54], "soin-lahochi": ["B", 67] },
};
for (const [citySlug, services] of Object.entries(expectedSprint4)) {
  for (const [serviceSlug, [tier, score]] of Object.entries(services)) {
    const decision = getLocalSeoDecision(citySlug, serviceSlug);
    assert(decision, `Missing Sprint 4 decision for ${serviceSlug}-${citySlug}`);
    assert.equal(decision.tier, tier, `Wrong tier for ${serviceSlug}-${citySlug}`);
    assert.equal(decision.score, score, `Wrong score for ${serviceSlug}-${citySlug}`);
  }
}

const premiumSprint4Targets = getPremiumLocalTargets({ phase: 4 }).map((target) => `${target.serviceSlug}-${target.citySlug}`).sort();
const expectedPremiumSprint4Targets = [
  "cartomancie-cany-barville",
  "cartomancie-saint-riquier-es-plains",
  "cartomancie-valmont",
  "cartomancie-yvetot",
  "numerologie-valmont",
  "soin-lahochi-cany-barville",
  "soin-lahochi-valmont",
].sort();
assert.deepEqual(premiumSprint4Targets, expectedPremiumSprint4Targets, "Sprint 4 must premiumise only the evidence-backed Tier A targets");

const premiumContentPath = path.join(rootDir, "src/data/premiumLocalContent.mjs");
assert(fs.existsSync(premiumContentPath), "Sprint 4 Tier A pages must have a dedicated premium content registry");
const { getPremiumLocalContent, premiumLocalContent } = await import("../src/data/premiumLocalContent.mjs");
const premiumContentKeys = Object.keys(premiumLocalContent).filter((key) => !key.endsWith("-fecamp")).sort();
assert.deepEqual(premiumContentKeys, expectedPremiumSprint4Targets, "Premium content registry must contain exactly the seven Sprint 4 winners");
for (const target of getPremiumLocalTargets({ phase: 4 })) {
  const content = getPremiumLocalContent(target.citySlug, target.serviceSlug);
  assert(content, `Missing premium content for ${target.serviceSlug}-${target.citySlug}`);
  assert(content.headline.includes(target.cityLabel), `Premium H1 must name ${target.cityLabel}`);
  assert(content.localHeading.includes(target.cityLabel), `Local heading must name ${target.cityLabel}`);
  assert(content.locationIntro.includes("Gerponville"), `Premium local intro must keep the real cabinet in Gerponville for ${target.cityLabel}`);
  assert(content.faq?.length >= 2, `Premium page needs at least two local FAQs for ${target.cityLabel}`);
}

const cityLinksPath = path.join(rootDir, "src/components/sections/CityLinks.tsx");
const cityLinks = fs.readFileSync(cityLinksPath, "utf8");
assert(cityLinks.includes("getPremiumLocalTargetsForCity") && cityLinks.includes("priorityCities"), "Homepage city links must be driven by Tier A scoring rather than three links per city");

const servicePagePath = path.join(rootDir, "src/pages/ServicePage.tsx");
const servicePage = fs.readFileSync(servicePagePath, "utf8");
assert(servicePage.includes("getPremiumLocalTargetsForService") && servicePage.includes("priorityTargets"), "Pillar pages must link directly to their Tier A local targets");

assert(
  cityPage.includes("getLocalSeoDecision") && cityPage.includes("getPremiumLocalContent") && cityPage.includes('seoDecision?.tier === "A"'),
  "CityPage must apply premium content only when the scoring decision is Tier A"
);
assert(!cityPage.includes("Priorité SEO locale : Tier"), "Internal SEO scores must never be rendered in visitor-facing CityPage copy");

// Territory hubs absorb B/C coverage without creating doorway pages.
const expectedHubRoutes = [
  "/zones/pays-de-caux",
  "/zones/cote-d-albatre",
  "/zones/fecamp-caux-littoral",
  "/zones/caux-seine-agglo",
];
for (const route of expectedHubRoutes) {
  assert(STATIC_ROUTES.includes(route), `STATIC_ROUTES must include ${route}`);
}

const territoryDataPath = path.join(rootDir, "src/data/territorialHubs.mjs");
assert(fs.existsSync(territoryDataPath), "Territory hub registry must exist");
const { territorialHubs, getTerritoryHub, getTerritoryHubForCity } = await import("../src/data/territorialHubs.mjs");
assert.deepEqual(
  territorialHubs.map((hub) => hub.slug).sort(),
  ["caux-seine-agglo", "cote-d-albatre", "fecamp-caux-littoral", "pays-de-caux"],
  "Only the four editorially validated territory hubs must be published"
);
assert(getTerritoryHub("fecamp-caux-littoral")?.facts?.some((fact) => fact.includes("33 communes")), "Fécamp Caux Littoral hub must state the official 33-commune perimeter");
assert(getTerritoryHub("cote-d-albatre")?.facts?.some((fact) => fact.includes("63 communes")), "Côte d'Albâtre hub must state the official 63-commune perimeter");
assert(getTerritoryHub("caux-seine-agglo")?.facts?.some((fact) => fact.includes("50 communes")), "Caux Seine hub must state the official 50-commune perimeter");
assert(getTerritoryHub("caux-seine-agglo")?.facts?.some((fact) => fact.includes("79 337")), "Caux Seine hub must preserve its validated population figure");
assert(getTerritoryHub("pays-de-caux")?.boundaryNote?.includes("repère géographique"), "Pays de Caux must be presented as a geographic reference, not a fake administrative perimeter");
assert.equal(getTerritoryHubForCity("fecamp")?.slug, "fecamp-caux-littoral", "Fécamp must map to Fécamp Caux Littoral");
assert.equal(getTerritoryHubForCity("valmont")?.slug, "fecamp-caux-littoral", "Valmont must map to Fécamp Caux Littoral");
assert.equal(getTerritoryHubForCity("cany-barville")?.slug, "cote-d-albatre", "Cany-Barville must map to Côte d'Albâtre");
assert.equal(getTerritoryHubForCity("ourville-en-caux")?.slug, "cote-d-albatre", "Ourville-en-Caux must map to Côte d'Albâtre");
assert.equal(getTerritoryHubForCity("saint-riquier-es-plains")?.slug, "cote-d-albatre", "Saint-Riquier-ès-Plains must map to Côte d'Albâtre");
assert.equal(getTerritoryHubForCity("yvetot")?.slug, "pays-de-caux", "Yvetot must map to Pays de Caux");
assert.equal(getTerritoryHubForCity("bolbec")?.slug, "caux-seine-agglo", "Bolbec must map to Caux Seine Agglo");
assert.equal(getTerritoryHubForCity("lillebonne")?.slug, "caux-seine-agglo", "Lillebonne must map to Caux Seine Agglo");

const territoryPagePath = path.join(rootDir, "src/pages/TerritoryHubPage.tsx");
assert(fs.existsSync(territoryPagePath), "TerritoryHubPage.tsx must exist");
const territoryPage = fs.readFileSync(territoryPagePath, "utf8");
assert(territoryPage.includes("CollectionPage") && territoryPage.includes("BreadcrumbList"), "TerritoryHubPage must expose useful structured data");
assert(territoryPage.includes("Cabinet à Gerponville"), "Territory hubs must stay transparent about the real cabinet location");
assert(territoryPage.includes("officialSourceUrl"), "Administrative territory hubs must expose their official source");

assert(appSource.includes("TerritoryHubPage") && appSource.includes("territorialHubs.map"), "App.tsx must route all published territory hubs from the data registry");

const routeModule = await import("./routes.mjs");
assert.equal(typeof routeModule.getIndexableCityRoutes, "function", "Runtime city routes must stay separated from indexable city routes");
const indexableCityRoutes = routeModule.getIndexableCityRoutes().sort();
const expectedIndexableCityRoutes = [
  "/cartomancie-fecamp",
  "/numerologie-fecamp",
  "/soin-lahochi-fecamp",
  ...expectedPremiumSprint4Targets.map((key) => `/${key}`),
].sort();
assert.deepEqual(indexableCityRoutes, expectedIndexableCityRoutes, "Only Fécamp + evidence-backed Tier A local landings should remain in sitemap/prerender");
for (const route of expectedHubRoutes) {
  assert(routeModule.getRoutes().includes(route), `${route} must be included in generated routes/sitemap`);
}
assert(!routeModule.getRoutes().includes("/numerologie-cany-barville"), "Tier B city pages must leave the sitemap after territory hubs launch");
assert(!routeModule.getRoutes().includes("/soin-lahochi-yvetot"), "Tier B city pages must leave the sitemap after territory hubs launch");
assert(!routeModule.getRoutes().includes("/numerologie-saint-riquier-es-plains"), "Tier C city pages must leave the sitemap after territory hubs launch");
assert(!routeModule.getRoutes().includes("/cartomancie-bolbec"), "Publishing Caux Seine hub must not auto-publish Bolbec service landings");
assert(!routeModule.getRoutes().includes("/cartomancie-lillebonne"), "Publishing Caux Seine hub must not auto-publish Lillebonne service landings");

assert(cityPage.includes("getTerritoryHubForCity"), "CityPage must link secondary city coverage to its territory hub");
assert(cityPage.includes("noindex, follow"), "Non-premium city pages must become noindex, follow once territory hubs exist");
assert(cityPage.includes("robotsDirective"), "CityPage must compute a robots directive from the evidence-backed indexability decision");

assert(cityLinks.includes("territorialHubs") && cityLinks.includes("/zones/"), "Homepage local section must link to published territory hubs");
assert(servicePage.includes("territorialHubs") && servicePage.includes("Zones couvertes"), "Service pillars must link to published territory hubs");

console.log("SEO architecture verification passed.");

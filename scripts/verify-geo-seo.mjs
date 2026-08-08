import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const communesPath = path.join(rootDir, "src/data/seineMaritimeCommunes.mjs");
const enginePath = path.join(rootDir, "src/data/geoSeoEngine.mjs");

assert(fs.existsSync(communesPath), "Sprint 6 must import the 707 Seine-Maritime communes into src/data/seineMaritimeCommunes.mjs");
assert(fs.existsSync(enginePath), "Sprint 6 must implement src/data/geoSeoEngine.mjs");

const {
  SEINE_MARITIME_SOURCE,
  seineMaritimeCommunes,
} = await import("../src/data/seineMaritimeCommunes.mjs");

assert.equal(SEINE_MARITIME_SOURCE.referenceDate, "2026-01-01", "Commune source date must remain explicit");
assert.equal(SEINE_MARITIME_SOURCE.populationReferenceYear, 2023, "Population reference year must remain explicit");
assert.equal(seineMaritimeCommunes.length, 707, "The database must contain exactly 707 communes");
assert.equal(new Set(seineMaritimeCommunes.map((commune) => commune.insee)).size, 707, "INSEE codes must be unique");
assert.equal(new Set(seineMaritimeCommunes.map((commune) => commune.slug)).size, 707, "Commune slugs must be unique");
assert.equal(new Set(seineMaritimeCommunes.map((commune) => commune.intercommunality)).size, 19, "The imported dataset must preserve the 19 intercommunalities present in the source");

for (const commune of seineMaritimeCommunes) {
  assert(commune.name && commune.slug && commune.insee, "Every commune needs identity fields");
  assert(Array.isArray(commune.postalCodes) && commune.postalCodes.length > 0, `${commune.name} needs at least one postal code`);
  assert(commune.arrondissement && commune.intercommunality, `${commune.name} needs territorial metadata`);
  assert(Number.isInteger(commune.population) && commune.population >= 0, `${commune.name} needs a numeric population`);
  assert.equal(commune.populationYear, 2023, `${commune.name} must preserve the 2023 population reference year`);
}

const bySlug = new Map(seineMaritimeCommunes.map((commune) => [commune.slug, commune]));
assert.equal(bySlug.get("rouen")?.population, 117662, "Rouen population must match the imported source");
assert.deepEqual(bySlug.get("rouen")?.postalCodes, ["76000", "76100"], "Rouen postal codes must be preserved");
assert.equal(bySlug.get("le-havre")?.population, 166687, "Le Havre population must match the imported source");
assert.equal(bySlug.get("fecamp")?.population, 17313, "Fécamp population must match the imported source");
assert.equal(bySlug.get("yvetot")?.population, 11438, "Yvetot population must match the imported source");
assert.equal(bySlug.get("valmont")?.population, 849, "Valmont population must match the imported source");

const {
  getCommuneGeoProfile,
  getCommuneServiceDecision,
  getAllServiceDecisions,
  getTierSummary,
  getHubCandidates,
  getIntercommunalitySummary,
} = await import("../src/data/geoSeoEngine.mjs");

const fecamp = getCommuneGeoProfile("fecamp");
assert.equal(fecamp?.adminHubSlug, "fecamp-caux-littoral", "Fécamp must map to its administrative hub");
assert.equal(fecamp?.publishedHubSlug, "fecamp-caux-littoral", "Fécamp must reuse the published hub");
assert.equal(fecamp?.distanceKm, null, "The geo engine must not fabricate exact commune distances");
assert.equal(fecamp?.distanceStatus, "verify-before-publish", "Exact distance must be verified only when a landing is promoted");

const cany = getCommuneGeoProfile("cany-barville");
assert.equal(cany?.adminHubSlug, "cote-d-albatre", "Cany-Barville must map to Côte d'Albâtre");
assert.equal(cany?.publishedHubSlug, "cote-d-albatre", "Cany-Barville must reuse the published Côte d'Albâtre hub");

const yvetot = getCommuneGeoProfile("yvetot");
assert.equal(yvetot?.adminHubSlug, "yvetot-normandie", "Yvetot must expose its administrative hub candidate");
assert.equal(yvetot?.publishedHubSlug, "pays-de-caux", "Yvetot may still use the existing Pays de Caux editorial hub");

const bolbec = getCommuneGeoProfile("bolbec");
assert.equal(bolbec?.adminHubSlug, "caux-seine-agglo", "Bolbec must map to Caux Seine Agglo");
assert.equal(bolbec?.publishedHubSlug, "caux-seine-agglo", "Bolbec must reuse the published Caux Seine hub after SERP validation");

const rouen = getCommuneGeoProfile("rouen");
assert.equal(rouen?.adminHubSlug, "metropole-rouen-normandie", "Rouen must surface the Métropole Rouen Normandie candidate hub");
assert.equal(rouen?.publishedHubSlug, null, "Rouen must stay unpublished after SERP review");

const leHavre = getCommuneGeoProfile("le-havre");
assert.equal(leHavre?.adminHubSlug, "le-havre-seine-metropole", "Le Havre must surface its candidate hub");
assert.equal(leHavre?.publishedHubSlug, null, "Le Havre hub must stay unpublished after SERP review");

const allDecisions = getAllServiceDecisions();
assert.equal(allDecisions.length, 707 * 3, "Every commune must receive a decision for the three service families");
for (const decision of allDecisions) {
  assert(["A", "B", "C", "D"].includes(decision.tier), "Every service decision needs a valid A/B/C/D tier");
  assert(["candidate-premium-landing", "validate-demand-before-landing", "cover-via-territory-hub", "semantic-coverage-only", "existing-strategy"].includes(decision.action), `Unexpected action for ${decision.serviceSlug}-${decision.communeSlug}`);
}

assert.equal(getCommuneServiceDecision("valmont", "cartomancie")?.tier, "A", "Existing Valmont GSC strategy must override the generic departmental heuristic");
assert.equal(getCommuneServiceDecision("cany-barville", "numerologie")?.tier, "B", "Existing Cany-Barville numérologie decision must be preserved");
assert.equal(getCommuneServiceDecision("saint-riquier-es-plains", "cartomancie")?.tier, "A", "Existing Saint-Riquier cartomancie decision must be preserved");

const tierSummary = getTierSummary();
assert.equal(Object.values(tierSummary).reduce((sum, value) => sum + value, 0), 2121, "Tier summary must account for all commune × service decisions");
assert(tierSummary.A < 100, "The engine must not classify hundreds of automatic pages as Tier A");
assert(tierSummary.D > tierSummary.C && tierSummary.C > tierSummary.B, "Most small communes should remain hub/semantic coverage rather than landing candidates");

const hubCandidates = getHubCandidates();
assert.equal(hubCandidates.length, 19, "The engine must aggregate all 19 intercommunalities into hub candidates");
const hubBySlug = new Map(hubCandidates.map((hub) => [hub.slug, hub]));
for (const slug of [
  "metropole-rouen-normandie",
  "le-havre-seine-metropole",
  "caux-seine-agglo",
  "dieppe-maritime",
  "yvetot-normandie",
  "terroir-de-caux",
]) {
  assert(hubBySlug.has(slug), `Missing discovered hub candidate: ${slug}`);
}
assert.equal(hubBySlug.get("fecamp-caux-littoral")?.publicationStatus, "published", "Published Fécamp hub must be recognized");
assert.equal(hubBySlug.get("cote-d-albatre")?.publicationStatus, "published", "Published Côte d'Albâtre hub must be recognized");
assert.equal(hubBySlug.get("caux-seine-agglo")?.publicationStatus, "published", "SERP-validated Caux Seine hub must be recognized as published");
assert.equal(hubBySlug.get("metropole-rouen-normandie")?.publicationStatus, "candidate", "Rouen hub must remain a candidate after SERP validation");
assert.equal(hubBySlug.get("le-havre-seine-metropole")?.publicationStatus, "candidate", "Le Havre hub must remain a candidate after SERP validation");
assert.equal(hubBySlug.get("dieppe-maritime")?.publicationStatus, "candidate", "Dieppe hub must remain a candidate after SERP validation");

const rouenInterco = getIntercommunalitySummary("Métropole Rouen Normandie");
assert.equal(rouenInterco?.communeCount, 71, "Rouen Métropole commune count must come from the imported source");
assert.equal(rouenInterco?.population, 503000, "Rouen Métropole population aggregation must be deterministic from the imported source");

const cauxSeine = getIntercommunalitySummary("CA Caux Seine Agglo");
assert.equal(cauxSeine?.communeCount, 50, "Caux Seine commune count must come from the imported source");
assert.equal(cauxSeine?.publicationStatus, "published", "Caux Seine must be published only after Sprint 7A validation");

const routes = await import("./routes.mjs");
assert(!routes.getRoutes().includes("/cartomancie-allouville-bellefosse"), "Importing 707 communes must not create 2,121 automatic city routes");
assert(routes.getRoutes().includes("/zones/caux-seine-agglo"), "Validated Caux Seine hub must enter the sitemap/prerender routes");
assert(!routes.getRoutes().includes("/zones/metropole-rouen-normandie"), "Rouen hub must not become indexable until explicitly approved later");
assert(!routes.getRoutes().includes("/zones/le-havre-seine-metropole"), "Le Havre hub must not become indexable until explicitly approved later");
assert(!routes.getRoutes().includes("/zones/dieppe-maritime"), "Dieppe hub must not become indexable until explicitly approved later");

console.log("Geo SEO verification passed.", { tierSummary, hubs: hubCandidates.length, communes: seineMaritimeCommunes.length });

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const validationPath = path.join(rootDir, "src/data/serpValidation.mjs");
assert(fs.existsSync(validationPath), "Sprint 7A must define src/data/serpValidation.mjs");

const { getSerpValidation, getTerritorySerpDecision } = await import("../src/data/serpValidation.mjs");

for (const citySlug of ["rouen", "le-havre", "dieppe"]) {
  for (const serviceSlug of ["cartomancie", "numerologie", "soin-lahochi"]) {
    const validation = getSerpValidation(citySlug, serviceSlug);
    assert(validation, `Missing SERP validation for ${serviceSlug}-${citySlug}`);
    assert.notEqual(validation.recommendation, "publish-local-landing", `${serviceSlug}-${citySlug} must not be auto-published after SERP review`);
  }
}

assert.equal(getSerpValidation("rouen", "cartomancie")?.recommendation, "hold-local-landing");
assert.equal(getSerpValidation("rouen", "numerologie")?.recommendation, "editorial-opportunity");
assert.equal(getSerpValidation("rouen", "soin-lahochi")?.recommendation, "hold-local-landing");
assert.equal(getSerpValidation("le-havre", "cartomancie")?.recommendation, "hold-local-landing");
assert.equal(getSerpValidation("le-havre", "numerologie")?.recommendation, "editorial-opportunity");
assert.equal(getSerpValidation("le-havre", "soin-lahochi")?.recommendation, "hold-local-landing");
assert.equal(getSerpValidation("dieppe", "cartomancie")?.recommendation, "editorial-opportunity");
assert.equal(getSerpValidation("dieppe", "numerologie")?.recommendation, "editorial-opportunity");
assert.equal(getSerpValidation("dieppe", "soin-lahochi")?.recommendation, "hold-local-landing");

assert.equal(getTerritorySerpDecision("caux-seine-agglo")?.recommendation, "publish-hub");
for (const hubSlug of ["metropole-rouen-normandie", "le-havre-seine-metropole", "dieppe-maritime", "yvetot-normandie", "plateau-de-caux", "campagne-de-caux"]) {
  assert.notEqual(getTerritorySerpDecision(hubSlug)?.recommendation, "publish-hub", `${hubSlug} must stay unpublished after Sprint 7A`);
}

const { territorialHubs } = await import("../src/data/territorialHubs.mjs");
assert(territorialHubs.some((hub) => hub.slug === "caux-seine-agglo"), "Caux Seine Agglo must become a published territory hub");
assert(!territorialHubs.some((hub) => hub.slug === "metropole-rouen-normandie"), "Rouen hub must not be published yet");
assert(!territorialHubs.some((hub) => hub.slug === "le-havre-seine-metropole"), "Le Havre hub must not be published yet");
assert(!territorialHubs.some((hub) => hub.slug === "dieppe-maritime"), "Dieppe hub must not be published yet");

const { GEO_SEO_INTERCOMMUNALITIES, getCommuneServiceDecision } = await import("../src/data/geoSeoEngine.mjs");
assert.equal(GEO_SEO_INTERCOMMUNALITIES["CA Caux Seine Agglo"].publicationStatus, "published");
assert.equal(GEO_SEO_INTERCOMMUNALITIES["CA Caux Seine Agglo"].publishedHubSlug, "caux-seine-agglo");

for (const citySlug of ["rouen", "le-havre", "dieppe"]) {
  for (const serviceSlug of ["cartomancie", "numerologie", "soin-lahochi"]) {
    const decision = getCommuneServiceDecision(citySlug, serviceSlug);
    assert(decision, `Missing geo decision for ${serviceSlug}-${citySlug}`);
    assert.notEqual(decision.publicationState, "approved-new-landing", `${serviceSlug}-${citySlug} must remain non-published after SERP validation`);
  }
}

console.log("SERP strategy verification passed.");

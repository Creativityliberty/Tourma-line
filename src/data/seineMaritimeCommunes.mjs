// Generated from the user-provided list of the 707 communes of Seine-Maritime at 2026-01-01.
// Population values are the source's latest reference population, primarily INSEE census 2023.
// This is a geographic SEO knowledge base, not a route generator.

import part01 from "./seineMaritime/part-01.mjs";
import part02 from "./seineMaritime/part-02.mjs";
import part03 from "./seineMaritime/part-03.mjs";
import part04 from "./seineMaritime/part-04.mjs";
import part05 from "./seineMaritime/part-05.mjs";
import part06 from "./seineMaritime/part-06.mjs";
import part07 from "./seineMaritime/part-07.mjs";
import part08 from "./seineMaritime/part-08.mjs";

export const SEINE_MARITIME_SOURCE = Object.freeze({
  department: "Seine-Maritime",
  departmentCode: "76",
  referenceDate: "2026-01-01",
  populationReferenceYear: 2023,
  communeCount: 707,
  sourceType: "user-provided-commune-list",
  importedFields: [
    "name",
    "slug",
    "insee",
    "postalCodes",
    "arrondissement",
    "intercommunality",
    "population",
    "populationYear",
    "density",
  ],
});

const chunks = [part01, part02, part03, part04, part05, part06, part07, part08];

const parseRow = (row) => {
  const [
    name,
    slug,
    insee,
    postalCodes,
    arrondissement,
    intercommunality,
    population,
    density,
  ] = row.split("\t");

  return Object.freeze({
    name,
    slug,
    insee,
    postalCodes: Object.freeze(postalCodes.split(",")),
    arrondissement,
    intercommunality,
    population: Number(population),
    populationYear: 2023,
    density: Number(density),
    // Intentionally left null until an official geometry enrichment pass is added.
    latitude: null,
    longitude: null,
    distanceKmToGerponville: null,
  });
};

export const seineMaritimeCommunes = Object.freeze(
  chunks
    .flatMap((chunk) => chunk.split("\n"))
    .filter(Boolean)
    .map(parseRow)
);

export const seineMaritimeCommunesBySlug = new Map(
  seineMaritimeCommunes.map((commune) => [commune.slug, commune])
);

export const seineMaritimeCommunesByInsee = new Map(
  seineMaritimeCommunes.map((commune) => [commune.insee, commune])
);

export const getSeineMaritimeCommune = (identifier) =>
  seineMaritimeCommunesBySlug.get(identifier) ??
  seineMaritimeCommunesByInsee.get(identifier) ??
  null;

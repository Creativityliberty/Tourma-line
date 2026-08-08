// Generated from the user-provided list of the 707 communes of Seine-Maritime at 2026-01-01.
// Population values are the source's latest reference population, primarily INSEE census 2023.
// This is a geographic SEO knowledge base, not a route generator.

export const SEINE_MARITIME_SOURCE = Object.freeze({
  department: "Seine-Maritime",
  departmentCode: "76",
  referenceDate: "2026-01-01",
  populationReferenceYear: 2023,
  communeCount: 707,
  sourceType: "user-provided-commune-list",
});

export const seineMaritimeCommunes = Object.freeze([{ "name": "Rouen", "slug": "rouen", "insee": "76540", "postalCodes": ["76000", "76100"], "arrondissement": "Rouen", "canton": "Rouen-1 Rouen-2 Rouen-3", "intercommunality": "Métropole Rouen Normandie", "areaKm2": 21.38, "population": 117662, "populationYear": 2023, "density": 5503 }]);

export const seineMaritimeCommunesBySlug = new Map(
  seineMaritimeCommunes.map((commune) => [commune.slug, commune])
);

export const seineMaritimeCommunesByInsee = new Map(
  seineMaritimeCommunes.map((commune) => [commune.insee, commune])
);

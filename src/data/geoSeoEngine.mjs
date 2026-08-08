import {
  getSeineMaritimeCommune,
  seineMaritimeCommunes,
} from "./seineMaritimeCommunes.mjs";
import { getLocalSeoDecision } from "./localSeoStrategy.mjs";

export const GEO_SEO_SERVICES = Object.freeze([
  "cartomancie",
  "numerologie",
  "soin-lahochi",
]);

const SERVICE_MOMENTUM = Object.freeze({
  cartomancie: 15,
  numerologie: 8,
  "soin-lahochi": 13,
});

// Proximity is intentionally territorial for Sprint 6.
// Exact km values are not invented: they are verified only when a commune is promoted to a real landing.
export const GEO_SEO_INTERCOMMUNALITIES = Object.freeze({
  "CA Fécamp Caux Littoral Agglomération": {
    slug: "fecamp-caux-littoral",
    label: "Fécamp Caux Littoral",
    publicationStatus: "published",
    publishedHubSlug: "fecamp-caux-littoral",
    proximityBand: "core",
    proximityScore: 25,
    anchor: "Fécamp",
  },
  "CC de la Côte d'Albâtre": {
    slug: "cote-d-albatre",
    label: "Côte d'Albâtre",
    publicationStatus: "published",
    publishedHubSlug: "cote-d-albatre",
    proximityBand: "near",
    proximityScore: 20,
    anchor: "Cany-Barville",
  },
  "CC Yvetot Normandie": {
    slug: "yvetot-normandie",
    label: "Yvetot Normandie",
    publicationStatus: "candidate",
    publishedHubSlug: "pays-de-caux",
    proximityBand: "mid",
    proximityScore: 16,
    anchor: "Yvetot",
  },
  "CC Plateau de Caux": {
    slug: "plateau-de-caux",
    label: "Plateau de Caux",
    publicationStatus: "candidate",
    publishedHubSlug: "pays-de-caux",
    proximityBand: "mid",
    proximityScore: 15,
    anchor: "Doudeville",
  },
  "CC Campagne de Caux": {
    slug: "campagne-de-caux",
    label: "Campagne de Caux",
    publicationStatus: "candidate",
    publishedHubSlug: "pays-de-caux",
    proximityBand: "mid",
    proximityScore: 14,
    anchor: "Goderville",
  },
  "CA Caux Seine Agglo": {
    slug: "caux-seine-agglo",
    label: "Caux Seine Agglo",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "mid",
    proximityScore: 12,
    anchor: "Bolbec / Lillebonne",
  },
  "CU Le Havre Seine Métropole": {
    slug: "le-havre-seine-metropole",
    label: "Le Havre Seine Métropole",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "mid",
    proximityScore: 10,
    anchor: "Le Havre",
  },
  "CC Terroir de Caux": {
    slug: "terroir-de-caux",
    label: "Terroir de Caux",
    publicationStatus: "candidate",
    publishedHubSlug: "pays-de-caux",
    proximityBand: "mid",
    proximityScore: 10,
    anchor: "Luneray / Tôtes",
  },
  "CC Caux-Austreberthe": {
    slug: "caux-austreberthe",
    label: "Caux-Austreberthe",
    publicationStatus: "candidate",
    publishedHubSlug: "pays-de-caux",
    proximityBand: "mid",
    proximityScore: 9,
    anchor: "Barentin / Pavilly",
  },
  "CC Inter-Caux-Vexin": {
    slug: "inter-caux-vexin",
    label: "Inter-Caux-Vexin",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "mid",
    proximityScore: 8,
    anchor: "Buchy / Montville",
  },
  "CA de la Région Dieppoise": {
    slug: "dieppe-maritime",
    label: "Dieppe-Maritime",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 7,
    anchor: "Dieppe",
  },
  "CC Falaises du Talou": {
    slug: "falaises-du-talou",
    label: "Falaises du Talou",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 6,
    anchor: "Petit-Caux / Envermeu",
  },
  "Métropole Rouen Normandie": {
    slug: "metropole-rouen-normandie",
    label: "Métropole Rouen Normandie",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 5,
    anchor: "Rouen",
  },
  "CC des Villes Sœurs": {
    slug: "villes-soeurs",
    label: "Villes Sœurs",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 4,
    anchor: "Eu / Le Tréport",
  },
  "CC Communauté Bray-Eawy": {
    slug: "bray-eawy",
    label: "Bray-Eawy",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 4,
    anchor: "Neufchâtel-en-Bray",
  },
  "CC des Quatre Rivières": {
    slug: "quatre-rivieres",
    label: "Quatre Rivières",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 3,
    anchor: "Gournay-en-Bray / Forges-les-Eaux",
  },
  "CC interrégionale Aumale - Blangy-sur-Bresle": {
    slug: "aumale-blangy-sur-bresle",
    label: "Aumale - Blangy-sur-Bresle",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 3,
    anchor: "Aumale / Blangy-sur-Bresle",
  },
  "CC de Londinières": {
    slug: "londinieres",
    label: "Londinières",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 3,
    anchor: "Londinières",
  },
  "CC Roumois Seine": {
    slug: "roumois-seine",
    label: "Roumois Seine",
    publicationStatus: "candidate",
    publishedHubSlug: null,
    proximityBand: "outer",
    proximityScore: 2,
    anchor: "Mauny",
  },
});

const tierFromScore = (score) => {
  if (score >= 65) return "A";
  if (score >= 50) return "B";
  if (score >= 35) return "C";
  return "D";
};

const populationScore = (population) => {
  if (population >= 100000) return 45;
  if (population >= 50000) return 40;
  if (population >= 20000) return 35;
  if (population >= 10000) return 30;
  if (population >= 5000) return 24;
  if (population >= 2500) return 18;
  if (population >= 1000) return 12;
  if (population >= 500) return 8;
  if (population >= 250) return 4;
  return 1;
};

const strategicCityScore = (population) => {
  if (population >= 20000) return 8;
  if (population >= 10000) return 5;
  if (population >= 5000) return 3;
  return 0;
};

const actionFromTier = (tier) => {
  if (tier === "A") return "candidate-premium-landing";
  if (tier === "B") return "validate-demand-before-landing";
  if (tier === "C") return "cover-via-territory-hub";
  return "semantic-coverage-only";
};

const findCommune = (identifier) => {
  if (!identifier) return null;
  if (typeof identifier === "object" && identifier.slug) return identifier;
  return getSeineMaritimeCommune(identifier);
};

export const getCommuneGeoProfile = (identifier) => {
  const commune = findCommune(identifier);
  if (!commune) return null;

  const interco = GEO_SEO_INTERCOMMUNALITIES[commune.intercommunality] ?? null;

  return {
    ...commune,
    adminHubSlug: interco?.slug ?? null,
    adminHubLabel: interco?.label ?? commune.intercommunality,
    publishedHubSlug: interco?.publishedHubSlug ?? null,
    hubPublicationStatus: interco?.publicationStatus ?? "candidate",
    proximityBand: interco?.proximityBand ?? "outer",
    proximityScore: interco?.proximityScore ?? 0,
    distanceKm: null,
    distanceStatus: "verify-before-publish",
  };
};

export const getCommuneServiceDecision = (identifier, serviceSlug) => {
  const commune = findCommune(identifier);
  if (!commune || !GEO_SEO_SERVICES.includes(serviceSlug)) return null;

  const existingDecision = getLocalSeoDecision(commune.slug, serviceSlug);
  const profile = getCommuneGeoProfile(commune);

  if (existingDecision) {
    return {
      communeSlug: commune.slug,
      communeName: commune.name,
      serviceSlug,
      tier: existingDecision.tier,
      score: existingDecision.score,
      action: "existing-strategy",
      publicationState: existingDecision.tier === "A" ? "existing-or-approved" : "secondary-existing",
      hubSlug: profile?.publishedHubSlug ?? profile?.adminHubSlug ?? null,
      evidence: existingDecision.evidence,
      components: {
        source: "gsc-local-strategy-override",
        ...existingDecision.components,
      },
    };
  }

  const popScore = populationScore(commune.population);
  const proximity = profile?.proximityScore ?? 0;
  const momentum = SERVICE_MOMENTUM[serviceSlug];
  const strategic = strategicCityScore(commune.population);
  const score = popScore + proximity + momentum + strategic;
  const tier = tierFromScore(score);

  return {
    communeSlug: commune.slug,
    communeName: commune.name,
    serviceSlug,
    tier,
    score,
    action: actionFromTier(tier),
    publicationState: "candidate-only",
    hubSlug: profile?.publishedHubSlug ?? profile?.adminHubSlug ?? null,
    evidence:
      tier === "A"
        ? "High departmental opportunity candidate. Requires SERP/GSC validation and unique local proof before publication."
        : tier === "B"
          ? "Potential local landing only after real demand and competition validation."
          : tier === "C"
            ? "Cover through a territory hub and internal linking; no standalone indexed page by default."
            : "Keep in geographic knowledge base and semantic coverage only.",
    components: {
      source: "departmental-heuristic",
      population: popScore,
      proximity,
      serviceMomentum: momentum,
      strategicCity: strategic,
    },
  };
};

export const getAllServiceDecisions = () =>
  seineMaritimeCommunes.flatMap((commune) =>
    GEO_SEO_SERVICES.map((serviceSlug) =>
      getCommuneServiceDecision(commune, serviceSlug)
    )
  );

export const getTierSummary = () =>
  getAllServiceDecisions().reduce(
    (summary, decision) => {
      summary[decision.tier] += 1;
      return summary;
    },
    { A: 0, B: 0, C: 0, D: 0 }
  );

const hubAggregates = () => {
  const groups = new Map();

  for (const commune of seineMaritimeCommunes) {
    const meta = GEO_SEO_INTERCOMMUNALITIES[commune.intercommunality];
    if (!meta) continue;

    if (!groups.has(commune.intercommunality)) {
      groups.set(commune.intercommunality, {
        intercommunality: commune.intercommunality,
        slug: meta.slug,
        label: meta.label,
        publicationStatus: meta.publicationStatus,
        publishedHubSlug: meta.publishedHubSlug,
        proximityBand: meta.proximityBand,
        proximityScore: meta.proximityScore,
        anchor: meta.anchor,
        communeCount: 0,
        population: 0,
        communes: [],
      });
    }

    const group = groups.get(commune.intercommunality);
    group.communeCount += 1;
    group.population += commune.population;
    group.communes.push({
      name: commune.name,
      slug: commune.slug,
      population: commune.population,
    });
  }

  return [...groups.values()].map((group) => {
    const topCommunes = [...group.communes]
      .sort((a, b) => b.population - a.population)
      .slice(0, 5);
    const populationWeight = Math.min(30, Math.round(group.population / 10000));
    const hubPriorityScore =
      group.proximityScore * 2 +
      populationWeight +
      (group.publicationStatus === "published" ? 20 : 0);

    return {
      ...group,
      topCommunes,
      hubPriorityScore,
    };
  });
};

export const getHubCandidates = () =>
  hubAggregates().sort((a, b) => {
    if (a.publicationStatus !== b.publicationStatus) {
      return a.publicationStatus === "published" ? -1 : 1;
    }
    return b.hubPriorityScore - a.hubPriorityScore;
  });

export const getIntercommunalitySummary = (identifier) =>
  getHubCandidates().find(
    (hub) => hub.intercommunality === identifier || hub.slug === identifier
  ) ?? null;

export const getRecommendedUnpublishedHubs = (limit = 8) =>
  getHubCandidates()
    .filter((hub) => hub.publicationStatus === "candidate")
    .sort((a, b) => b.hubPriorityScore - a.hubPriorityScore)
    .slice(0, limit);

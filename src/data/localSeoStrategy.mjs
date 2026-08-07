const SERVICE_MOMENTUM = {
  cartomancie: 15,
  numerologie: 5,
  "soin-lahochi": 18,
};

const tierFromScore = (score) => {
  if (score >= 75) return "A";
  if (score >= 60) return "B";
  if (score >= 45) return "C";
  return "D";
};

const markets = {
  fecamp: {
    cityLabel: "Fécamp",
    phase: 3,
    population: 17313,
    proximityScore: 22,
    populationScore: 20,
    competitionOpportunityScore: 6,
    cluster: "Fécamp Caux Littoral",
    services: {
      cartomancie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL Tier A à demander en indexation après mise en production ; la famille voyance/cartomancie a déjà des positions GSC fortes.",
      },
      numerologie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL Tier A à demander en indexation ; la page pilier numérologie a besoin d'autorité locale supplémentaire.",
      },
      "soin-lahochi": {
        gscScore: 30,
        pageStatus: "priority-missing",
        evidence: "URL Tier A à demander en indexation ; Lahochi et soin énergétique disposent déjà de signaux GSC génériques favorables.",
      },
    },
  },
  valmont: {
    cityLabel: "Valmont",
    phase: 4,
    population: 849,
    proximityScore: 25,
    populationScore: 5,
    competitionOpportunityScore: 10,
    cluster: "Fécamp Caux Littoral",
    services: {
      cartomancie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL cartomancie-valmont explicitement placée dans la queue d'indexation GSC prioritaire.",
      },
      numerologie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL numerologie-valmont explicitement placée dans la queue d'indexation GSC prioritaire.",
      },
      "soin-lahochi": {
        gscScore: 25,
        pageStatus: "indexed-reinforce",
        evidence: "URL soin-lahochi-valmont déjà valide dans GSC et marquée CONSERVER + RENFORCER.",
      },
    },
  },
  "cany-barville": {
    cityLabel: "Cany-Barville",
    phase: 4,
    population: 2909,
    proximityScore: 20,
    populationScore: 10,
    competitionOpportunityScore: 10,
    cluster: "Côte d'Albâtre",
    services: {
      cartomancie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL cartomancie-cany-barville explicitement placée dans la queue d'indexation GSC prioritaire.",
      },
      numerologie: {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL numerologie-cany-barville déjà valide dans GSC et marquée CONSERVER + RENFORCER.",
      },
      "soin-lahochi": {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL soin-lahochi-cany-barville déjà valide dans GSC et marquée CONSERVER + RENFORCER.",
      },
    },
  },
  "ourville-en-caux": {
    cityLabel: "Ourville-en-Caux",
    phase: 4,
    population: 1088,
    proximityScore: 19,
    populationScore: 6,
    competitionOpportunityScore: 10,
    cluster: "Côte d'Albâtre",
    services: {
      cartomancie: {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL cartomancie-ourville-en-caux déjà valide dans GSC ; conserver accessible mais consolider l'indexation via le hub Côte d'Albâtre.",
      },
      numerologie: {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL numerologie-ourville-en-caux déjà valide dans GSC ; conserver accessible mais consolider l'indexation via le hub Côte d'Albâtre.",
      },
      "soin-lahochi": {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL soin-lahochi-ourville-en-caux déjà valide dans GSC ; conserver accessible mais consolider l'indexation via le hub Côte d'Albâtre.",
      },
    },
  },
  "saint-riquier-es-plains": {
    cityLabel: "Saint-Riquier-ès-Plains",
    phase: 4,
    population: 636,
    proximityScore: 15,
    populationScore: 4,
    competitionOpportunityScore: 10,
    cluster: "Côte d'Albâtre",
    services: {
      cartomancie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL cartomancie-saint-riquier-es-plains explicitement placée dans la queue d'indexation GSC prioritaire.",
      },
      numerologie: {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL numerologie-saint-riquier-es-plains déjà valide dans GSC, mais marché communal faible : priorité hub/maillage.",
      },
      "soin-lahochi": {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL soin-lahochi-saint-riquier-es-plains déjà valide dans GSC ; conserver accessible et renforcer le cluster Côte d'Albâtre.",
      },
    },
  },
  yvetot: {
    cityLabel: "Yvetot",
    phase: 4,
    population: 11438,
    proximityScore: 10,
    populationScore: 20,
    competitionOpportunityScore: 5,
    cluster: "Pays de Caux",
    services: {
      cartomancie: {
        gscScore: 35,
        pageStatus: "priority-missing",
        evidence: "URL cartomancie-yvetot explicitement placée dans la queue d'indexation GSC prioritaire ; marché local plus concurrentiel mais nettement plus grand.",
      },
      numerologie: {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL numerologie-yvetot déjà valide dans GSC ; conserver accessible mais concentrer l'indexation secondaire via le hub Pays de Caux.",
      },
      "soin-lahochi": {
        gscScore: 20,
        pageStatus: "indexed-reinforce",
        evidence: "URL soin-lahochi-yvetot déjà valide dans GSC ; concurrence locale énergétique plus forte, donc couverture via le hub Pays de Caux avant nouvelle premiumisation.",
      },
    },
  },
};

const buildDecision = (citySlug, serviceSlug) => {
  const market = markets[citySlug];
  const service = market?.services?.[serviceSlug];
  if (!market || !service) return null;

  const score =
    service.gscScore +
    SERVICE_MOMENTUM[serviceSlug] +
    market.proximityScore +
    market.populationScore +
    market.competitionOpportunityScore;

  return {
    citySlug,
    cityLabel: market.cityLabel,
    serviceSlug,
    phase: market.phase,
    cluster: market.cluster,
    population: market.population,
    score,
    tier: tierFromScore(score),
    pageStatus: service.pageStatus,
    evidence: service.evidence,
    components: {
      gsc: service.gscScore,
      serviceMomentum: SERVICE_MOMENTUM[serviceSlug],
      proximity: market.proximityScore,
      population: market.populationScore,
      competitionOpportunity: market.competitionOpportunityScore,
    },
  };
};

export const getLocalSeoDecision = (citySlug, serviceSlug) =>
  buildDecision(citySlug, serviceSlug);

export const getPremiumLocalTargets = ({ phase } = {}) => {
  const targets = [];

  for (const [citySlug, market] of Object.entries(markets)) {
    if (phase && market.phase !== phase) continue;

    for (const serviceSlug of Object.keys(market.services)) {
      const decision = buildDecision(citySlug, serviceSlug);
      if (decision?.tier === "A") targets.push(decision);
    }
  }

  return targets;
};

export const getPremiumLocalTargetsForService = (serviceSlug) =>
  getPremiumLocalTargets().filter((target) => target.serviceSlug === serviceSlug);

export const getPremiumLocalTargetsForCity = (citySlug) =>
  getPremiumLocalTargets().filter((target) => target.citySlug === citySlug);

export const localSeoMarkets = markets;

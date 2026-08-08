export const SERP_RESEARCH_DATE = "2026-08-08";

const cityValidations = Object.freeze({
  rouen: Object.freeze({
    cartomancie: Object.freeze({
      recommendation: "hold-local-landing",
      marketState: "strong-local-pack",
      rationale: "Rouen dispose de nombreux praticiens physiquement implantés et d'acteurs très établis. Tourma-Line ne doit pas présenter Gerponville comme un cabinet rouennais.",
      evidence: [
        "PagesJaunes recense 11 résultats voyante à Rouen, dont Corinne Billard avec 106 avis Google.",
        "Princesse Esmeralda possède une landing dédiée Voyante à Rouen et plus de 40 ans d'expérience.",
        "Mme Line communique sur une présence à Rouen depuis 1974.",
      ],
      sources: [
        "https://www.pagesjaunes.fr/annuaire/rouen-76/voyante",
        "https://princesseesmeralda.fr/",
        "https://www.mmeline-voyance.fr/",
      ],
    }),
    numerologie: Object.freeze({
      recommendation: "editorial-opportunity",
      marketState: "specialist-organic-competitor",
      rationale: "La SERP montre une spécialiste locale très travaillée, mais moins de concurrence dédiée qu'en voyance. Priorité à l'autorité éditoriale et au pilier départemental avant une landing Rouen.",
      evidence: [
        "Marie-France Dufrenne possède une page d'accueil et un article longue-forme spécifiquement optimisés Numérologie à Rouen.",
        "Ses prestations sont proposées en présentiel à Mont-Saint-Aignan et en visio, avec tarifs et contenu pédagogique détaillés.",
      ],
      sources: [
        "https://mariefrancedufrenne.com/",
        "https://mariefrancedufrenne.com/numerologie-a-rouen-depasser-les-blocages-et-retrouver-votre-elan/",
      ],
    }),
    "soin-lahochi": Object.freeze({
      recommendation: "hold-local-landing",
      marketState: "strong-local-energy-market",
      rationale: "Le marché énergétique rouennais comporte plusieurs praticiens physiques et une forte preuve locale. Une page ville distante serait moins utile qu'un pilier Seine-Maritime et du contenu expert.",
      evidence: [
        "Jennifer Ridoynauth affiche 228 avis Google autour de Rouen.",
        "Mieux-Être & Spirituel dispose d'une page ciblée 'Magnétiseur et soin énergétique Rouen' et pratique notamment le Lahochi.",
      ],
      sources: [
        "https://mieuxetreetspirituel.com/",
      ],
    }),
  }),
  "le-havre": Object.freeze({
    cartomancie: Object.freeze({
      recommendation: "hold-local-landing",
      marketState: "strong-local-pack",
      rationale: "Le Havre possède plusieurs cabinets physiques et des profils à forte ancienneté/avis. Tourma-Line doit éviter une landing qui laisserait croire à une implantation havraise.",
      evidence: [
        "PagesJaunes affiche quatre voyantes locales principales.",
        "Le Domaine d'Illona dispose d'un établissement au Havre et d'une forte preuve d'avis.",
        "Caramba Voyance Medium possède un cabinet physique au Havre.",
      ],
      sources: [
        "https://www.pagesjaunes.fr/annuaire/le-havre-76/voyante",
      ],
    }),
    numerologie: Object.freeze({
      recommendation: "editorial-opportunity",
      marketState: "thin-dedicated-organic-serp",
      rationale: "La recherche dédiée numérologie au Havre paraît moins occupée par des spécialistes locaux que la voyance ou l'énergétique. Tester d'abord du contenu éditorial et le pilier numérologie Seine-Maritime.",
      evidence: [
        "Les résultats observés comportent surtout des pages généralistes de voyance expliquant la numérologie plutôt qu'un spécialiste local dominant.",
        "La demande exacte reste à confirmer dans Search Console avant toute page ville.",
      ],
      sources: [
        "https://www.sylviemedium.fr/voyance-telephone-le-havre/",
      ],
    }),
    "soin-lahochi": Object.freeze({
      recommendation: "hold-local-landing",
      marketState: "crowded-local-energy-market",
      rationale: "Le Havre est très concurrentiel en soins énergétiques avec praticiens physiques, annuaires spécialisés et réservation locale. Aucun avantage utilisateur à simuler une proximité depuis Gerponville.",
      evidence: [
        "ProxiBienEtre recense de nombreux praticiens en soins énergétiques au Havre.",
        "AONA Massage présente une énergéticienne avec réservation locale et avis clients.",
        "Laurence Vasse cible explicitement Le Havre, Bolbec, Fécamp et Goderville depuis Cauville-sur-Mer.",
      ],
      sources: [
        "https://www.proxibienetre.fr/le-havre/cat/soins-%C3%A9nergetiques",
        "https://www.planity.com/aona-massage-76600-le-havre",
        "https://www.laurence-vasse.fr/a-propos",
      ],
    }),
  }),
  dieppe: Object.freeze({
    cartomancie: Object.freeze({
      recommendation: "editorial-opportunity",
      marketState: "moderate-organic-opportunity",
      rationale: "La SERP voyance à Dieppe est moins dense qu'à Rouen ou au Havre, mais Tourma-Line reste éloigné. Tester autorité éditoriale et consultation à distance avant une landing ville.",
      evidence: [
        "Claudine Voyance et L'Éveil des sens sont visibles localement.",
        "Des annuaires/programmatic pages occupent une partie importante de la SERP, ce qui laisse une opportunité organique à un contenu réellement meilleur.",
      ],
      sources: [
        "https://www.pagesjaunes.fr/annuaire/region/haute-normandie/voyance",
        "https://voyanceprofonde.fr/a-proximite/seine-maritime/voyante-dieppe",
        "https://www.emmanuellepatry.fr/seine-maritime/dieppe/voyante-reputee",
      ],
    }),
    numerologie: Object.freeze({
      recommendation: "editorial-opportunity",
      marketState: "weak-dedicated-serp",
      rationale: "Aucun spécialiste local dominant en numérologie n'est ressorti dans l'échantillon SERP. Potentiel éditorial possible, mais demande locale encore non prouvée.",
      evidence: [
        "La SERP observée est surtout occupée par des acteurs multi-services et annuaires.",
        "Pas de nouvelle landing tant que Search Console ou une étude de demande ne confirme pas l'intention locale.",
      ],
      sources: [],
    }),
    "soin-lahochi": Object.freeze({
      recommendation: "hold-local-landing",
      marketState: "established-local-energy-market",
      rationale: "Dieppe possède plusieurs praticiens énergétiques locaux et des annuaires très présents. Privilégier l'autorité du pilier énergétique et la consultation à distance.",
      evidence: [
        "Vanessa Yung dispose d'un établissement bien-être physique à Dieppe.",
        "Reflex' Ô Zen se positionne comme énergéticienne à Dieppe.",
        "La Pierre Divine cible explicitement énergéticienne près de Dieppe depuis Criel-sur-Mer.",
      ],
      sources: [
        "https://reflex-o-zen.com/",
        "https://lapierredivine.fr/presentation/",
        "https://www.resalib.fr/recherche/praticien-en-soins-energetiques/dieppe",
      ],
    }),
  }),
});

const territoryDecisions = Object.freeze({
  "caux-seine-agglo": Object.freeze({
    recommendation: "publish-hub",
    rationale: "Caux Seine permet de regrouper Bolbec, Lillebonne, Port-Jérôme-sur-Seine et 50 communes dans une vraie hiérarchie territoriale. Les SERP locales montrent de la concurrence, mais moins de domination qu'à Rouen/Le Havre, sans justifier trois landings par commune.",
    evidence: [
      "Caux Seine agglo regroupe officiellement 50 communes et 79 337 habitants en vigueur au 1er janvier 2026.",
      "Bolbec possède au moins une voyante/cartomancienne physique et des offres énergétiques, mais la SERP reste largement occupée par des annuaires.",
      "Lillebonne possède des acteurs locaux mais peu de profondeur organique dédiée.",
    ],
    sources: [
      "https://www.cauxseine.fr/lagglomeration/territoire/50-communes/",
      "https://www.banatic.interieur.gouv.fr/intercommunalite/200010700-ca-caux-seine-agglo",
      "https://www.planity.com/institut-de-beaute/soin-energetique/76210-bolbec",
    ],
  }),
  "metropole-rouen-normandie": Object.freeze({
    recommendation: "hold-hub",
    rationale: "Forte concurrence physique et Local Pack. Construire d'abord autorité départementale, contenu et réputation avant un hub métropolitain.",
  }),
  "le-havre-seine-metropole": Object.freeze({
    recommendation: "hold-hub",
    rationale: "Marchés voyance et énergétique très locaux et concurrentiels. Le hub n'apporterait pas encore assez de valeur spécifique.",
  }),
  "dieppe-maritime": Object.freeze({
    recommendation: "hold-hub",
    rationale: "Potentiel organique sur certaines intentions mais territoire éloigné du cabinet. Valider d'abord la demande avec contenu éditorial et GSC.",
  }),
  "yvetot-normandie": Object.freeze({
    recommendation: "keep-under-pays-de-caux",
    rationale: "Yvetot possède déjà une landing cartomancie Tier A et le hub Pays de Caux couvre le niveau géographique supérieur. Éviter la cannibalisation territoriale.",
  }),
  "plateau-de-caux": Object.freeze({
    recommendation: "keep-under-pays-de-caux",
    rationale: "Le territoire officiel de 40 communes est pertinent pour la base de connaissance, mais pas assez de demande SERP spécifique pour un hub public supplémentaire à ce stade.",
  }),
  "campagne-de-caux": Object.freeze({
    recommendation: "keep-under-pays-de-caux",
    rationale: "Goderville et les 22 communes sont géographiquement stratégiques, mais le hub Pays de Caux peut absorber cette couverture tant qu'aucun signal GSC n'impose une sous-page dédiée.",
  }),
});

export const getSerpValidation = (citySlug, serviceSlug) =>
  cityValidations[citySlug]?.[serviceSlug] ?? null;

export const getTerritorySerpDecision = (hubSlug) =>
  territoryDecisions[hubSlug] ?? null;

export const serpCityValidations = cityValidations;
export const serpTerritoryDecisions = territoryDecisions;

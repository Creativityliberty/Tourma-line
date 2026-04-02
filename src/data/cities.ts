export interface City {
  slug: string;
  name: string;
  region: string;
  country: string;
  flag: string;
  type: "local" | "national" | "international";
  description?: string;
}

// Villes locales Normandie (cabinet + domicile)
export const localCities: City[] = [
  { slug: "fecamp", name: "Fécamp", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "valmont", name: "Valmont", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "cany-barville", name: "Cany-Barville", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "ourville-en-caux", name: "Ourville-en-Caux", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "saint-riquier-es-plains", name: "Saint-Riquier-ès-Plains", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "yvetot", name: "Yvetot", region: "Seine-Maritime", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "rouen", name: "Rouen", region: "Normandie", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "le-havre", name: "Le Havre", region: "Normandie", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "caen", name: "Caen", region: "Normandie", country: "France", flag: "🇫🇷", type: "local" },
  { slug: "dieppe", name: "Dieppe", region: "Normandie", country: "France", flag: "🇫🇷", type: "local" },
];

// Villes nationales (consultation à distance)
export const nationalCities: City[] = [
  { slug: "paris", name: "Paris", region: "Île-de-France", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "nice", name: "Nice", region: "Côte d'Azur", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "cannes", name: "Cannes", region: "Côte d'Azur", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "bordeaux", name: "Bordeaux", region: "Nouvelle-Aquitaine", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "lyon", name: "Lyon", region: "Auvergne-Rhône-Alpes", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "marseille", name: "Marseille", region: "Provence-Alpes-Côte d'Azur", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "la-rochelle", name: "La Rochelle", region: "Nouvelle-Aquitaine", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "toulouse", name: "Toulouse", region: "Occitanie", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "nantes", name: "Nantes", region: "Pays de la Loire", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "montpellier", name: "Montpellier", region: "Occitanie", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "rennes", name: "Rennes", region: "Bretagne", country: "France", flag: "🇫🇷", type: "national" },
  { slug: "strasbourg", name: "Strasbourg", region: "Grand Est", country: "France", flag: "🇫🇷", type: "national" },
];

// Villes internationales francophones
export const internationalCities: City[] = [
  { slug: "monaco", name: "Monaco", region: "Principauté de Monaco", country: "Monaco", flag: "🇲🇨", type: "international" },
  { slug: "bruxelles", name: "Bruxelles", region: "Bruxelles-Capitale", country: "Belgique", flag: "🇧🇪", type: "international" },
  { slug: "liège", name: "Liège", region: "Wallonie", country: "Belgique", flag: "🇧🇪", type: "international" },
  { slug: "geneve", name: "Genève", region: "Genève", country: "Suisse", flag: "🇨🇭", type: "international" },
  { slug: "lausanne", name: "Lausanne", region: "Vaud", country: "Suisse", flag: "🇨🇭", type: "international" },
  { slug: "luxembourg", name: "Luxembourg", region: "Luxembourg", country: "Luxembourg", flag: "🇱🇺", type: "international" },
  { slug: "montreal", name: "Montréal", region: "Québec", country: "Canada", flag: "🇨🇦", type: "international" },
];

export const allCities: City[] = [...localCities, ...nationalCities, ...internationalCities];

// Helper pour afficher les villes dans les sections SEO
export const seoCitiesForSchema = [
  ...localCities.map(c => c.name),
  ...nationalCities.map(c => c.name),
];

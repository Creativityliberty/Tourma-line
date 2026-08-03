import {
  localCities as rawLocalCities,
  nationalCities as rawNationalCities,
  internationalCities as rawInternationalCities,
} from "./citiesData.mjs";

export interface City {
  slug: string;
  name: string;
  region: string;
  country: string;
  flag: string;
  type: "local" | "national" | "international";
  description?: string;
}

export const localCities: City[] = rawLocalCities;
export const nationalCities: City[] = rawNationalCities;
export const internationalCities: City[] = rawInternationalCities;
export const allCities: City[] = [...rawLocalCities, ...rawNationalCities, ...rawInternationalCities];

// Helper pour afficher les villes dans les sections SEO
export const seoCitiesForSchema = [
  ...rawLocalCities.map((c) => c.name),
  ...rawNationalCities.map((c) => c.name),
];

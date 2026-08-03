export interface CityData {
  slug: string;
  name: string;
  region: string;
  country: string;
  flag: string;
  type: "local" | "national" | "international";
}

export declare const localCities: CityData[];
export declare const nationalCities: CityData[];
export declare const internationalCities: CityData[];
export declare const allCities: CityData[];
export declare const seoCitiesForSchema: string[];

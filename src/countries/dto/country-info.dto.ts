export interface PopulationCount {
  year: number;
  value: number;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface CountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

export interface CountryFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export class CountryInfoDto {
  borders: BorderCountry[];
  population: PopulationCount[];
  flagURL: string;
}

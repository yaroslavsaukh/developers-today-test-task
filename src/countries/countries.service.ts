import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  BorderCountry,
  CountryFlag,
  CountryInfoDto,
  CountryPopulation,
} from './dto/country-info.dto';

@Injectable()
export class CountriesService {
  async getAvailableCountries() {
    const countries = await axios.get(
      'https://date.nager.at/api/v3/AvailableCountries',
    );
    return countries.data;
  }
  async getCountryInfo(countryCode: string): Promise<CountryInfoDto> {
    const allCountryInfo: CountryInfoDto = {
      borders: [],
      population: [],
      flagURL: '',
    };

    const countryInfoResp = await axios.get<{
      commonName: string;
      borders: BorderCountry[];
    }>(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);

    const countryInfo = countryInfoResp.data;
    allCountryInfo.borders = countryInfo.borders || [];

    const populationResp = await axios.get<{ data: CountryPopulation[] }>(
      'https://countriesnow.space/api/v0.1/countries/population',
    );

    const countryPopulation = populationResp.data.data.find(
      (c) => c.country === countryInfo.commonName,
    );
    allCountryInfo.population = countryPopulation?.populationCounts || [];

    const flagsResp = await axios.get<{ data: CountryFlag[] }>(
      'https://countriesnow.space/api/v0.1/countries/flag/images',
    );

    const countryFlag = flagsResp.data.data.find(
      (f) => f.name === countryInfo.commonName,
    );
    allCountryInfo.flagURL = countryFlag?.flag || '';

    return allCountryInfo;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryInfoDto } from './dto/country-info.dto';

@Controller()
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('countries')
  getAvailableCountries(): Promise<string[]> {
    return this.countriesService.getAvailableCountries();
  }

  @Get('countries/:countryCode')
  getCountryInfo(
    @Param('countryCode') countryCode: string,
  ): Promise<CountryInfoDto> {
    return this.countriesService.getCountryInfo(countryCode);
  }
}

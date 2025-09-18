import { IsString, IsInt, IsOptional, IsArray } from 'class-validator';

export class AddHolidaysDto {
  @IsString()
  countryCode: string;

  @IsInt()
  year: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  holidays?: string[];
}

import { IsNotEmpty, IsNumber, IsString, Min, Max, IsOptional, IsUrl } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty({ message: 'The name field is required.' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'The attack field is required.' })
  @IsNumber()
  @Min(1, { message: 'Attack must be at least 1.' })
  @Max(255, { message: 'Attack must not exceed 255.' })
  attack: number;

  @IsNotEmpty({ message: 'The defense field is required.' })
  @IsNumber()
  @Min(1, { message: 'Defense must be at least 1.' })
  @Max(255, { message: 'Defense must not exceed 255.' })
  defense: number;

  @IsNotEmpty({ message: 'The speed field is required.' })
  @IsNumber()
  @Min(1, { message: 'Speed must be at least 1.' })
  @Max(255, { message: 'Speed must not exceed 255.' })
  speed: number;

  @IsNotEmpty({ message: 'The HP field is required.' })
  @IsNumber()
  @Min(1, { message: 'HP must be at least 1.' })
  @Max(255, { message: 'HP must not exceed 255.' })
  hp: number;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  type?: string;
}

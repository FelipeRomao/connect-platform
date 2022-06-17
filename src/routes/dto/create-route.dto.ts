import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  title: string;

  startPosition: { lat: number; lng: number };

  endPosition: { lat: number; lng: number };
}

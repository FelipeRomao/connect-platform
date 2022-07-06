import { IsNotEmpty } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  title: string;

  startPosition: { lat: number; lng: number };

  endPosition: { lat: number; lng: number };
}

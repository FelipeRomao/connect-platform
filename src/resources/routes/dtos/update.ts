import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {}

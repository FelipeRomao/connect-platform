import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create.dto';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {}

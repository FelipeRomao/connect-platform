import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

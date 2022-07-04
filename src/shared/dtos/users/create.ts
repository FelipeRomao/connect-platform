import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  avatarUrl: string;

  @IsNotEmpty()
  displayName: string;

  @IsDate()
  birth: Date;
}

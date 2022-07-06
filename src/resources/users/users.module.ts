import { CRUDRepository } from '@/core/app/repositories/crud';
import { UsersService } from '@/core/app/services/user.crud';
import { User } from '@/core/domain/entities/user';
import { UserTypeOrmRepository } from '@/core/infra/typeorm/repositories/user';
import { UserSchema } from '@/core/infra/typeorm/schemas/user';
import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: UserTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new UserTypeOrmRepository(dataSource.getRepository(User));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: UsersService,
      useFactory: (userRepo: CRUDRepository<User>) => {
        return new UsersService(userRepo);
      },
      inject: [UserTypeOrmRepository],
    },
  ],
})
export class UsersModule {}

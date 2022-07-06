import { CRUDRepository } from '@/core/app/repositories/crud';
import { RoutesService } from '@/core/app/services/route.crud';
import { Route } from '@/core/domain/entities/route';
import { RouteTypeOrmRepository } from '@/core/infra/typeorm/repositories/route';
import { RouteSchema } from '@/core/infra/typeorm/schemas/route';
import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RoutesController } from './routes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: RoutesService,
      useFactory: (routeRepo: CRUDRepository<Route>) => {
        return new RoutesService(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}

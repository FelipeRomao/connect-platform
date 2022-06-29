import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { ListAllRoutesRepository } from 'src/@core/app/repositories/list-all-routes';
import { DataSource } from 'typeorm';
import { CreateRouteRepository } from '../@core/app/repositories/create-route';
import { CreateRouteService } from '../@core/app/services/create-route';
import { ListAllRoutesService } from '../@core/app/services/list-all-routes';
import { Route } from '../@core/domain/entities/route';
import { RouteInMemoryRepository } from '../@core/infra/providers/db/in-memory/route-in-memory.repository';
import { RouteTypeOrmRepository } from '../@core/infra/providers/db/typeorm/route-typeorm.repository';
import { RouteSchema } from '../@core/infra/providers/db/typeorm/route.schema';
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
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteService,
      useFactory: (routeRepo: CreateRouteRepository) => {
        return new CreateRouteService(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRoutesService,
      useFactory: (routeRepo: ListAllRoutesRepository) => {
        return new ListAllRoutesService(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}

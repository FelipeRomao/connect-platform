import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { ListAllRoutesRepository } from 'src/@core/app/contracts/list-all-routes-repository';
import { DataSource } from 'typeorm';
import { CreateRouteRepository } from '../@core/app/contracts/create-route-repository';
import { CreateRouteService } from '../@core/app/services/create-route';
import { ListAllRoutesService } from '../@core/app/services/list-all-routes';
import { Route } from '../@core/domain/entities/route';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { RouteTypeOrmRepository } from '../@core/infra/db/typeorm/route-typeorm.repository';
import { RouteSchema } from '../@core/infra/db/typeorm/route.schema';
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

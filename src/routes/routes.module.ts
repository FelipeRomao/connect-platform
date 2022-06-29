import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { CRUDRepository } from 'src/@core/app/repositories/crud';
import { RouteService } from 'src/@core/app/services/route.crud';
import { DataSource } from 'typeorm';
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
      provide: RouteService,
      useFactory: (routeRepo: CRUDRepository<Route>) => {
        return new RouteService(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
    /* {
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
    }, */
  ],
})
export class RoutesModule {}

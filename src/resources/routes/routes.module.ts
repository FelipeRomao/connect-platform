import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { CRUDRepository } from 'src/@core/app/repositories/crud';
import { RouteService } from 'src/@core/app/services/route.crud';
import { DataSource } from 'typeorm';
import { Route } from '../../@core/domain/entities/route';
import { RouteTypeOrmRepository } from '../../@core/infra/db/typeorm/route-typeorm.repository';
import { RouteSchema } from '../../@core/infra/db/typeorm/route.schema';
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
      provide: RouteService,
      useFactory: (routeRepo: CRUDRepository<Route>) => {
        return new RouteService(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}

import { CreateRouteRepository } from 'src/@core/app/repositories/create-route';
import { ListAllRoutesRepository } from 'src/@core/app/repositories/list-all-routes';
import { Repository } from 'typeorm';
import { Route } from '../../../../domain/entities/route';

export class RouteTypeOrmRepository
  implements CreateRouteRepository, ListAllRoutesRepository
{
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}

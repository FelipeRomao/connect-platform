import { CreateRouteRepository } from 'src/@core/app/contracts/create-route-repository';
import { ListAllRoutesRepository } from 'src/@core/app/contracts/list-all-routes-repository';
import { Route } from '../../../domain/entities/route';

export class RouteInMemoryRepository
  implements CreateRouteRepository, ListAllRoutesRepository
{
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}

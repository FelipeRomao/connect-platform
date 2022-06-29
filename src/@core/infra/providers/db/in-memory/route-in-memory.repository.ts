import { CreateRouteRepository } from 'src/@core/app/repositories/create-route';
import { ListAllRoutesRepository } from 'src/@core/app/repositories/list-all-routes';
import { Route } from '../../../../domain/entities/route';

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

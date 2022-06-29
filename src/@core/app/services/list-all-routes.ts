import { ListAllRoutes } from '../../domain/repositories/list-all-routes';
import { CreateRouteOutput } from '../dtos/route-output';
import { ListAllRoutesRepository } from '../repositories/list-all-routes';

export class ListAllRoutesService implements ListAllRoutes {
  constructor(private routeRepo: ListAllRoutesRepository) {}

  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((route) => route.toJSON());
  }
}

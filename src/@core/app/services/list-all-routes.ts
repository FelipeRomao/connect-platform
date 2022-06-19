import { ListAllRoutes } from '../../domain/use-cases/list-all-routes';
import { ListAllRoutesRepository } from '../contracts/list-all-routes-repository';
import { CreateRouteOutput } from '../models/route-output';

export class ListAllRoutesService implements ListAllRoutes {
  constructor(private routeRepo: ListAllRoutesRepository) {}

  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((route) => route.toJSON());
  }
}

import { RouteRepositoryInterface } from '../../domain/use-cases/route.repository';
import { CreateRouteOutput } from '../models/create-route-output';

export class ListAllRoutesService {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

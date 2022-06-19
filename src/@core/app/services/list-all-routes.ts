import { ListAllRoutesRepository } from '../contracts/list-all-routes-repository';
import { CreateRouteOutput } from '../models/create-route-output';

export class ListAllRoutesService {
  constructor(private routeRepo: ListAllRoutesRepository) {}

  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

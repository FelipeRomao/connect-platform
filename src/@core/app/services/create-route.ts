import { Route } from '../../domain/entities/route';
import { CreateRoute } from '../../domain/use-cases/create-route';
import { CreateRouteRepository } from '../contracts/create-route-repository';
import { CreateRouteInput } from '../models/route-input';
import { CreateRouteOutput } from '../models/route-output';

export class CreateRouteService implements CreateRoute {
  constructor(private routeRepo: CreateRouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

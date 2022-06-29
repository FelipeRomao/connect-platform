import { Route } from '../../domain/entities/route';
import { CreateRoute } from '../../domain/repositories/create-route';
import { CreateRouteInput } from '../dtos/route-input';
import { CreateRouteOutput } from '../dtos/route-output';
import { CreateRouteRepository } from '../repositories/create-route';

export class CreateRouteService implements CreateRoute {
  constructor(private routeRepo: CreateRouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

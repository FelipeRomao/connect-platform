import { Route } from '../../domain/entities/route';
import { CreateRouteRepository } from '../contracts/create-route-repository';
import { CreateRouteInput } from '../models/create-route-input';
import { CreateRouteOutput } from '../models/create-route-output';

export class CreateRouteService {
  constructor(private routeRepo: CreateRouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

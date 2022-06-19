import { Route } from '../../domain/entities/route';
import { RouteRepositoryInterface } from '../../domain/use-cases/route.repository';
import { CreateRouteInput } from '../models/create-route-input';
import { CreateRouteOutput } from '../models/create-route-output';

export class CreateRouteService {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

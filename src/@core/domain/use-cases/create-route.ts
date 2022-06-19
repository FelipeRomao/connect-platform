import { Route, RouteOutput } from '../entities/route';

export interface CreateRoute {
  execute(input: Route): Promise<RouteOutput>;
}

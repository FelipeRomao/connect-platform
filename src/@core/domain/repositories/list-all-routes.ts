import { RouteOutput } from '../entities/route';

export interface ListAllRoutes {
  execute(): Promise<RouteOutput[]>;
}

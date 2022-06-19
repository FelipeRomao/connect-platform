import { Route } from '../entities/route';

export interface CreateRoute {
  insert(route: Route): Promise<void>;
}

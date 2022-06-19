import { Route } from '../entities/route';

export interface RouteRepositoryInterface {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}

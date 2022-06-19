import { Route } from '../entities/route';

export interface ListAllRoutes {
  findAll(): Promise<Route[]>;
}

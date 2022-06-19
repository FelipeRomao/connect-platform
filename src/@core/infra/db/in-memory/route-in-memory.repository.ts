import { Route } from '../../../domain/entities/route';
import { RouteRepositoryInterface } from '../../../domain/use-cases/route.repository';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}

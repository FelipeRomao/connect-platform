import { Repository } from 'typeorm';
import { Route } from '../../../domain/entities/route';
import { RouteRepositoryInterface } from '../../../domain/use-cases/route.repository';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}

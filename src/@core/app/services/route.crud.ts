import { Route } from 'src/@core/domain/entities/route';
import { BaseEntity } from 'src/@core/domain/repositories/base.entity';
import { CreateRouteInput } from '../dtos/route-input';
import { CRUDRepository } from '../repositories/crud';

export class RouteService implements BaseEntity<CreateRouteInput> {
  constructor(private readonly crudRepo: CRUDRepository<Route>) {}

  async create(input: CreateRouteInput): Promise<CreateRouteInput> {
    const route = Route.create(input);
    await this.crudRepo.create(route);
    return route.toJSON();
  }

  async findAll(): Promise<Route[]> {
    return await this.crudRepo.findAll();
  }

  findOne(data: Route): Promise<Route> {
    throw new Error('Method not implemented.');
  }

  update(data: Route): Promise<Route> {
    throw new Error('Method not implemented.');
  }

  remove(data: Route): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

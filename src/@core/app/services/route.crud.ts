import { Route } from 'src/@core/domain/entities/route';
import { BaseEntity } from 'src/@core/domain/repositories/base.entity';
import { CreateRouteInput } from '../dtos/routes/input';
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

  async findOne(id: string): Promise<Route> {
    return await this.crudRepo.findOne(id);
  }

  async update(id: string, updateDto): Promise<Route> {
    return await this.crudRepo.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    await this.crudRepo.remove(id);
  }
}

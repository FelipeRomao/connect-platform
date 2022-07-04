import { Route } from '@/core/domain/entities/route';
import { BaseEntity } from '@/core/domain/repositories/base.entity';
import { CreateRouteInput } from '../dtos/routes/input';
import { CRUDRepository } from '../repositories/crud';

export class RoutesService implements BaseEntity<CreateRouteInput> {
  constructor(private readonly repo: CRUDRepository<Route>) {}

  async create(input: CreateRouteInput): Promise<CreateRouteInput> {
    const route = Route.create(input);
    await this.repo.create(route);
    return route.toJSON();
  }

  async findAll(): Promise<Route[]> {
    return await this.repo.findAll();
  }

  async findOne(id: string): Promise<Route> {
    return await this.repo.findOne(id);
  }

  async update(id: string, updateDto): Promise<Route> {
    return await this.repo.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    await this.repo.remove(id);
  }
}

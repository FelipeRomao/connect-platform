import { CRUDRepository } from '@/core/app/repositories/crud';
import { Route } from '@/core/domain/entities/route';
import { Repository } from 'typeorm';

export class RouteTypeOrmRepository implements CRUDRepository<Route> {
  constructor(private readonly ormRepo: Repository<Route>) {}

  async create(route: Route): Promise<Route> {
    return await this.ormRepo.save(route);
  }

  async findAll(): Promise<Route[]> {
    return await this.ormRepo.find();
  }

  async findOne(id: string): Promise<Route> {
    return await this.ormRepo.findOneBy({ id });
  }

  async update(id: string, updateDto): Promise<any> {
    return await this.ormRepo.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
}

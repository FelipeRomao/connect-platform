import { CRUDRepository } from 'src/@core/app/repositories/crud';
import { Repository } from 'typeorm';
import { Route } from '../../../domain/entities/route';

export class RouteTypeOrmRepository implements CRUDRepository<Route> {
  constructor(private ormRepo: Repository<Route>) {}

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

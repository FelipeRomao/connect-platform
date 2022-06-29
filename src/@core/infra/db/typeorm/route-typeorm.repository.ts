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

  findOne(data: Route): Promise<Route> {
    throw new Error('Method not implemented.');
  }

  update(data: Route): Promise<Route> {
    throw new Error('Method not implemented.');
  }

  remove(data: Route): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /* async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  } */
}

import { CRUDRepository } from '@/core/app/repositories/crud';
import { User } from '@/core/domain/entities/user';
import { Repository } from 'typeorm';

export class UserTypeOrmRepository implements CRUDRepository<User> {
  constructor(private readonly ormRepo: Repository<User>) {}

  async create(user: User): Promise<User> {
    return await this.ormRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.ormRepo.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.ormRepo.findOneBy({ id });
  }

  async update(id: string, updateDto): Promise<any> {
    return await this.ormRepo.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
}

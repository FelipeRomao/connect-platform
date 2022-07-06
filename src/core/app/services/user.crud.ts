import { User, UserOutput, UserProps } from '@/core/domain/entities/user';
import { BaseEntity } from '@/core/domain/repositories/base.entity';
import { CRUDRepository } from '../repositories/crud';

export class UsersService implements BaseEntity<UserProps> {
  constructor(private readonly repo: CRUDRepository<User>) {}

  async create(input: UserProps): Promise<UserOutput> {
    const user = User.create(input);
    await this.repo.create(user);
    return user.toJSON();
  }

  async findAll(): Promise<UserOutput[]> {
    return this.repo.findAll();
  }

  async findOne(id: string): Promise<UserOutput> {
    return await this.repo.findOne(id);
  }

  async update(id: string, updateDto): Promise<UserOutput> {
    return await this.repo.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    await this.repo.remove(id);
  }
}

export interface CRUDRepository<T> {
  create(input: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(data: T): Promise<T>;
  update(data: T): Promise<T>;
  remove(data: T): Promise<void>;
}

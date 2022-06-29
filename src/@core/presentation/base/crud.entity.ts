export interface CRUDBaseEntity<T> {
  create(): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(data: T): Promise<T>;
  update(data: T): Promise<T>;
  remove(data: T): Promise<void>;
}

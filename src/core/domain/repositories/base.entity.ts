export interface BaseEntity<T> {
  create(input: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  update(id: string, updateDto): Promise<T>;
  remove(id: string): Promise<void>;
}

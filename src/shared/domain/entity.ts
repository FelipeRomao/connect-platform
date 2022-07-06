import { uuid } from 'uuidv4';

export abstract class Entity<T> {
  public readonly id: string;

  constructor(public readonly props: Omit<T, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

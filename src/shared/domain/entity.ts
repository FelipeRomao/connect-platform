import crypto from 'crypto';

export abstract class Entity<T> {
  public readonly id: string;

  constructor(public readonly props: T) {
    this.id = crypto.randomBytes(16).toString('hex');
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

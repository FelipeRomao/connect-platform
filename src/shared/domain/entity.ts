import crypto from 'crypto';

export abstract class Entity {
  public readonly id: string;

  constructor() {
    this.id = crypto.randomBytes(16).toString('hex');
  }
}

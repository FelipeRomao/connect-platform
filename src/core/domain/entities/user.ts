import crypto from 'crypto';

export type UserProps = {
  avatar_url: string;
  display_name: string;
  birth: Date;
};

export class User {
  public readonly id: string;
  public props: Required<UserProps>;

  constructor(props: UserProps, id?: string) {
    this.id = id || crypto.randomBytes(16).toString('hex');

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

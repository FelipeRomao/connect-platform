import { Entity } from '@/shared/domain/entity';

export type UserProps = {
  avatarUrl: string;
  displayName: string;
  birth: Date;
};

export type UserOutput = {
  id: string;
  avatarUrl: string;
  displayName: string;
  birth: Date;
};

export class User extends Entity<UserProps> {
  public readonly id: string;
  public props: Required<UserProps>;

  private constructor(props: UserProps) {
    super(props);

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
  }

  static create(props: UserProps) {
    return new User(props);
  }

  get avatarUrl(): string {
    return this.props.avatarUrl;
  }

  private set avatarUrl(value: string) {
    this.props.avatarUrl = value;
  }

  get displayName(): string {
    return this.props.displayName;
  }

  private set displayName(value: string) {
    this.props.displayName = value;
  }

  get birth(): Date {
    return this.props.birth;
  }

  private set birth(value: Date) {
    this.props.birth = value;
  }
}

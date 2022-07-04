import { User } from '@/core/domain/entities/user';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<User>({
  name: 'user',
  target: User,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    avatarUrl: {
      type: String,
    },
    displayName: {
      type: String,
    },
    birth: {
      type: Date,
    },
  },
});

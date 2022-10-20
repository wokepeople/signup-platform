import { Account } from '../../account/types/account.type';
import { Person } from './person.type';
import { Role } from './role.type';
import { User } from './user.type';

export type CreateUserResponse = {
  user: Partial<User>;
  person: Partial<Person>;
  account: Partial<Account>;
  role: Role;
  cognito: Record<string, any>;
};

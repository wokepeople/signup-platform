import { AccountUser } from './account-user.type';
import { AccountPerson } from './account-person.type';
import { Role } from './role.type';

export interface AccountUserPersonRoles {
  user: AccountUser;
  person: AccountPerson;
  roles: Role[];
}

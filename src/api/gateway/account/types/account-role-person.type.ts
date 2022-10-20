import { Account } from './account.type';
import { AccountPerson } from './account-person.type';
import { Role } from './role.type';

export interface AccountRolePerson extends Account {
  person?: AccountPerson;
  roles: Role[];
  is_onboarding_completed: boolean;
}

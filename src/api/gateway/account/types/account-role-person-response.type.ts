import { AccountRolePerson } from './account-role-person.type';
import { AccountUser } from './account-user.type';

export type AccountRolePersonResponse = {
  user: AccountUser;
  accounts: AccountRolePerson[];
};

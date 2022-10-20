import { Identifier } from './indentifier.type';

export type UserAccountRoleResponse = {
  id?: string;
  user: Identifier;
  account: Identifier;
  role: Identifier;
  created_at?: string;
  updated_at?: string;
};

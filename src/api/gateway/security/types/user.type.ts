import { Person } from './person.type';

export type User = {
  id: string;
  person: Person;
  email: string;
  roles: string[];
  created_at: string;
  updated_at: string;
  version: number;
};

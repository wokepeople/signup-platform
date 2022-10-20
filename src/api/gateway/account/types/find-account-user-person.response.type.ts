import { Pageable } from 'src/common/utils/types/pageable.type';
import { AccountUserPersonRoles } from './account-user-person-roles.type';

export type FindAccountUserPersonResponse = {
  items: AccountUserPersonRoles[];
  cursors: Pageable | null;
};

import { Pageable } from 'src/common/utils/types/pageable.type';
import { Person } from './person.type';

export type FindAllPersonResponse = {
  items: Person[];
  cursors: Pageable | null;
};

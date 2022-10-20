import { Translation } from 'src/common/utils/types/translation.type';
import { Money } from './money.type';
import { Bonus } from './bonus.type';

export type Salary = {
  salary?: Money;
  bonus?: Bonus;
  base_salary?: string;
  contracting_regime?: Translation;
  equity?: string;
};

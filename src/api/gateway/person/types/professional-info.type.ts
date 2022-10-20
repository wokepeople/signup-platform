import { Translation } from 'src/common/utils/types/translation.type';
import { Salary } from './salary.type';

export type ProfessionalInfo = {
  id?: string;
  position?: string;
  level?: Translation;
  functional_area?: Translation;
  company_name?: string;
  current?: boolean;
  industry?: Translation;
  salary?: Salary;
  start_date?: string;
  end_date?: string;
  sub_area?: Translation;
  format?: Translation;
};

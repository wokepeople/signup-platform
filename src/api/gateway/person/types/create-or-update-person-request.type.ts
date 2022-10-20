import { Translation } from 'src/common/utils/types/translation.type';
import { AcademicInfo } from './academic-info.type';
import { Address } from './address.type';
import { Contact } from './contact.type';
import { Salary } from './salary.type';

export type CreateOrUpdatePersonRequest = {
  id?: string;
  name: string;
  external_id?: string;
  last_name?: string;
  email?: string;
  alternative_email?: string;
  linkedin?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  functional_area?: Translation;
  current_position?: string;
  level?: Translation;
  current_company?: string;
  industry?: Translation;
  salary?: Salary;
  academic_info?: AcademicInfo;
  annotations?: string;
  english_level?: Translation;
  spanish_level?: Translation;
  other_languages?: string;
  career_moment?: Translation;
  type?: string;
  source?: string;
  open_to_work?: boolean;

  genre?: Translation;
  pronoun?: Translation;
  ethnicity?: Translation;
  addresses?: Address[];
  contacts?: Contact[];
  academic_infos?: AcademicInfos[];
  professional_infos?: ProfessionalInfos[];
};

type AcademicInfos = {
  id?: string;
  level_degree: Translation;
  degree_area: Translation;
  university: string;
  start_date: string;
  end_date?: string;
  in_progress?: boolean;
};

type ProfessionalInfos = {
  id?: string;
  position: string;
  company_name: string;
  start_date: string;
  end_date?: string;
  current?: boolean;
  format?: Translation;
  industry?: Translation;
  level?: Translation;
  funcional_area?: Translation;
  sub_area?: Translation;
  salary_info?: SalaryInfo;
};

type SalaryInfo = {
  contracting_regime?: Translation;
  equity?: string;
  salary?: SalaryDetails;
  bonus?: Bonus;
  base?: string;
};

type SalaryDetails = {
  type: string;
  currency: string;
  amount: number;
};

type Bonus = {
  type: string;
  value: string;
};

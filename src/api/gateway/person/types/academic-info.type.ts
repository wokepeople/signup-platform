import { Translation } from 'src/common/utils/types/translation.type';

export type AcademicInfo = {
  id?: string;
  level_degree?: Translation;
  university?: string;
  degree_area?: Translation;
  start_date?: string;
  end_date?: string;
  in_progress?: boolean;
};

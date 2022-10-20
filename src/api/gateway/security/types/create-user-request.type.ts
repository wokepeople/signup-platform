import { Translation } from 'src/common/utils/types/translation.type';

export type CreateUserRequest = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  current_position?: string;
  functional_area?: Translation;
  current_company?: string;
  level?: Translation;
  country?: string;
  career_moment?: Translation;
};

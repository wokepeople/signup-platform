export type CreateUserForm = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  current_position?: string;
  functional_area?: object;
  current_company?: string;
  level?: object;
  country?: string;
  career_moment?: string;
};

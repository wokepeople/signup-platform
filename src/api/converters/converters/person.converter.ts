import { PersonSource } from "../../gateway/person/enums/person-source.enum";
import { PersonType } from "../../gateway/person/enums/person-type.enum";
import { CreateOrUpdatePersonRequest } from "../../gateway/person/types/create-or-update-person-request.type";
import { CreateUserForm } from "../type/create-user-form.type";

export const toCreatePerson = (
  createUserForm: CreateUserForm,
): CreateOrUpdatePersonRequest => {
  return {
    name: createUserForm.name,
    last_name: createUserForm.last_name,
    email: createUserForm.email || undefined,
    country: createUserForm.country ? createUserForm.country : undefined,
    current_position: createUserForm.current_position
      ? createUserForm.current_position
      : undefined,
    functional_area: createUserForm.functional_area
      ? createUserForm.functional_area
      : undefined,
    level: createUserForm.level ? createUserForm.level : undefined,
    current_company: createUserForm.current_company
      ? createUserForm.current_company
      : undefined,
    career_moment: createUserForm.career_moment
      ? JSON.parse(createUserForm.career_moment)
      : undefined,
    type: PersonType.USER,
    source: window.location.pathname.includes('career')
      ? PersonSource.SIGNUP_SCREEN_PEOPLE_PLATFORM
      : PersonSource.SIGNUP_SCREEN_COMPANY_PLATFORM,
  };
};

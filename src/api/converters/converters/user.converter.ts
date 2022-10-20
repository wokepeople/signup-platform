import { Account } from "../../gateway/account/types/account.type";
import { CreateUserRequest } from "../../gateway/security/types/create-user-request.type";
import { CreateUserForm } from "../type/create-user-form.type";


export const toCreateUserRequest = (
  createUserForm: CreateUserForm,
): CreateUserRequest => {
  return {
    name: createUserForm.name,
    last_name: createUserForm.last_name,
    email: createUserForm.email,
    password: createUserForm.password,
    current_position: createUserForm.current_position
      ? createUserForm.current_position
      : undefined,
    functional_area: createUserForm.functional_area
      ? createUserForm.functional_area
      : undefined,
    current_company: createUserForm.current_company
      ? createUserForm.current_company
      : undefined,
    level: createUserForm.level ? createUserForm.level : undefined,
    country: createUserForm.country ? createUserForm.country : undefined,
    career_moment: createUserForm.career_moment
      ? JSON.parse(createUserForm.career_moment)
      : undefined,
  };
};

export const toCreateAccountRequest = (email: string, uid: string): Account => {
  const captureEmailRegex = /@(.*?)\./;

  const accountDomain = captureEmailRegex.exec(email)?.[1];

  if (!accountDomain) {
    throw new Error('Account Domain is invalid');
  }

  return {
    name: `${
      accountDomain.charAt(0).toUpperCase() +
      accountDomain.slice(1).replaceAll('-', ' ')
    }`,
    tenant_id: `${accountDomain
      .toLocaleUpperCase()
      .replaceAll('-', '_')}-${uid}`,
    type: 'ENTERPRISE',
    enabled: true,
  };
};

export const toSignInRequest = (email: string, password: string) => {
  return {
    username: email,
    password,
  };
};

export const toCreateRoleRequest = (username: string, role: string) => {
  return {
    username,
    role_name: role,
  };
};

export const toResetPasswordRequest = (email: string, password: string) => {
  return {
    username: email,
    password,
  };
};

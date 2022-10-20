export type ResetPasswordRequest = {
  username: string;
  password: string;
  new_password: string;
  code: number;
};

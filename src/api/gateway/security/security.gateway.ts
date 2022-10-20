import { AxiosError, AxiosResponse } from 'axios';
import { PublicSecurityClient, SecurityClient } from '../../client/security.client';
import { GatewayException } from '../../core/exceptions/gateway-exception.exception';
import { CreateUserRequest } from './types/create-user-request.type';
import { CreateUserResponse } from './types/create-user-response.type';
import { GenerateCodePasswordRequest } from './types/generate-code-password-request.type';
import { ResetPasswordRequest } from './types/reset-password-request.type';
import { SignInRequest } from './types/sign-in-request.type';
import { SignInResponse } from './types/sign-in-response.type';
import { User } from './types/user.type';
import { VerifyEmail } from './types/verify-email.type';

export const createUser = (
  createUserRequest: CreateUserRequest,
): Promise<CreateUserResponse | GatewayException> =>
  PublicSecurityClient.post('/signup', createUserRequest)
    .then((res: AxiosResponse<CreateUserResponse>) => res.data)
    .catch((err: AxiosError) => {
      return new GatewayException(
        err.name,
        err.message,
        err.response?.status.toString(),
        err.stack,
      );
    });

export const getUserById = (id: string): Promise<User | GatewayException> =>
  SecurityClient.get(`/user/${id}`)
    .then((res: AxiosResponse<User>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const signIn = (
  signInRequest: SignInRequest,
): Promise<SignInResponse | GatewayException> =>
  PublicSecurityClient.post('/login', signInRequest)
    .then((res: AxiosResponse<SignInResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const resetPassword = (
  resetPasswordRequest: ResetPasswordRequest,
): Promise<SignInResponse | GatewayException> =>
  PublicSecurityClient.patch('/reset-password', resetPasswordRequest)
    .then((res: AxiosResponse) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const verifyEmail = (
  email: string,
): Promise<VerifyEmail | GatewayException> =>
  SecurityClient.get(`/verify-email/${email}`)
    .then((res: AxiosResponse<VerifyEmail>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const generateCodePassword = (
  generateCodePasswordRequest: GenerateCodePasswordRequest,
): Promise<SignInResponse | GatewayException> =>
  PublicSecurityClient.post('/reset-password/code', generateCodePasswordRequest)
    .then((res: AxiosResponse) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

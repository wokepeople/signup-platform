import { AxiosError, AxiosResponse } from 'axios';
import { AccountClient } from '../../client/account.client';
import { GatewayException } from '../../core/exceptions/gateway-exception.exception';

import { AccountRolePersonResponse } from './types/account-role-person-response.type';
import { Account } from './types/account.type';
import { ConsumeInvite } from './types/consume-invite';
import { ConsumeInviteRequest } from './types/consume-invite-request.type';
import { FindAccountUserPersonResponse } from './types/find-account-user-person.response.type';
import { Invite } from './types/invite.type';
import { Role } from './types/role.type';
import { UserAccountRolePerson } from './types/user-account-role-person.type';
import { UserAccountRoleResponse } from './types/user-account-role.response';
import { UserAccountRole } from './types/user-account-role.type';

export const getAccountByUserId = (
  userId: string,
): Promise<AccountRolePersonResponse | GatewayException> =>
  AccountClient.get(`/user/${userId}`)
    .then((res: AxiosResponse<AccountRolePersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const getAccountById = (
  accountId: string,
): Promise<Account | GatewayException> =>
  AccountClient.get(`/account/${accountId}`)
    .then((res: AxiosResponse<Account>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const getUsersByAccountId = (
  accountId: string,
): Promise<FindAccountUserPersonResponse | GatewayException> =>
  AccountClient.get(`/account/${accountId}/user`)
    .then((res: AxiosResponse<FindAccountUserPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const deleteUserAccount = (
  accountId: string,
  userId: string,
): Promise<FindAccountUserPersonResponse | GatewayException> =>
  AccountClient.delete(`/user/${userId}/account/${accountId}`)
    .then((res: AxiosResponse<FindAccountUserPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const createInvite = (
  invites: Invite[],
): Promise<Invite[] | GatewayException> =>
  AccountClient.post(`/invite`, invites)
    .then((res: AxiosResponse<Invite[]>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllInviteByEmailAndAccountIdAndStatus = (
  email: string,
  accountId: string,
  status: string,
): Promise<Invite[] | GatewayException> =>
  AccountClient.get(`/invite`, {
    params: { userEmail: email, accountId, status },
  })
    .then((res: AxiosResponse<Invite[]>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllInviteByEmailAndStatus = (
  email: string,
  status: string,
): Promise<Invite[] | GatewayException> =>
  AccountClient.get(`/invite`, {
    params: { userEmail: email, status },
  })
    .then((res: AxiosResponse<Invite[]>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const consumeInvite = (
  inviteId: string,
  data: ConsumeInviteRequest,
): Promise<ConsumeInvite | GatewayException> =>
  AccountClient.post(`/invite/${inviteId}/consume`, data)
    .then((res: AxiosResponse<ConsumeInvite>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllRoles = (): Promise<Role[] | GatewayException> =>
  AccountClient.get(`/role`)
    .then((res: AxiosResponse<Role[]>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const createAccount = (
  account: Account,
): Promise<Account | GatewayException> =>
  AccountClient.post(`/account`, account)
    .then((res: AxiosResponse<Account>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const addUserToAccountWithRoleAndPerson = (
  userAccountRolePerson: UserAccountRolePerson,
): Promise<UserAccountRolePerson | GatewayException> =>
  AccountClient.post(`/user`, userAccountRolePerson)
    .then((res: AxiosResponse<UserAccountRolePerson>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const addRoleToUser = (
  userAccountRole: UserAccountRole,
): Promise<UserAccountRoleResponse | GatewayException> =>
  AccountClient.post(
    `/user/${userAccountRole.user.id}/account/${userAccountRole.account.id}/role`,
    {
      role: userAccountRole.role,
    },
  )
    .then((res: AxiosResponse<UserAccountRoleResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const updateOnboarding = (
  userId: string,
  accountId: string,
): Promise<AxiosResponse | GatewayException> =>
  AccountClient.patch(`/user/${userId}/account/${accountId}/onboarding`)
    .then((res: AxiosResponse) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllInviteByAccountIdAndStatus = (
  accountId: string,
  status: string,
): Promise<Invite[] | GatewayException> =>
  AccountClient.get(`/invite`, {
    params: { accountId, status },
  })
    .then((res: AxiosResponse<Invite[]>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

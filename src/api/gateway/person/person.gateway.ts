import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateOrUpdatePersonRequest } from './types/create-or-update-person-request.type';
import { CreateOrUpdatePersonResponse } from './types/create-or-update-person-response.type';
import { FindPersonResponse } from './types/find-person-response.type';
import { FindAllPersonResponse } from './types/find-all-person-response.type';
import { CreateOrUpdateBatchPersonRequest } from './types/create-or-update-batch-person-request.type';
import { PageParams } from './types/page.params';
import { CountPerson } from './types/count-person.type';
import { FindPersonEquivalentResponse } from './types/find-person-equivalent-response.type';
import { AdvancedSearchFilters } from './types/advanced-search-filters.type';
import { PersonClient } from '../../client/person.client';
import { GatewayException } from '../../core/exceptions/gateway-exception.exception';

export const getPersonById = (
  id: string,
): Promise<FindPersonResponse | GatewayException> =>
  PersonClient.get(`/${id}`)
    .then((res: AxiosResponse<FindPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const createOrUpdatePerson = (
  createOrUpdateRequest: CreateOrUpdatePersonRequest,
  config?: AxiosRequestConfig,
): Promise<CreateOrUpdatePersonResponse | GatewayException> =>
  PersonClient.post(``, createOrUpdateRequest, config)
    .then((res: AxiosResponse<CreateOrUpdatePersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllPersonRequest = (
  params?: string,
): Promise<FindAllPersonResponse | GatewayException> =>
  PersonClient.get(`?${params}`)
    .then((res: AxiosResponse<FindAllPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllByIdIn = (
  ids: string[],
  page?: PageParams,
): Promise<FindAllPersonResponse | GatewayException> =>
  PersonClient.post('find', { ids }, { params: page })
    .then((res: AxiosResponse<FindAllPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const createOrUpdateBatchPerson = (
  createOrUpdateBatchRequest: CreateOrUpdateBatchPersonRequest,
): Promise<AxiosResponse | GatewayException> =>
  PersonClient.post(`/batch`, createOrUpdateBatchRequest)
    .then((res: AxiosResponse) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findOneByEmail = (
  email: string,
): Promise<FindPersonResponse | GatewayException> =>
  PersonClient.get(`/find/${email}`)
    .then((res: AxiosResponse<FindPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const deleteProfessionalInfoByIdAndPersonId = (
  personId: string,
  professionalInfoId: string,
): Promise<AxiosResponse | GatewayException> =>
  PersonClient.delete(`/${personId}/professional-info/${professionalInfoId}`)
    .then((res: AxiosResponse) => res)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const deleteAcademicInfoByIdAndPersonId = (
  personId: string,
  academicInfoId: string,
): Promise<AxiosResponse | GatewayException> =>
  PersonClient.delete(`/${personId}/academic-info/${academicInfoId}`)
    .then((res: AxiosResponse) => res)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const countAllPerson = (): Promise<CountPerson | GatewayException> =>
  PersonClient.get(`/count`)
    .then((res: AxiosResponse<CountPerson>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findPersonEquivalent = (
  ids: string[],
  is_woke_career: boolean,
): Promise<FindPersonEquivalentResponse | GatewayException> =>
  PersonClient.post('/find-equivalent', { ids, is_woke_career })
    .then((res: AxiosResponse<FindPersonEquivalentResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const findAllPersonAdvancedSearchRequest = (
  body: AdvancedSearchFilters,
  queryString?: string,
): Promise<FindAllPersonResponse | GatewayException> =>
  PersonClient.post(`/advanced-search?${queryString}`, body)
    .then((res: AxiosResponse<FindAllPersonResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

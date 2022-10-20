import { AxiosError, AxiosResponse } from 'axios';
import { HomerClient } from '../../client/homer.client';
import { GatewayException } from '../../core/exceptions/gateway-exception.exception';
import { FindLeadsResponse } from './types/find-leads-response.type';

export const getLeadsByEmail = (
  email: string,
): Promise<FindLeadsResponse | GatewayException> =>
  HomerClient.get(`/sharp-spring/lead?emails=${email}`)
    .then((res: AxiosResponse<FindLeadsResponse>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

export const createRecruitmentInitialValues = (tenant_id: string) =>
  HomerClient.post(`/databricks/jobs/run/create-recruitment-initial-values`, {
    tenant_id,
  })
    .then((res: AxiosResponse<unknown>) => res.data)
    .catch(
      (err: AxiosError) =>
        new GatewayException(err.name, err.message, err.code, err.stack),
    );

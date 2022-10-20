import { CreateOrUpdatePersonRequest } from './create-or-update-person-request.type';

export type CreateOrUpdateBatchPersonRequest = {
  people: CreateOrUpdatePersonRequest[];
};

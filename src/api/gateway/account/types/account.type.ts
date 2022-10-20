import { Plan } from './plan.type';

export interface Account {
  id?: string;
  name: string;
  type: string;
  enabled: boolean;
  tenant_id: string;
  parent_account?: Account;
  current_plan?: Plan;
  created_at?: string;
  updated_at?: string;
}

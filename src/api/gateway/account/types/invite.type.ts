export type Invite = {
  id?: string;
  email: string;
  account: InviteAccount;
  role: string;
  tenant_id: string;
};

type InviteAccount = {
  id: string;
  name?: string;
};

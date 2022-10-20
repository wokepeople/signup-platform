import { Identifier } from './indentifier.type';
import { Invite } from './invite.type';

export type ConsumeInvite = {
  user: Identifier;
  person: Identifier;
  invite: Invite;
};

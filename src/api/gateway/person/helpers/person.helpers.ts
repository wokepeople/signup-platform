import { ContactChannel } from 'src/common/infra/gateways/person/enums/contact-channel.enum';
import { Person } from '../types/person.type';

export const getPersonEmail = (person?: Person) => {
  return person?.contacts?.find(
    e =>
      e.channel === ContactChannel.MAIN_EMAIL ||
      e.channel === ContactChannel.ALTERNATIVE_EMAIL,
  );
};

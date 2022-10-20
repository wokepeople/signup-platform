export type FindPersonEquivalentResponse = FindPersonEquivalent[];

export interface FindPersonEquivalent {
  id: string;
  people: Id[];
}

type Id = {
  id: string;
};

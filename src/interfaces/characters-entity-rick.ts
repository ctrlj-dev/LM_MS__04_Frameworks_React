export interface CharactersEntityRick {
  id: string;
  name: string;
  species: string;
  gender: string;
  image: string;
}

export interface FilterContext {
  newFilter: string;
  newSetFilter: (value: string) => void;
}

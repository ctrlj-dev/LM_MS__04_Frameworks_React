export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export interface FilterContext {
  newFilter: string;
  newSetFilter: (value: string) => void;
}

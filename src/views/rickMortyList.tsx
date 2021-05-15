import React from "react";
import { HeaderLayout } from "../layout/header";
import { MemberSearch } from "../components/member-search/member-search-rick";
import { ShowMemberList } from "../components/list/list-morty";

export const RickMortyList: React.FC = () => {
  return (
    <>
      <HeaderLayout/>
      <MemberSearch/>
      <ShowMemberList/>
    </>
  );
};

import React from "react";
import { MemberSearch } from "../components/member-search/member-search";
import { ShowMemberList } from "../components/list/list";
import { HeaderLayout } from "../layout/header";


export const ListPage: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <MemberSearch />
      <ShowMemberList />   
      </>
  );
};

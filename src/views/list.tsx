import React from "react";
import { MemberSearch } from "../components/member-search-component";
import { ShowMemberList } from "../layout/list-layout"; 
//import { useDebounce } from "use-debounce";

export const ListPage: React.FC = () => {
  return (
    <> 
    <h2>Hello from List page</h2>
      <MemberSearch/>
      <ShowMemberList/> 
    </>
  );
};

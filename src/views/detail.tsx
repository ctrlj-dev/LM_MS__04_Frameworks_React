import React from "react";
import { ShowMemberDetails } from "../components/details-components/details";
import { HeaderLayout } from "../layout/header";

export const DetailPage: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <ShowMemberDetails />
    </>
  );
};

import React from "react";
import { ShowCharactersDetails } from "../components/details-components/details-rick";
import { HeaderLayout } from "../layout/header";

export const DetailRickMorty: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <ShowCharactersDetails />
    </>
  );
};

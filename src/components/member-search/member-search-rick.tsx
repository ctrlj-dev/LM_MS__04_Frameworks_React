import React from "react";
import { FilterContext } from "../../interfaces/member-entity-rick";
import classes from "./member-search.scss";

export const MyfilterContext = React.createContext<FilterContext>({
  newFilter: "",
  newSetFilter: (value) => {
    console.log("MyContext missing privder in APP?");
  }
});

export const MyfilterContextProviderRick: React.FC = (props) => {
  const [newFilter, newSetFilter] = React.useState("Rick");
  return (
    <MyfilterContext.Provider
      value={{ newFilter, newSetFilter }}
    >
      {props.children}
    </MyfilterContext.Provider>
  );
};

export const MemberSearch: React.FC = () => {
  const { newFilter, newSetFilter } = React.useContext(MyfilterContext);

  return (
    <>
      <div className="container-fluid">
        <form className={classes.memberSearchForm}>
          <input
            type="text"
            value={newFilter}
            onChange={(e) => newSetFilter(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

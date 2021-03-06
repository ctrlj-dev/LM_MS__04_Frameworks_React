import React from "react";
import { FilterContext } from "../../interfaces/member-entity";
import classes from "./member-search.scss";

export const MyfilterContext = React.createContext<FilterContext>({
  newFilter: "",
  newSetFilter: (value) => {
    console.log("MyContext missing privder in APP?");
  }
});

export const MyfilterContextProvider: React.FC = (props) => {
  const [newFilter, newSetFilter] = React.useState("Lemoncode");
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
  const [filter, setFilter] = React.useState(newFilter);

  const handleFilter = (e) => {
    e.preventDefault();
    newSetFilter(filter);  
  };

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleFilter} className={classes.memberSearchForm}>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

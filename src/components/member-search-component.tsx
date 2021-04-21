import React from "react";
import { MemberEntity, filterContext } from "../interfaces/member-entity";

export const MyfilterContext = React.createContext<filterContext>({
  newFilter: "",
  newSetFilter: (value) => {
    console.log("MyContext missing privder in APP?");
  },
});

export const MyfilterContextProvider: React.FC = (props) => {
  const [newFilter, newSetFilter] = React.useState("lemoncode");
  return (
    <MyfilterContext.Provider value={{ newFilter, newSetFilter }}>
      {props.children}
    </MyfilterContext.Provider>
  );
};

export const MemberSearch: React.FC = () => {
  const filterContext = React.useContext(MyfilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { newFilter, newSetFilter } = React.useContext(MyfilterContext);
  const [filter, setFilter] = React.useState(newFilter);
  //const [debouncedFilter] = useDebounce(filterContext.filter, 2000);

  const handleFilter = (e) => {
    e.preventDefault();
    newSetFilter(filter);
  };

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filterContext]);

  return (
    <>
      <form onSubmit={handleFilter}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button>Buscar</button>
      </form>
    </>
  );
};

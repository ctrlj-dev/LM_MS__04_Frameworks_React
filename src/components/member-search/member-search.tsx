import React from "react";
import { MemberEntity, filterContext } from "../../interfaces/member-entity";
import classes from "./member-search.scss";

export const MyfilterContext = React.createContext<filterContext>({
  newFilter: "",
  newSetFilter: (value) => {
    console.log("MyContext missing privder in APP?");
  },
});

export const MyfilterContextProvider: React.FC = (props) => {
  const [newFilter, newSetFilter] = React.useState("Lemoncode");
  return (
    <MyfilterContext.Provider value={{ newFilter, newSetFilter }}>
      {props.children}
    </MyfilterContext.Provider>
  );
};

export const MemberSearch: React.FC = () => {
  const { newFilter, newSetFilter } = React.useContext(MyfilterContext);
  const [filter, setFilter] = React.useState(newFilter);
  //const filterContext = React.useContext(MyfilterContext);
  //const [members, setMembers] = React.useState<MemberEntity[]>([]);
  //const [debouncedFilter] = useDebounce(filterContext.filter, 2000);

  const handleFilter = (e) => {
    e.preventDefault();
    newSetFilter(filter);
  };

/* 
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
     // .catch((error) => {window.location.href = "/list/"});
  }, [filterContext]);
*/

  return (
    <>
      <div className="container-fluid">
        {
          /* <div className={classes.pageIntroText}>
            <ul>
              <li>You can Search. </li>
              <li>You should Explore. </li>
              <li>You will Learn. </li>
              <li>You start Grow. </li>
            </ul>
          </div>
          */
        }
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

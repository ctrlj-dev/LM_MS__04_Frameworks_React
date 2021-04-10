import React from "react";
import { Link, generatePath } from "react-router-dom";
//import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface filterContext {
  newFilter: string;
  newSetFilter: (value: string) => void;
}

const MyfilterContext = React.createContext<filterContext>({
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

export const ListPage: React.FC = () => {
  const filterContext = React.useContext(MyfilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { newFilter , newSetFilter} = React.useContext(MyfilterContext); 
  const [filter, setFilter] = React.useState(newFilter);
  //const [debouncedFilter] = useDebounce(filterContext.filter, 2000);

  const handleFilter = (e) => {
    e.preventDefault();
    newSetFilter(filter);
  };

  /*
  const searchOrganization = () => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch(() => {
        alert("La compañia no existe, volverás al listado principal");
        window.location.href = "/list";
      });
  };
   */

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  },[filterContext]);

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
      <h2>Hello from List page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Le hacemos un map a members, que previamente nos viene de la api de Github */}
          {members.map((member) => (
            <tr>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link
                  to={generatePath(`/detail/:id`, {
                    id: member.login,
                  })}
                >
                  {member.login}
                </Link>
                {""}
              </td>
            </tr>
          ))}
          {/* Fin del map */}
        </tbody>
      </table>
    </>
  );
};

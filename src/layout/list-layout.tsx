import React from "react";
import { MemberEntity } from "../interfaces/memberEntity";
import { Link, generatePath } from "react-router-dom";
import { MyfilterContext } from "../components/member_search_component";

export const ShowMemberList: React.FC = (props) => {
  const filterContext = React.useContext(MyfilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filterContext]);
  return (
    <>
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

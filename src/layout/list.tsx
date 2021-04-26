import React from "react";
import { MemberEntity } from "../interfaces/member-entity";
import { Link, generatePath } from "react-router-dom";
import { MyfilterContext } from "../components/member-search/member-search";
import classes from "../components/member-search/member-search.scss";

export const ShowMemberList: React.FC = (props) => {
  const filterContext = React.useContext(MyfilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.newFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filterContext]);

  console.log(members);

  return (
    <>
      <div className={classes.memberContainer}>
        <div className="container-fluid">
          {members.map((member) => (
            <div className={classes.memberRow}>
              <Link
                to={generatePath(`/detail/:id`, {
                  id: member.login,
                })}
              >
                <h2 className={classes.memberName}>{member.login}</h2>
                <sub className={classes.memberID}>{member.id}</sub>
                <picture className={classes.memberPicture}>
                  <img src={member.avatar_url} />
                </picture>{" "}
              </Link>
            </div>
          ))}
          {}
        </div>
      </div>
    </>
  );

  /*
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
          {}
        </tbody>
      </table>
    </>
  );*/
};

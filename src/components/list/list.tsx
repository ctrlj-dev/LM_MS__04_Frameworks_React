import React from "react";
import { MemberEntity } from "../../interfaces/member-entity";
import { Link, generatePath } from "react-router-dom";
import { MyfilterContext } from "../member-search/member-search";
import classes from "./list.scss";

export const ShowMemberList: React.FC = (props) => {
  //const filterContext = React.useContext(MyfilterContext);
  //const [members, setMembers] = React.useState<MemberEntity[]>([]);
  //const [actualPage, setNewPage] = React.useState(1);
  /* 
  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${filterContext.newFilter}/members?page=${actualPage}&per_page=2`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))
      //.catch((error) => {window.location.href = "/list/"});
  }, [filterContext]);

  const handleNextPage = () => {
    setNewPage(actualPage + 1);
  };

  const handlePrevPage = () => {
    setNewPage(actualPage - 1);
  };
*/
  const members = [
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      login: "Test",
      avatar_url:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

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
          <div className={classes.navigationContainer}>
            <a href="#" /*onClick={handlePrevPage}*/>Previous Page</a>
            <a href="#" /*onClick={handleNextPage}*/>Next page</a>
          </div>
        </div>
      </div>
    </>
  );
};

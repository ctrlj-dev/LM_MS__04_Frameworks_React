import React from "react";
import { MemberEntity } from "../../interfaces/member-entity";
import { Link, generatePath } from "react-router-dom";
import { MyfilterContext } from "../member-search/member-search";
import classes from "./list.scss";

export const ShowMemberList: React.FC = (props) => {
  const filterContext = React.useContext(MyfilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [actualPage, setNewPage] = React.useState(1);
  const postPerPage = "10";

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${filterContext.newFilter}/members?page=${actualPage}&per_page=${postPerPage}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))     
      .catch((error) => {window.location.href = "/list/"});
  }, [filterContext]);

  const handlePrevPage = () => {
    setNewPage(actualPage - 1);    
  };

  const handleNextPage = () => {
    setNewPage(actualPage + 1);
    if (members.length < 10) {
      setNewPage(actualPage);
    }  
  };

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
            <a id="prevPageLink" href="#" onClick={handlePrevPage}>
              <img src="/src/library/icons/left-arrow.svg" />
            </a>
            <a id="nextPageLink" href="#" onClick={handleNextPage}>
              <img src="/src/library/icons/right-arrow.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

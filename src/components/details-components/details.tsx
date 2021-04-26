import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "../../interfaces/member-detail-entity";
import classes from "./details.scss";

const createMemberDetail = () => ({
  id: "",
  name: "",
  company: "",
  bio: "",
});

export const ShowMemberDetails: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createMemberDetail()
  );

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  console.log(member);

  return (
    <>
      <div className="container-fluid">
        <div className={classes.detailsIntro}>
          <p>
            A group of <strong>talented people</strong> who work creating
            software and sharing their knowledge with the community.
          </p>
        </div>

        <div className={classes.userDetailsCard}>
          <div className={`row ${classes.userDetailsCardRow}`}>
            <div className="col-12 col-md-5">
              <img src={member.avatar_url} />
            </div>
            <div className="col-12 col-md-7">
              <div className={classes.nameBox}>
                <sub className={classes.memberID}>
                  🡢 <span>{id}</span>
                </sub>
                <h1 className={classes.memberName}>{member.name}</h1>
              </div>
              <h2 className={classes.memberCompany}>
                Work in 🡢 {member.company}
              </h2>
              <div className={classes.memberBio}>
                <span>BIOGRAPHY: </span>
                <p>{member.bio}</p>
              </div>{" "}
            </div>
          </div>
          <Link className={classes.backLink} to="/list/">
          🡠 Back to list page
          </Link>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "../interfaces/memberDetailEntity";

const createMemberDetail = () =>({
  id: '',  
  name: '',
  company: '',
  bio: '',
})

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(createMemberDetail());
  const { id } = useParams();
  
  React.useEffect(() => {
  fetch(`https://api.github.com/users/${id}`)
  .then((response) => response.json())
  .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <h3>User name: { member.name }</h3>
      <h3>User company: { member.company }</h3>
      <h3>User bio: { member.bio }</h3>
      <Link to='/list/'>Back to list page</Link>
    </>
  );
};

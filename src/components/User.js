import styled from "styled-components";
const UserChatBox = styled.div`
  margin-top: 3.2rem;
  width: 35%;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  font-size: 0.8rem;
  height: 4rem;
  background: #2973f0;
  padding: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 10px;
  color: #ffff;
`;

const User = ({ data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <UserChatBox>{data}</UserChatBox>;
    </div>
  );
};

export default User;

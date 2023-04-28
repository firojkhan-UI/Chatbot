import styled from "styled-components";
const BotWrapper = styled.div`
  /* display: flex; */
`;
const BotChatBox = styled.div`
  margin-top: 3.2rem;
  width: 35%;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  font-size: 0.8rem;
  height: 4rem;
  padding: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 10px;
`;

const Bot = ({ data }) => {
  console.log(data, "::::18");
  return <BotChatBox>{data}</BotChatBox>;
};
export default Bot;

import DateComponent from "./DateComponent";
import styled from "styled-components";

const Message = styled.div`
  margin-top: 3.2rem;
  width: 35%;
  border-radius: 12px;
  font-size: 0.8rem;
  height: 4rem;
  padding: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) =>
    props.sender === "BOT" ? "white" : "#2973f0"};
`;

const CommonComponents = ({ msgList }) => {
  console.log("mggLIst", msgList);
  const { messageList, latestMessageTimestamp } = msgList;

  return (
    <div>
      {messageList?.length > 0 &&
        messageList.map((msg, index) => {
          return (
            <>
              {console.log("inside map", msg.message)}
              <Message sender={msg.sender}>{msg.message}</Message>
            </>
          );
        })}
    </div>
  );
};
export default CommonComponents;

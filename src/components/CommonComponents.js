import { useMemo } from "react";
import Bot from "./Bot";
import DateComponent from "./DateComponent";
import User from "./User";
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
  /* border:2px solid red; */
`;

const CommonComponents = ({ msgList }) => {
  console.log("mggLIst", msgList);
  const { messageList, latestMessageTimestamp } = msgList;
  //console.log(latestMessageTimestamp, "ARRRR", messageList[0]);

  //   const BotMsg = useMemo(() => {
  //     const BotMsgText = messageList[0]?.message;
  //     return BotMsgText;
  //   }, [messageList]);

  //   const UserMsg = useMemo(() => {
  //     const userText = messageList[1]?.message;
  //     return userText;
  //   }, [messageList]);

  return (
    <div>
      {messageList?.length > 0 &&
        messageList.map((msg) => {
          return (
            <>
              {console.log("inside map", msg.message)}
              <Message>{msg.message}</Message>
            </>
          );
        })}
      {/* <Bot data={messageList && messageList[0]?.message} />
      <DateComponent timeStamp={latestMessageTimestamp} />
      <User data={messageList && messageList[1]?.message} /> */}
    </div>
  );
};
export default CommonComponents;

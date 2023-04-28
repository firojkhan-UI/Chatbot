import { useMemo } from "react";
import Bot from "./Bot";
import DateComponent from "./DateComponent";
import User from "./User";

const CommonComponents = ({ msgList }) => {
  const { messageList, latestMessageTimestamp } = msgList;
  console.log(latestMessageTimestamp, "ARRRR", messageList[0]);

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
      <Bot data={messageList[0]?.message} />
      <DateComponent timeStamp={latestMessageTimestamp} />
      <User data={messageList[1]?.message} />
    </div>
  );
};
export default CommonComponents;

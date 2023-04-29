import styled from "styled-components";
import moment from "moment";

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
  const { messageList } = msgList;
  let date = null;

  return (
    <div>
      {messageList?.length > 0 &&
        messageList.map((msg, index) => {
          const t1 = messageList[index - 1]?.timestamp;
          const t2 = msg.timestamp;
          const tempDate = t1
            ? moment(t2).diff(moment(t1), "days") > 0
              ? moment(msg?.timestamp).format("DD/MM/YYYY")
              : null
            : null;
          const showDate = tempDate !== date;
          date = showDate ? tempDate : date;
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent:
                    msg.sender !== "BOT" ? "flex-end" : "flex-start",
                }}
              >
                <Message sender={msg.sender}>{msg.message}</Message>
              </div>
              {showDate && (
                <div style={{ width: "100%", textAlign: "center" }}>{date}</div>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default CommonComponents;

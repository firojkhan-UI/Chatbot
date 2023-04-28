import styled from "styled-components";

const DateWrapper = styled.div`
  margin-top: 10px;
  background: #ffff;
  color: #3434552;
  width: 20%;
  padding: 5px;
  border-radius: 12px;
  text-align: center;
`;

const DateComponent = ({ timeStamp }) => {
  const getDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timeStamp);

  return <DateWrapper>{getDate}</DateWrapper>;
};
export default DateComponent;

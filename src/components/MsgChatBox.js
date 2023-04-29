import styled from "styled-components";
import CommonComponents from "./CommonComponents";

const HeaderBar = styled.div`
  padding: 20px;
  min-height: 4rem;
  background: #ffff;
  width: 659px;
  display: flex;
  border-radius: 8px;
  justify-content: flex-start;
`;

const MsgChatBox = ({ listItem }) => {
  return (
    <div style={{ overflow: "scroll", height: "calc(100vh - 160px)" }}>
      <HeaderBar>
        <div style={{ display: "inline-flex" }}>
          <span>
            {" "}
            <div style={{ width: "40px" }}>
              <img
                src={listItem?.imageURL}
                style={{ width: "50%" }}
                alt="ProductIcon"
              />
            </div>
          </span>
          <span style={{ marginLeft: "15px" }}>{listItem?.title}</span>
        </div>
      </HeaderBar>

      <CommonComponents msgList={listItem} />
    </div>
  );
};
export default MsgChatBox;

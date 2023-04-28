import { useEffect, useState } from "react";
import styled from "styled-components";
import MsgChatBox from "./MsgChatBox";

const WrapperChatBoat = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  border-radius: 12px;
  border: 5px solid black;
  background: rgb(229, 233, 234);
`;
const ProductContainer = styled.div``;

const Title = styled.div`
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 500;
`;

const ChatBoat = (props) => {
  const [product, setProduct] = useState(props.resData);
  const [search, setSearch] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setProduct(props.resData);
  }, [props]);

  const _handleChange = (e) => {
    const test = props?.resData.filter((item) => {
      return item.title?.toLowerCase()?.includes(e.target.value.toLowerCase());
    });
    setProduct(test);
    setSearch(e.target.value);
  };

  const _handleMsgData = (list) => {
    setMessageList(list);
  };

  return (
    <div style={{ padding: "20px" }}>
      <WrapperChatBoat>
        <ProductContainer>
          <div>
            <input onChange={_handleChange} type="text" value={search} />
          </div>
          <div style={{ padding: "3.2rem 2.5rem 0rem 0rem" }}>
            {product?.map((item) => (
              <div style={{ display: "flex", marginTop: "25px" }}>
                <div style={{ width: "40px" }}>
                  <img
                    src={item.imageURL}
                    style={{ width: "50%" }}
                    alt="ProductIcon"
                  />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => _handleMsgData(item)}
                >
                  <Title style={{ marginLeft: "1rem" }}>{item.title}</Title>
                  <p style={{ marginLeft: "1rem" }}>order: {item.orderId}</p>
                  <p style={{ marginLeft: "1rem" }}>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </ProductContainer>
        <div>
          <MsgChatBox listItem={messageList} />
        </div>
      </WrapperChatBoat>
    </div>
  );
};
export default ChatBoat;

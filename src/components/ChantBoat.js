import { useEffect, useState } from "react";
import styled from "styled-components";

const WrapperChatBoat = styled.div`
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const ProductContainer = styled.div`
  box-sizing: border-box;
  border: 12px;
  border-radius: 8px;
`;
const ProductList = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  background: beige;
  width: 550px;
`;

const ChatBoat = (props) => {
  const [teams, setTeams] = useState(props.resData);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setTeams(props.resData);
  }, [props]);

  return (
    <div>
      <WrapperChatBoat>
        <ProductContainer>
          <div>
            <input
              onChange={(e) => {
                const test = props?.resData?.filter((team) => {
                  return team?.title
                    ?.toLowerCase()
                    ?.includes(e.target.value?.toLowerCase());
                });
                setTeams(test);
                setSearch(e.target.value);
              }}
              type="text"
              value={search}
            />
          </div>
          <div>
            {teams?.map((item) => (
              <ProductList>{item?.title}</ProductList>
            ))}
          </div>
        </ProductContainer>
      </WrapperChatBoat>
    </div>
  );
};
export default ChatBoat;

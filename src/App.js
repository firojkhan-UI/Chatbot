import "./App.css";
import { useEffect, useState } from "react";
import ChatBoat from "./components/ChantBoat";

const API_URL = "https://my-json-server.typicode.com/codebuds-fk/chat/chats";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = fetch(API_URL)
      .then((data) => data.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <ChatBoat resData={data} />
    </div>
  );
}

export default App;

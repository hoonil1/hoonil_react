import React, { createContext, useState, useContext } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메세지")}>메세지 변경하기</Button>
  );
}

function BComp() {
  // 3. context 사용하기
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메세지");

  return (
    <div>
      {/*2. context에 state 넣기 : <Context.Provider value={state}>*/}
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1.context 만들기
const MessageContext = createContext(null);

export default App;

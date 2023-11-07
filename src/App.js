import React, { createContext, useState, useContext } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const text = useContext(MessageContext);
  return <Text>받은 메세지 : {text}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("");
  // message state -> CComp에 전달하는게 목적
  // prop drilling 말고 다른 방법
  // 1. context 를 만들어라 -> createContext(); -> 어디서든 사용가능함. 보통 컴포넌트 밖에서 사용
  // 2. context에 state 넣기 : <Context.Provider value={state}>이렇게 만들기</Context.Provider>
  // 3. tree 안에서 사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼메세지")}>메시지 바꾸기</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기
// context 이름은 ...Context 로 정해주는게 좋다 (대문자로 시작하고 Context로 끝남)
const MessageContext = createContext(null);

export default App;

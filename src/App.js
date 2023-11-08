import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // 첫번째 파라미터(setup) : 부작용이 있는 함수
  // 두번째 파라미터 : setup 을 실행시키는 값의 나열(배열)
  // 빈 배열이면 첫 렌더링때만 실행된다
  useEffect(() => {
    console.log("effect 함수 실행됨"); // setup 파라미터
  }, [number, text]);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;

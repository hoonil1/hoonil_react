import React, { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  // component 외부 시스템과 작업할때
  // 주로 ajax로 데이터 가져올때

  //첫번째 파라미터는 실행할 함수이다
  //두번째 파라미터는 첫번째 파라미터를 실행시키는 값
  // 빈 배열이면 초기 렌더링 때만 실행된다.
  useEffect(() => {
    console.log("effect 첫번째 파라미터 함수 실행됨");
  }, []);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태가 변경되면 컴포넌트를 다시 그린다 ( = re render)
  // state : react가 관리하는 컴포넌트의 값

  // state 를 얻는 방법
  // useState();
  const [, set] = useState(); //  배열을 리턴함
  // index 0 :  현재 상태
  // index 1 : state를 변경할수 있는 메소드
  const [state, func] = useState("");

  let text = "초기 메세지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log("text" + text);
  }

  function handleButtonClick(e) {
    func("바뀐 상태(값)");
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태바꾸기</Button>
      <Button onClick={() => func("")}>빈 문자열로 바꾸기</Button>
      <p>{state}</p>
    </div>
  );
}

export default App;

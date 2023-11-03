import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수의 이름이 event handle 메소드일때
  // 브라우저는 event 객체를 매개값으로 넣어준다 (브라우저가)
  function handleClick(event) {
    // console.log(event.target.className);
    // console.log(event.target.type);
    console.log(event.target);
  }
  return (
    <div>
      <Button onClick={handleClick}>Button1</Button>
      <Button onClick={handleClick}>Button2</Button>
    </div>
  );
}

export default App;

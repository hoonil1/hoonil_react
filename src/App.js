import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수의 이름을 작성하는 관습이 있다.
  // => handle + event 이름 (click, box, etc)
  function handleClick() {
    console.log("second");
  }
  function handleMouseEnter() {
    console.log("third");
  }
  function handleMouseLeave() {
    console.log("fourth");
  }

  return (
    <div>
      <Button onClick={() => console.log("first")}>Button1</Button>
      <Button onClick={handleClick}>Button2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Button3
      </Button>
    </div>
  );
}

export default App;

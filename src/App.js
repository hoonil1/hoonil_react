import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClick() {
    console.log("clicked");
  }
  function handleClick2() {
    console.log("clicked2");
  }
  function handleClick3(number) {
    console.log(number + "번째 버튼 클릭됨");
  }
  return (
    <div>
      <Button onClick={handleClick}>Button1</Button>
      <Button onClick={handleClick2}>Button2</Button>
      <Button onClick={() => handleClick3(1)}>Button3</Button>
      <Button onClick={() => handleClick3(5)}>Button4</Button>
    </div>
  );
}

export default App;

import React from "react";
import { Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleOuterBoxClick() {
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }
  return (
    <div>
      <Center
        onClick={handleOuterBoxClick}
        w={"500px"}
        h={"500px"}
        bg={"yellow"}
      >
        <Center
          onClick={handleInnerBoxClick}
          w={"250px"}
          h={"250px"}
          bg={"red"}
        >
          <Button onClick={handleButtonClick} colorScheme="blue">
            Button1
          </Button>
        </Center>
      </Center>
    </div>
  );
}

export default App;

import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
function App(props) {
  function func1() {
    console.log("func1 launched");
  }
  let func2 = () => {
    console.log("arrow function launched");
  };
  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow2");
        }}
      >
        Button3
      </MyComp>
    </div>
  );
}

export default App;

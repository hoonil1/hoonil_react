import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  function handleChange(e) {
    // console.log("input value changed");
    console.log(e.target.value);
  }
  return (
    <div>
      <Input onChange={handleChange}></Input>
      <Input onChange={handleChange}></Input>
    </div>
  );
}

export default App;

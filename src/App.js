import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  let text = "initial text";
  function handleChange(e) {
    // console.log("input value changed");
    console.log(e.target.value);
    text = e.target.value;
  }
  return (
    <div>
      <p>{text}</p>
      <Input onChange={handleChange}></Input>
      <Input onChange={handleChange}></Input>
    </div>
  );
}

export default App;

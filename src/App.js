import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function MyComp() {
  const [num, setNum] = useState(0);
  let a = 3;
  console.log("a", a);
  console.log("num", num);
  return (
    <div>
      <Button onClick={() => setNum(num + 1)}>증가</Button>
      <p>{num}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;

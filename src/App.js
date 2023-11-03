import { Input } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  function handleInput1(e) {
    setNumber1(Number(e.target.value));
  }
  function handleInput2(e) {
    setNumber2(Number(e.target.value));
  }
  let result = number1 + number2;

  return (
    <>
      <Input type={"number"} onChange={handleInput1} /> +
      <Input type={"number"} onChange={handleInput2} /> ={result}
    </>
  );
}

export default App;

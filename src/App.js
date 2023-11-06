import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffee, setCoffee] = useState(["latte"]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    // 직전 상태 배열을 조작하면 안되고
    // coffee.push(text);
    // 새 배열을 만들어서 set state 해야한다.
    const newCoffee = [...coffee]; // 배열 복사
    newCoffee.push(text);
    setCoffee(newCoffee);
    console.log(coffee);
  }
  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>

      <List>
        {coffee.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

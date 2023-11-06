import React, { useState } from "react";
import { Box, Button, ListItem, OrderedList } from "@chakra-ui/react";

function App(props) {
  const [items, setItems] = useState([]);

  function handleButtonClick(item) {
    console.log(item);
    // items 의 상태를 item 을 추가하도록 변경
    // const nextItems = [...items];
    // nextItems.push(item);
    // const nextItems = [...items, item];
    // setItems(nextItems);
    setItems([...items, item]);
    // 다 같은 코드
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("coffee")}>1</Button>
      <Button onClick={() => handleButtonClick("cake")}>2</Button>
      <Button onClick={() => handleButtonClick("icecream")}>3</Button>
      <Button onClick={() => handleButtonClick("bread")}>4</Button>
      <Button onClick={() => handleButtonClick("chicken")}>5</Button>
      <Box>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </div>
  );
}

export default App;

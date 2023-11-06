import React, { useState } from "react";
import { Box, Button, ListItem, OrderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleDeleteButtonClick(index) {
    // console.log(index + "번째 아이템 지우기");
    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1);
    // setFoods(nextFoods);
    // const nextFoods = foods.filter((item, i) => i != index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("coffee")}>coffee</Button>
      <Button onClick={() => handleButtonClick("cake")}>cake</Button>
      <Button onClick={() => handleButtonClick("icecream")}>icecream</Button>
      <Box>
        <OrderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleDeleteButtonClick(index)}>
                delete
              </Button>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </div>
  );
}

export default App;

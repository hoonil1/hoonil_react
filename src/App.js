import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "burger"];
  const arr2 = ["son", "lee", "kim"];
  const arr3 = ["latte", "americano", "esspresso"];
  const arr4 = [
    {id:0,"coffee"},
    {id:1,"cheese"},
  ];
  return (
    <div>
      <Box mb={3}>
        <List>
          {arr.map((e, index) => (
            <ListItem key={index}>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((x, i) => (
            <ListItem key={i}>{x}</ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <List>
          {arr3.map((y, z) => (
            <ListItem key={z}>{y}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;

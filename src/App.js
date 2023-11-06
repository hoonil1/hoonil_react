import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "burger"];
  const arr2 = ["son", "lee", "kim"];
  const arr3 = ["latte", "americano", "esspresso"];
  return (
    <div>
      <Box>
        <List>
          {arr.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <List>
          {arr2.map((x) => (
            <ListItem>{x}</ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <List>
          {arr3.map((y) => (
            <ListItem>{y}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;

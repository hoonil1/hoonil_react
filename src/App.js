import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
let nextId = 1;
function App() {
  const [items, updateItems] = useImmer([]);

  function handleClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneButton(id) {
    updateItems((draft) => {
      draft.findIndex(nextId, 1);
    });
  }

  return (
    <div>
      <Button onClick={() => handleClick("JAVA Study")}>JAVA Study</Button>
      <Button onClick={() => handleClick("REACT Study")}>REACT Study</Button>
      <Button onClick={() => handleClick("Take a REST")}>Take a REST</Button>
      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButton(item.id)}>완료</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;

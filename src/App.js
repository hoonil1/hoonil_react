import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    setItems([...items, text]);
  }
  function handleRemoveButtonClick(index) {
    setItems(items.filter((item, i) => i != index));
  }

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleButtonClick}>add</Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem>
              {item}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                Remove
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;

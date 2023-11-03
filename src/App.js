import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  const [message, SetMessage] = useState("");
  function handleInputChange(e) {
    SetMessage(e.target.value);
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <Text>{message}</Text>
    </div>
  );
}

export default App;

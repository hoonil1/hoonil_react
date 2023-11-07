import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}
function MyInput({ address, onChange }) {
  function handleInputChange(e) {
    onChange(e.target.value);
  }

  return (
    <Box>
      <Input value={address} onChange={handleInputChange} />
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  function handleInputChange(text) {
    setAddress(text);
  }
  return (
    <div>
      <MyInput address={address} onChange={handleInputChange} />
      <MyText address={address} />
    </div>
  );
}

export default App;

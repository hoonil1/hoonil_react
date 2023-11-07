import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>Click!</Button>
    </Box>
  );
}

function SomeComp({ onCLick }) {
  return <ChildComp onClick={onCLick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <SomeComp onCLick={() => setMessage("Another Message")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;

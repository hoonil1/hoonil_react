import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ onChange, value }) {
  return <Input onChange={(e) => onChange(e.target.value)} value={value} />;
}

function BComp({ onChange, value }) {
  return <DComp onChange={onChange} value={value} />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <AComp message={message} />
      <BComp onChange={(value) => setMessage(value)} value={message} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp1({ onClick }) {
  function handleButtonClick() {
    onClick("안녕하세요");
  }
  return (
    <Box>
      <Button onClick={handleButtonClick}>텍스트 바꾸기!</Button>
    </Box>
  );
}

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  return (
    <div>
      <MyComp1 onClick={setMessage}>{/*  버튼이 클릭되면*/}</MyComp1>
      <MyComp2 message={message}>{/*    텍스트가 바뀌게*/}</MyComp2>
    </div>
  );
}

export default App;

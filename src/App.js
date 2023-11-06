import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handlePasswordInput(e) {
    setPassword(a.target.value);
  }
  function handleEmailInput(e) {
    setEmail(a.target.value);
  }

  return (
    <Center>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type={"text"} value={name} onChange={handelNameInput}></Input>
          <FormHelperText>띄어쓰기 없이 입력해주세요.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel></FormLabel>
          <Input type="password" onChange={handlePasswordInput}></Input>
          <FormHelperText>
            특수기호와 숫자를 하나 이상 하용해주세요
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel></FormLabel>
          <Input type="email" value={email} onChange={handelEmailInput}>
            {" "}
          </Input>
          <FormHelperText>입력된 이메일은 중복될 수 없습니다.</FormHelperText>

          <Button colorScheme={blue}>가입</Button>
        </FormControl>
      </Box>
    </Center>
  );
}

export default App;

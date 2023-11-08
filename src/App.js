import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(color + " : initial render");
  }, []);
  console.log(color + ": re render");
  return (
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  // 부모가 렌더링될 때 자식도 렌더링 된다.
  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  console.log("부모 re-rendering");
  return (
    <div>
      <Box>
        <Text>부모</Text>
        <Button onClick={() => setNumber(number + 1)}>증가</Button>
        <Text>{number}n</Text>
        <Checkbox defalutChecked-{true}
          onChange={(e)}
          onChange={(e) => console.log(e.target.checked)}
        ></Checkbox>{" "}
        파란 박스 토글
      </Box>
      <Box mt={5}>
        <Text>자식들</Text>
        <MyComp color={"red"} />
        <hr />
        {secondToggle && <MyComp color={"blue"} />}
      </Box>
    </div>
  );
}

export default App;

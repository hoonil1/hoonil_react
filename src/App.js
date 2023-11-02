import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"#9b9b9b"}
        gap={5}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"red"}>Lorem.</Box>
        <Box bg={"yellow"}>Culpa!</Box>
        <Box bg={"blue"}>Aliquam.</Box>
        <Box bg={"green"}>Provident.</Box>
        <Box bg={"orange"}>Officia.</Box>
      </Flex>
    </>
  );
}

export default App;

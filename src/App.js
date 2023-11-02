import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Flex,
  SimpleGrid,
  Button,
  Table,
  Th,
  Tbody,
  Thead,
  Tr,
  Td,
  Center,
  Circle,
  Square,
} from "@chakra-ui/react";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"Red"} h={"200px"} gap={"50px"}>
        <Square
          bg="blue"
          w={"100px"}
          h={"100px"}
          color={"white"}
          fontSize={"2rem"}
        >
          <ChatIcon />
        </Square>
        <Circle bg={"blue"} w={"100px"} h={"100px"} color={"white"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;

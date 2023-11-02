import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"red"} border={"3px solid black"}>
        Lorem ipsum.
      </Box>
      <Box bg={"orange"} border={"3px dotted black"}>
        Eius, nemo.
      </Box>
      <Box bg={"yellow"} border={"3px double black"}>
        Consequuntur, delectus!
      </Box>
      <Box bg={"green"} borderY={"3px solid black"}>
        Consequatur, quia.
      </Box>
      <Box bg={"blue"} borderX={"3px solid black"}>
        Atque, suscipit.
      </Box>
      <Box bg={"navy"} borderY={"10px dotted"} borderColor={"white"}>
        Provident, ut?
      </Box>
      <Box bg={"purple"} borderRadius={"30px"}>
        Laborum, rem?
      </Box>
      <Box shadow={"10px 5px 5px red"}>Asperiores, id.</Box>
      <Box shadow={"lg"}>Odit, provident!</Box>
      <Box shadow={"xl"}>Nemo, tempora?</Box>
      <Box>Dolorum, perspiciatis.</Box>
      <Box bg={"blue.50"} m={"10px"}>
        Nemo, sequi?
      </Box>
      <Box bg={"yellow.100"} m={"50px"}>
        Harum, sunt?
      </Box>
      <Box bg={"facebook.500"} ml={"30px"}>
        Culpa, libero!
      </Box>
      <Box bg={"#9b9b9b"} mx={"50px"}>
        Nisi, saepe.
      </Box>

      <Box bg="" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="" m="2">
        Accusamus, facilis?
      </Box>
      <Box bg="" m="3">
        Eius, iure?
      </Box>
      <Box bg="" m="4">
        Nesciunt, rerum.
      </Box>
      <Box bg="" m="5">
        In, voluptates.
      </Box>

      <Box bg="red.400" px={"20px"}>
        Lorem.
      </Box>
      <Box bg="blue.400" py={"30px"}>
        Ratione!
      </Box>
      <Box bg="purple" pl={"20px"}>
        Mollitia.
      </Box>
      <Box bg="yellow" pr={"30px"}>
        Atque.
      </Box>
      <Box bg="tomato" p={"1"}>
        Nisi.
      </Box>
      <Box bg="green" p={"2"}>
        Veniam.
      </Box>
      <Box bg="orange" p={"3"}>
        Hic!
      </Box>
      <Box bg="#9b9b9b" p={"4"}>
        Atque?
      </Box>
      <Box bg="facebook.500" p={"5"}>
        Nesciunt.
      </Box>
      <Box bg="pink" p={"6"}>
        Porro.
      </Box>
      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          color: "gray",
          paddingLeft: "20px",
          boxShadow: "10px 5px 5px black",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;

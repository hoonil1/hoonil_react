import { Box, Image, Stack } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>

      <Box>
        <Image src="https://bit.ly/dan-abramov"></Image>
      </Box>
      <Box>
        <Image boxSize={"100px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image
          borderRadius={"full"}
          boxSize={"150px"}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box>
        <Image src="abcde.jpg" fallbackSrc="https://via.placeholder.com/150" />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;

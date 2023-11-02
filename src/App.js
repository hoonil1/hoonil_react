import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    // Simple Grid 사이즈표
    // base: "0em", // 0px
    //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    //   md: "48em", // ~768px
    //   lg: "62em", // ~992px
    //   xl: "80em", // ~1280px
    //   "2xl": "96em", // ~1536px
    <>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={"40px"}>
        <Box bg="blue" color="white">
          Lorem.
        </Box>
        <Box bg="blue" color="white">
          Odit?
        </Box>
        <Box bg="blue" color="white">
          Temporibus!
        </Box>
        <Box bg="blue" color="white">
          Delectus!
        </Box>
        <Box bg="blue" color="white">
          Nisi?
        </Box>
        <Box bg="blue" color="white">
          Unde!
        </Box>
        <Box bg="blue" color="white">
          Optio.
        </Box>
        <Box bg="blue" color="white">
          Cupiditate!
        </Box>
        <Box bg="blue" color="white">
          Mollitia.
        </Box>
        <Box bg="blue" color="white">
          Nihil.
        </Box>
        <Box bg="blue" color="white">
          Ab.
        </Box>
        <Box bg="blue" color="white">
          Provident.
        </Box>
        <Box bg="blue" color="white">
          Modi?
        </Box>
        <Box bg="blue" color="white">
          Quidem?
        </Box>
        <Box bg="blue" color="white">
          Eaque?
        </Box>
        <Box bg="blue" color="white">
          Error.
        </Box>
        <Box bg="blue" color="white">
          Dolore.
        </Box>
        <Box bg="blue" color="white">
          Fugit!
        </Box>
        <Box bg="blue" color="white">
          Odit.
        </Box>
        <Box bg="blue" color="white">
          Et.
        </Box>
        <Box bg="blue" color="white">
          Fugiat!
        </Box>
        <Box bg="blue" color="white">
          Sunt!
        </Box>
        <Box bg="blue" color="white">
          Quis!
        </Box>
        <Box bg="blue" color="white">
          Facilis.
        </Box>
        <Box bg="blue" color="white">
          Quae.
        </Box>
        <Box bg="blue" color="white">
          Laboriosam?
        </Box>
        <Box bg="blue" color="white">
          Ullam.
        </Box>
        <Box bg="blue" color="white">
          Vitae.
        </Box>
        <Box bg="blue" color="white">
          Porro!
        </Box>
        <Box bg="blue" color="white">
          Quod.
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;

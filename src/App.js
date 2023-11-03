import {
  Box,
  Button,
  Flex,
  Select,
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Box
      w={"700px"}
      h={"80px"}
      bg={"#9b9b9b"}
      px={{ base: "0", md: "70px", lg: "120px", xl: "180px" }}
    >
      <Flex align={"center"}>
        <Stack spacing={1} direction={"row"} mt={4}>
          <Button size={"md"} colorScheme="#9b9b9b" fontStyle={"bold"}>
            Navbar
          </Button>
          <Button size={"sm"} colorScheme="#9b9b9b">
            Home
          </Button>
          <Button size={"sm"} colorScheme="#9b9b9b">
            Link
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<TriangleDownIcon />}
              bg={"#9b9b9b"}
              color={"white"}
              size={"sm"}
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another Action</MenuItem>
              <hr />
              <MenuItem>Something Else Here</MenuItem>
            </MenuList>
          </Menu>
          <Button size={"sm"} colorScheme="#9b9b9b" isDisabled>
            Disabled
          </Button>
          <Input w={"170px"} bg={"white"} placeholder="Search" />
          <Button colorScheme="teal" variant={"outline"}>
            Search
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;

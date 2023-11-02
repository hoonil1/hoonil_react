import { Box, FormControl, Select, Center } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <Center h={"100px"}>
          <FormControl>
            <Select placeholder="Select option" h={"50px"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </Select>
          </FormControl>
        </Center>
      </Box>
    </div>
  );
}

export default App;

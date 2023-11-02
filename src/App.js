import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center,
  Box,
  RadioGroup,
  Radio,
  Flex,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center>
        <Box w={"400px"}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <FormControl>
          <FormLabel>Choose Your Favorite Player</FormLabel>
          <RadioGroup>
            <Flex gap={2}>
              <Radio value="value1">C.Ronaldo</Radio>
              <Radio value="value2">L.Messi</Radio>
              <Radio value="value3">Neymar JR</Radio>
              <Radio value="value4">Mbappe</Radio>
            </Flex>
          </RadioGroup>
          <FormHelperText>Choose Just One!</FormHelperText>
        </FormControl>
      </Center>
      <Center mt={5}>
        <FormControl>
          <CheckboxGroup>
            <Flex gap={2}>
              <Checkbox>SON</Checkbox>
              <Checkbox>LEE</Checkbox>
              <Checkbox>KIM</Checkbox>
            </Flex>
          </CheckboxGroup>
        </FormControl>
      </Center>
    </div>
  );
}

export default App;

import { Button, ButtonGroup } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Officia?</Button>
      <Button colorScheme="yellow">Aliquam!</Button>
      <Button colorScheme="green">Libero!</Button>
      <Button colorScheme="orange">Quis.</Button>
      <Button colorScheme="gray">Perspiciatis.</Button>
      <Button size={"xs"}>Pariatur!</Button>
      <Button size={"sm"}>Voluptatum!</Button>
      <Button size={"md"}>Cupiditate?</Button>
      <Button size={"lg"}>Sit.</Button>
      <Button colorScheme="red" variant={"outline"}>
        Inventore.
      </Button>
      <Button colorScheme="facebook" variant={"outline"}>
        Officiis.
      </Button>
      <Button variant={"ghost"}>Blanditiis.</Button>
      <Button leftIcon={<PhoneIcon />}>Beatae.</Button>
      <Button isLoading loadingText={"Connecting"}>
        Similique!
      </Button>
      <Button>Accusantium.</Button>
      <Button>Repudiandae.</Button>
      <Button>Obcaecati?</Button>
      <Button>Neque?</Button>
      <Button>Enim.</Button>
      <Button>Veritatis?</Button>
      <Button>Id.</Button>
      <Button>Eligendi.</Button>
      <Button>Sequi?</Button>
      <Button>Veritatis?</Button>
      <Button>Nihil.</Button>
      <Button>Temporibus!</Button>
      <Button>Provident?</Button>
      <Button>Fuga.</Button>
      <Button>Earum.</Button>
    </>
  );
}

export default App;

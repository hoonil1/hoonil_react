import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("first");
          console.log("good");
        }}
      >
        Lorem ipsum dolor.
      </Button>
      <Button
        onClick={() => {
          console.log("second");
          console.log("bad");
        }}
      >
        Cum unde, veritatis?
      </Button>
    </>
  );
}

export default App;

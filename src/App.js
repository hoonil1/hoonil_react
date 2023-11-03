import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <div>
      <MyBox color={"blue"} bg={"yellow"} children={"hello"} />
    </div>
  );
}

export default App;

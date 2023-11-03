import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <div>
      <Button as="a" href={to} colorScheme="green">
        NAVER
      </Button>
      <Button as={"a"} href={children} colorScheme="blue">
        DAUM
      </Button>
    </div>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>네이버로 </MyLink>
      <MyLink to={"https://www.daum.net"}>다음으로 </MyLink>

      {/*  
  <a href="http://www.naver.com">네이버로</a>
  <a href="http://www.daum.net">다음으로</a>
  */}
    </>
  );
}

export default App;

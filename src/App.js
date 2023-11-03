import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  someProp();
  return (
    <>
      <div>
        <a href={to[0]}>link~</a>
      </div>
      <div>
        <Button onClick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }

  return (
    <div>
      <MyComp to={["https://www.naver.com"]}></MyComp>
      <MyComp to={["https://www.naver.com"]} someProp={func1}></MyComp>
      {/*  배열도 삽입 가능*/}
    </div>
  );
}

export default App;

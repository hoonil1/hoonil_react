import { Button } from "@chakra-ui/react";

function MyButton({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
// 두개의 버튼
// 첫번째 버튼은 클릭하면 콘솔에 헬로
// 두번째 버튼은 클릭하면 콘솔에 greeting
function App() {
  function func1() {
    console.log("hello");
  }
  function func2() {
    console.log("greeting");
  }
  return (
    <div>
      <MyButton executeClick={func1} children={"button1"}></MyButton>
      <MyButton executeClick={func2} children={"button2"}></MyButton>
    </div>
  );
}

export default App;

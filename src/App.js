import MyBox, { address } from "./Component/MyBox";
import MyElem, { address as myAddress } from "./Component/MyElem";

// as 로 named export 값을 import 할때 별칭을 줄 수 있다.
// 중복으로 인한 충돌을 피하기 위해서

function App() {
  // built-in components
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
    </>
  );
}

export default App;

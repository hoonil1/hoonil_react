import { MyElem } from "./Component/MyElem";
import { MyComp } from "./Component/MyComp";

// 코드가 매우 긴 컴포넌트가 있을때에는
// 같은 폴더 내에 컴포넌트 이름으로 파일을 새로 만들어주고
// 다른 파일에서 사용 가능하도록 export 해주어야 한다
// export 된 컴포넌트(또는 변수,함수,객체)를 import 해서 사용한다.

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;

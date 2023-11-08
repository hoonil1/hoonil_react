import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);
  // useEffect 자주 하는 실수
  useEffect(() => {
    console.log("코드 실행");
    setNumber(number + 1); // trigger 하는 값을 변경하면 안된다.
    // aws 서버에 올리는 코드를 실수로 잘못하면
    // 몇천번 이상의 오류로 aws 무료 기준을 초과한다.
  }, [number]);
  return <div></div>;
}

export default App;

function App() {
  // built-in components
  return (
    <>
      <MyComp value={"흥민"} address={"신촌"} />
      <MyComp value={"강인"} address={"강남"} />
    </>
  );
}

//함수 인자로 사용한 곳에서 넘긴 프로퍼티들이 객체형태로 담긴다
function MyComp({ value, address }) {
  return (
    <div>
      {value}이는 {address}에 산다
    </div>
  );
}

export default App;

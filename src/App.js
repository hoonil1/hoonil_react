function App() {
  // built-in components
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} age={33} city={"서울"} />
      <MyComp address={"신촌"} age={33} city={"서울"} />
    </>
  );
}

//함수 인자로 사용한 곳에서 넘긴 프로퍼티들이 객체형태로 담긴다
function MyComp({ name = "NoName", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address},{city}에 산다
      </p>
    </div>
  );
}

export default App;

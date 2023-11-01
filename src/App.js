function App() {
  // built-in components
  return (
    <>
      <h1
        className={"note"}
        style={{ background: "blue", color: "white" }}
        title={"제목요소"}
      >
        Lorem ipsum.
      </h1>
      <p title={"문단요소"}>Lorem ipsum dolor.</p>

      <MyComp title={"내 컴포넌트"} name={"흥민"} />
      <MyComp title={"I AM COMPONENT"} name={"KANG IN"} />
    </>
  );
}

//함수 인자로 사용한 곳에서 넘긴 프로퍼티들이 객체형태로 담긴다
function MyComp(property) {
  console.log("MyComp가 받은 프로퍼티", property);
  return (
    <div>
      <h1 title={property.title}>hello {property.name}</h1>
    </div>
  );
}

export default App;

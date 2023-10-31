function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold", //lowerCamelCase 로 써야 한다
    fontSize: "70px",
    textAlign: "center",
  };
  // js object

  return (
    <>
      {/*style 속성은 객체로 주어야 한다*/}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;

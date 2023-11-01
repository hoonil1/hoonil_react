function App() {
  return (
    <div>
      <MyHeader color={"white"} bg={"black"} text={"내가만든제목"} />
      <MyHeader color={"orange"} bg={"skyblue"} text={"다시만든제목"} />
    </div>
  );
}

function MyHeader(props) {
  return (
    <div
      style={{
        color: props.color,
        background: props.bg,
      }}
    >
      <h1>text : {props.text}</h1>
    </div>
  );
}

export default App;

function App() {
  return (
    <MyText
      style={{
        color: "white",
        background: "black",
        textAlign: "center",
        width: "100%",
        height: "100%",
        fontSize: "100px",
      }}
      value={"RESULT"}
    />
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;

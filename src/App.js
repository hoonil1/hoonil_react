function App() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-around",
      }}
    >
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return <div>{name}</div>;
}

export default App;

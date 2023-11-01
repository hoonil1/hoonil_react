function App() {
  return (
    <div>
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"gold"}
        bg={"black"}
        text={"hello react"}
      />
      <MyComp m={"30px"} bg={"black"} text={"hello react"} />

      <MyComp p={"10px"} color={"gold"} />
    </div>
  );
}

function MyComp({
  m = "0 auto",
  p = "0",
  color = "white",
  bg = "green",
  text = "No Comments",
}) {
  return (
    <div
      style={{
        margin: m,
        padding: p,
        color: color,
        background: bg,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default App;

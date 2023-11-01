function App() {
  return (
    <div>
      <MyBox
        p={"10px"}
        m={"0 auto"}
        color={"blue"}
        bg={"yellow"}
        text={"result1"}
      />
      <MyBox
        p={"50px"}
        m={"0 auto"}
        color={"white"}
        bg={"green"}
        text={"result2"}
      />
    </div>
  );
}

function MyBox({ p, m, color, text, bg }) {
  return (
    <div
      style={{
        padding: p,
        margin: m,
        color: color,
        background: bg,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default App;

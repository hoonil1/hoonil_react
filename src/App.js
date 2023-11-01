function App() {
  return (
    <div>
      <MyElem name={"SON"} age={32} team={"Tottenham"} number={7} />
      <MyElem name={"LEE"} age={22} team={"Paris"} number={19} />
    </div>
  );
}

function MyElem({ name, age, team, number }) {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        NO.{number} {name}, age {age}, Is In {team}
      </p>
    </div>
  );
}

export default App;

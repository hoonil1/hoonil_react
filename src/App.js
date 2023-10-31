function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  let message;

  if (num1 === num2) {
    message = <h1>당첨</h1>;
  } else {
    message = <h1>낙첨</h1>;
  }
  // 두 수가 같으면 당첨 출력
  // 두 수가 다르면 낙첨 출력
  return (
    <>
      <h1>{"1 : " + num1}</h1>
      <h1>{"2 : " + num2}</h1>
      <div>
        <h1>{num1 == num2 ? "당첨" : "낙첨"}</h1>

        <hr />
        {message}
      </div>
    </>
  );
}

export default App;

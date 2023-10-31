function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
      <MyComponent1 />
    </div>
  );
}

function MyComponent1() {
  return (
    <div style={{ width: "100px" }}>
      <img src="https://i.imgur.com/dgEMfL8.jpeg" alt="MITOMA" />
    </div>
  );
}

export default App;

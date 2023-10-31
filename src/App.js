function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "010~~";
  const age = 44;
  const random = Math.random();
  return (
    <>
      <h1>i am {age} years old</h1>
      <h1>and i live in {country}</h1>
      <h1>also i live in {address}</h1>
      <h1>my phonenumber is {phone}</h1>
      <h1>{random}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;

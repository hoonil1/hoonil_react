import { MyElem, city } from "./Component/MyElem";
import age from "./Component/MyElem";
import MyBox from "./Component/MyBox";
import { person, country } from "./Component/MyBox";
// age 대신 이름을 아무렇게나 써도 불러와진다
// export default 는 하나만 쓸수 있기 때문에

function App() {
  // built-in components
  return (
    <>
      <MyElem />
      <h1>{city}</h1>
      <h1>{age}</h1>
      <MyBox />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

function MyComp() {
  return null;
}

export default App;

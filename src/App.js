function App() {
  // JSX에서 태그 사용시 꼭 종료태그를 작성해야 한다 ex) </div>
  // 빈 요소이면 시작태그에서 종료를 꼭 해주어야 한다 ex) <br>
  const random = Math.ceil(Math.random() * 100);
  const isLarge = random > 50;
  return (
    <>
      <h1>난수 : {random}</h1>
      <h1>{random > 50 ? "큰수" : "작은수"}</h1>
      <div>{random > 50 ? <BigImage /> : <SmallImage />}</div>
      <div>{isLarge && <h1>큰 수다 !</h1>}</div>
      <div>{isLarge || <h1>작은 수다 !</h1>}</div>
    </>
  );
}

function BigImage() {
  return <h1>큰 이미지</h1>;
}

function SmallImage() {
  return <h3>작은 이미지</h3>;
}

// component 이름은 대문자로 시작.
// built-in component 이름은 소문자로 시작.
// return 문을 가져야한다 (항상은 아님)
// return 값은 보통 JSX 코드이다. (항상은 아님)

export default App;

function App() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }
  // a태그 클릭시 naver로 이동하도록 코드작성
  return (
    <>
      <a href="https://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;

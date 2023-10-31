function App() {
  // jsx가 js코드로 변환됨
  // 따라서 js 키워드를 사용할수 없다.
  return (
    <>
      {/* class 속성은 className 으로 작성 */}
      <div className="header">Lorem ipsum dolor.</div>

      {/*  label 의 for 속성은 htmlFor 로 작성 */}
      <label htmlFor="nameInput">이름</label>
      <input type="text" name="nameInput" />
    </>
  );
}

export default App;

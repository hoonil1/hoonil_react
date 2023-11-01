// named export
export function MyElem() {
  return (
    <div>
      <h1>My Element</h1>
    </div>
  );
}

// named export
export const city = "seoul";

const age = 33;
// default export
// 이름이 정해져 있지 않음
// 한파일에 하나만 가능
export default age;

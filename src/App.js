function App() {
    return (
        <div>
            <h1>hello react</h1>
            <h2>hi react</h2>
            <h3>bye react</h3>
            <MyComp/>
        </div>
    );
}

// component 이름은 대문자로 시작.
// built-in component 이름은 소문자로 시작.
// return 문을 가져야한다 (항상은 아님)
// return 값은 보통 JSX 코드이다. (항상은 아님)
function MyComp() {
    // return 문에 jsx 코드 작성 가능
    // 꼭 하나의 root tag가 존재해야 한다. (두개의 태그를 쓸수 없다)
    // div 태그로 감싸서 쓰면 여러 태그를 쓸수 있다.
    // return 값이 여러 줄이면 괄호로 감싸준다
    // root tag 가 필요 없다면 fragment 사용. (<></> = 태그 명이 없는 태그)

    // jsx에서 주석 사용법
    // {/* ~ */}
    return (
        <>
            <h1>hi component</h1>
            <h2>bye component</h2>
        </>
    )
}

export default App;

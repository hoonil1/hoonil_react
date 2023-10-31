function App() {
    return (
        <div>
            <MyComponent1/>
            {/*
      <div>
      <h1>hello component</h1>
      </div>
      */}
            <MyComponent2/>
        </div>
    );
}

function MyComponent1() {
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}

function MyComponent2() {
    return (
        <div>
            <p>Lorem ipsum dolor.</p>
            <ul>
                <li>Lorem.</li>
                <li>Pariatur?</li>
                <li>Quibusdam.</li>
            </ul>
        </div>
    )
}

export default App;

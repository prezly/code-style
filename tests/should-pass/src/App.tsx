import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>This app should pass</div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    );
}

// eslint-disable-next-line import/no-default-export
export default App;

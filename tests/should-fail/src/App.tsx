import { useState } from "react";

function App() {
    if (Math.random() > 0) return null;

    // react-hooks/rules-of-hooks is violated here
    const [count, setCount] = useState(0);

    return (
        <>
            <div>This app should fail</div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    );
}

export default App;

import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <div>
                <button onClick={handleCount}>Add</button>
                <div>{count}</div>
            </div>
        </div>
    );
}

export default Counter;
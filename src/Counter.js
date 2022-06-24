import React, { useState } from "react";

function Counter() {
    // Declares a new state variable, which we will call "count"
    // Declares a setCount function that allows you to modify the count value
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
        const intInput = parseInt(event.target.value, 10);
        if (!isNaN(intInput)) {
            setCount(intInput);
        }
    }

    return (
        <div>
            <input value={input} onChange={handleChange}></input>
            <p>The counter is at : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
        </div>
    );
}

export default Counter;
import { useState } from 'react';
import React from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
        setCount((prevNumber) => {
            return prevNumber + 9;
        });
    }
    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

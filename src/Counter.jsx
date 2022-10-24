import { useState } from 'react'
export default function Counter() {
    // useState gives us a state value and a function that
    // sets the state value in an array
    // const [stateValue, functionToSetStateValue] = useState(initial state value)
    const [count, setCount] = useState(0)
    const handleIncreaseCount = () => {
        // no callbacks to use previous state -- benifit of useState
        setCount(count + 1)
    }
    // whatever is returned will be rendered
    return (
        <div>
            <h1>heloooooo hooks</h1>
            <h2>the count is: {count}</h2>
            <button onClick={handleIncreaseCount}>+</button>
        </div>
    )
}

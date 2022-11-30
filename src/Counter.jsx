import { useState, useEffect } from 'react'
export default function Counter() {
    // useState gives us a state value and a function that
    // sets the state value in an array
    // const [stateValue, functionToSetStateValue] = useState(initial state value)
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
        name: 'weston',
        favFood: 'pizza'
    })
    // use effect invokes a cb every render...
    useEffect(() => {
        console.log('the component is rendeing and count is', count)
        return () => {
            // this cb is invoked when the component is unmounted
            // rn, that is every render cycle
            console.log('unmounting')
        }
    })
    // unless you pass it a state value (or props value) in the dependacy array
    useEffect(() => {
        console.log('the user state has changed', user)
    }, [user]) // array of dependencies -- this useEffect will fire when somehting in this array changes

    // ... or if the dependency array is empty
    useEffect(() => {
        // component will mount
        console.log('this is the first time the component is mounting')
    }, []) // empty dependancy array
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
            {/* good way to do */}
            <button onClick={() => setCount(count + 1)}>+</button>

            <h3>the current user is {user.name}</h3>
            <h2>their fav food is {user.favfood}</h2>

            <form>
                <label htmlFor='name-input'>name</label>
                <input
                    type='text'
                    placeholder='name'
                    id='name-input'
                    value={user.name}
                    // we have to handle merging old state with new state, when it comes to hooks
                    onChange={e => setUser({ ...user, name: e.target.value })}

                />
            </form>
        </div>
    )
}

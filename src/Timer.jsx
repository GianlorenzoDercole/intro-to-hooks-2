
import {
    useEffect,
    useState
} from 'react'
export default function Timer() {
    // state that kepps track of current count
    const [time, setTime] = useState(0)
    const [value, setValue] = useState('')















    // keep track of currently pressed key
    const [pressedKey, setPressedKey] = useState('')
    useEffect(() => {
        // when the compoennt mounts start lisening ffor key presses
        const keyDownHandler = e => setPressedKey(e.key)
        document.addEventListener('keydown', keyDownHandler)
        // if you put something on the document or window -- clean it
        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [])
    // create the interval when the component mounts
    useEffect(() => {
        //
        const interval = setInterval(() => {
            // this line triggers a re-render and the return call
            setTime(time +1)
        }, 500 )
        return () => {
            // runs when the component unmoutns from a state change in the dependancy array
            clearInterval(interval)
        }
    } ,[time]) // only run when the time state changes
    return (
        <div>
            <h3>the time is {time}</h3>
            <p>{value}</p>
            <h3>the pressed key is {pressedKey}</h3>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type='text'
                placeholder='enter text'
            />
        </div>
    )
}

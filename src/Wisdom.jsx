import {
    useState,
    useEffect
} from 'react'
export default function Wisdom() {
    // state to hold API response
    const [wiseWords, setWisewords] = useState('')
    // fetch the API data when the component mounts for the first time
    useEffect(() => {
        // fetch data
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(wisdom => {
                // set it in state
                setWisewords(wisdom.quote)
            })
        //set it in state
    }, []) // empty dependancy array means only run one time on initial component mount
    return (
        <div>
            <h2>wise words</h2>
            <p>{wiseWords}</p>
        </div>

    )
}

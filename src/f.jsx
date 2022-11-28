import {
    useState,
    useEffect
} from 'react'
export default function F() {
    const [information, setInformation] = useState('')
    // fetch the API data when the component mounts for the first time
    useEffect(() => {
        // fetch data
        fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=01a47d3c&app_key=%20e804c10482b38a9d08949ceb033d51a2&ingr=milk&nutrition-type=cooking')
        .then(res => res.json())
            // console.log(response.json())
        .then(information => {
            // set it in state
            setInformation(information.text)
        })
        //set it in state
    }, []) // empty dependancy array means only run one time on initial component mount
    return (
        <div>
            <h2>wise words</h2>
            {information}
        </div>

    )
}

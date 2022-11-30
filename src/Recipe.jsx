import {
    useState,
    useEffect
} from 'react'
export default function Recipe() {

//
//////////////////////////
    const [input, setInput] = useState('pie')
    const [recipes, setRecipes] = useState([])
    const [item, setItem] = useState({
        pic: '',
        label: ''
    })
    const [showItem, setShowItem] = useState(true)



    useEffect(() => {

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=750505cc&app_key=4d9f46de2a4199d804217a16f108cf24`)
        .then(res => res.json())
        .then(information => {
            // console.log(information.hits[0].recipe.image)

            const recipeInformation = [ information.hits[2].recipe.label  ]

            setItem({...item, pic: information.hits[2].recipe.image, label: recipeInformation})
            const newRecipes = []
            newRecipes.push(item)
            console.log(newRecipes)
            // setRecipes([...recipes, information.hits[2].recipe.label, information.hits[2].recipe.label])





        })
    }, [input])


    const handleSubmit = (e) => {
        e.preventDefault()

            setShowItem(true)
            // console.log(recipes)
        }
    return (
        <div>

            <div>
                <form onSubmit={e => handleSubmit(e, input, setInput)}>
                    <label htmlFor='name-input'>name</label>
                    <input
                        type='text'
                        // placeholder='name'
                        id='name-input'
                        value={input}
                        onChange={(e) => { setInput(e.target.value)
                        setShowItem(false)}}
                    />
                    <button type='submit' >add</button>
                </form>
            </div>


        { showItem ?
            <img src={item.pic}></img> : ''

        }

        { showItem ?
            <div>
                {item.label}
            </div> : ''
        }

        </div>

    )
}

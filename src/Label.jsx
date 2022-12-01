import Ingredient from './Ingredient'
import {useState} from 'react'
export default function Label({ recipeLabel }) {


    const [showIngredients, setShowIngredients] = useState(false)
    const ingredients = recipeLabel.recipe.ingredients.map((ingredient, idx) => {
        return(<div><Ingredient ingredient={ingredient}/></div>)
    })

    return(
        <div>
            <h3>{recipeLabel.recipe.label}</h3>
            { showIngredients ? <h3>{ingredients}</h3> : ''}
            <img src={recipeLabel.recipe.image}></img>
            <div><button onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? 'hide ingredients' : 'show ingredients'}</button></div>
        </div>
    )
}

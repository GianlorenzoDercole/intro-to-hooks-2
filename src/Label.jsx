import Ingredient from './Ingredient'
import {useState} from 'react'
export default function Label({ recipeLabel }) {
//////////////////////////////////////////////////////////////////

    const [showIngredients, setShowIngredients] = useState(false)
    const ingredients = recipeLabel.recipe.ingredients.map((ingredient, idx) => {
        return(<div><Ingredient ingredient={ingredient}/></div>)
    })

    return(
        <div>
            <div><button className='topButton'>{recipeLabel.recipe.label}</button></div>
            {/* {recipeLabel.recipe.label.length < 26 ? <h3>{recipeLabel.recipe.label}</h3> : <h3>{recipeLabel.recipe.label.slice(0, 30)} ...</h3>} */}
            {/* <h3>{recipeLabel.recipe.label}</h3> */}
            { showIngredients ? < div className='ingredients'> <button onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? 'hide ingredients' : 'show ingredients'}</button><h2 className='labelForIngredients'>{recipeLabel.recipe.label}</h2><h3>{ingredients}</h3> </div>  : ''}
            <img src={recipeLabel.recipe.image}></img>
            <div><button onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? 'hide ingredients' : 'show ingredients'}</button></div>
        </div>
    )
}

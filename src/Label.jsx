import Ingredient from './Ingredient'
export default function Label({ recipeLabel }) {
    const ingredients = recipeLabel.recipe.ingredients.map((ingredient, idx) => {
        return(<div><Ingredient ingredient={ingredient}/></div>)
    })
    return(
        <div>
            <h1>{recipeLabel.recipe.label}</h1>
            <h3>{ingredients}</h3>
            <img src={recipeLabel.recipe.image}></img>
        </div>
    )
}

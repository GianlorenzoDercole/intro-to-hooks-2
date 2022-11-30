


export default function Label({ recipeLabel }) {
    return(

        // <h1>{recipeLabel.recipe.label}</h1>
        // 'hi'
        <div>
            <h1>{recipeLabel.recipe.label}</h1>
            <img src={recipeLabel.recipe.image}></img>
        </div>
    )
}

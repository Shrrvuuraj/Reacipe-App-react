import "tailwindcss"

const Recipe = (props) =>{

    return <div className="flex align-item">
        <h1 className="flex" >{props.recipeList.recipe.label}</h1>
        <ol>
            {(props.recipeList.recipe.ingredients).map(list=> <li>{list.text}</li>)}
        </ol>
        <img src={props.recipeList.recipe.image} />
        <h3>{props.recipeList.recipe.calories}k/cal</h3>
    </div>
}

export default Recipe

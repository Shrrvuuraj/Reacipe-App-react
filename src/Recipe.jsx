import "tailwindcss";

const Recipe = (props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-5 my-5">
      <h1 className="text-xl font-bold text-gray-800">{props.recipeList.recipe.label}</h1>
      
      <img
        src={props.recipeList.recipe.image}
        alt={props.recipeList.recipe.label}
        className="w-full h-48 object-cover rounded-md my-3"
      />

      <h3 className="text-lg font-semibold text-gray-600">{props.recipeList.recipe.calories.toFixed(2)} k/cal</h3>

      <ol className="list-disc list-inside mt-3 space-y-1 text-gray-700">
        {props.recipeList.recipe.ingredients.map((list, index) => (
          <li key={index} className="text-sm">
            {list.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;

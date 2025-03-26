import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

const APP_ID = "dc34792b";
const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";

const App = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [dishes, setDishes] = useState([]);

  function submiter(e) {
    e.preventDefault();
    setQuery(input);
  }

  useEffect(() => {
    async function getRecipe() {
      try {
        let res = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        let response = await res.json();
        setDishes(response.hits || []);
        console.log(response.hits);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setDishes([]);
      }
    }

    if (query) {
      getRecipe();
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Search Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-5 mt-10">
        <form onSubmit={submiter} className="flex space-x-2">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a recipe..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Recipe Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 px-4">
        {dishes.map((item, idx) => (
          <Recipe key={idx} recipeList={item} />
        ))}
      </div>
    </div>
  );
};

export default App;

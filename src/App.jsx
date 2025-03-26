import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

const APP_ID = 'dc34792b';
const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21';

const App = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [dishes, setDishes] = useState([]);

  function submiter(e) {
    e.preventDefault();
    setQuery(input);
  }

  useEffect(() => {
    async function getRecipe() {
      try {
        let res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
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
    <div className="main">
      <form onSubmit={submiter}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      {dishes.map((item, idx) => (
        <Recipe key={idx} recipeList={item} />
      ))}
    </div>
  );
};

export default App;
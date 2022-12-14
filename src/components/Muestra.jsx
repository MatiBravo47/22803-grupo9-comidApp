import React from 'react'
import { useEffect, useState } from "react";

function Muestra() {

  const [recetas, setRecetas] = useState([]);
  
  useEffect(() => {
    getRecetas();
  }, [])

  const getRecetas = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setRecetas(data.recipes)
    console.log(data)
  }
  return (
    <div>
      {recetas.map((recipe) => {
        return (

          <div class="card">
            <img src={recipe.image} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{recipe.title}</h5>
            <a href="#" class="btn btn-primary">Go to recipe</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Muestra
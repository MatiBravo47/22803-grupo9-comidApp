import React from 'react'
import { useEffect, useState } from "react";
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function Muestra() {

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    getRecetas();
  }, [])

  const getRecetas = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian,dessert`
    );
    const data = await api.json();
    setRecetas(data.recipes)
    console.log(data)

  }
  return (
    <div className='row'>
      {recetas.map((recipe) => {
        return (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div class="card">
              <img src={recipe.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{recipe.title}</h5>
                <p> Me gusta: {recipe.aggregateLikes}</p>
                <p> Libre de gluten: {recipe.glutenFree ? 'Sí' : 'No'} </p>
                <p> Costo: {recipe.cheap ? 'Bajo' : 'Alto'} </p>

                <a href="#" class="btn btn-primary">Ver la receta</a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Muestra
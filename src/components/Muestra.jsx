import React from 'react'
import { useEffect, useState } from "react";
import './Muestra.css';


function Muestra() {

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    getRecetas();
  }, [])

  const getRecetas = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
    );
    const data = await api.json();
    setRecetas(data.recipes)
    console.log(data)

  }
  return (
    <div className='row'>
      {recetas.map((recipe) => {
        return (
          <div className=' card-group col-12 col-sm-6 col-md-4 col-lg-3'>
            <div class="card bg-dark text-white mb-3">
              <img src={recipe.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-white">{recipe.title}</h5>
                <p> Libre de gluten: {recipe.glutenFree ? 'Sí' : 'No'} </p>
                <div className='text-center m-2'>
                  <div className='btn div-minutes p-0 m-0 text-center'><i class="fa-regular fa-clock"></i>{recipe.readyInMinutes}min</div>
                </div>
                <div className='text-center'><a href="/muestra" class="btn btn-primary">Ver la receta</a></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Muestra
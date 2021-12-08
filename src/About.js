import React,{ useEffect,useState } from "react";
import {useParams} from 'react-router-dom';


function About() {
  const {slug}=useParams();

  const [pokemon,setPokemon]=useState();
  useEffect( async()=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
    const data = await response.json();
    setPokemon(data);
    console.log(data);
   },[slug]);

   

  return (
      <>
        {pokemon && (
          <div className="w-3/12 m-auto bg-blue-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
            <h3 className="text-2xl text-green-600 uppercase">{pokemon.name}</h3>
            <div className="flex justify-center">
              <img className="w-48" src={pokemon.sprites["front_shiny"]} alt=""/>
              <img className="w-48" src={pokemon.sprites["back_shiny"]} alt=""/>
            </div>
          </div>
        )}
         
      </>
  );
}

export default About;
import React,{ useEffect,useState,useMemo } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from'react-router-dom';
import About from "./About";
import Home from "./Home";

const App=()=> {

  const [filteredPokemon,setFilteredPokemon]=useState([]);
  const [text,setText]=useState('');
  const [pokemon,setPokemon]=useState([]);
  useEffect( async()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
    const data = await response.json();
    const results =data.results.map((pokemon,idx)=>{
        return{ ... pokemon, idx:idx+1};
    });
    setPokemon({...data,results});
   });
 

   useMemo(()=>{
    if(text.length=== 0){
      setFilteredPokemon([]);
      return;
    }
    setFilteredPokemon(()=> 
      pokemon.results?.filter((pokemon)=>pokemon.name.includes(text))
    )

   },[pokemon.results, text]);

  return (
    <>
    <Router>
      <div className="p-14">
        <div className=" flex flex-col items-center">
          <Link to="/">
            <header className=" text-4xl text-yellow-600 italic hover:text-yellow-400">Pokemon Picker</header>
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <input type="text"
          onChange={($event)=>setText($event.target.value)} 
          placeholder="Enter Pokemon here"
          className=" mt-10 p-2  border-2 border-blue-800  rounded-lg "
          />
        </div>
        
      </div>

      <Routes>
        <Route path='/about/:slug' element={<About />}/>
        <Route path='/' element={pokemon && <Home pokemon={filteredPokemon}/>}/>
      </Routes>
    </Router>
    </>
    
  );
};

export default App;

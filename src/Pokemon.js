import React, {useState, useEffect} from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            // Sending in second argument below of [] an array of all the variables you want to keep track of; any time variable in that array changes , then useEffect will run
            // having an empty array is so useEffect can be run on the very first render
    }, []);

  return (
    <div>
        {pokemon.length > 0 && pokemon.map((pokemon, index) => {
            return (<div key={index}><ul><li>{pokemon.name}</li></ul></div>)
        })}
    </div>
  );
}

export default Pokemon;
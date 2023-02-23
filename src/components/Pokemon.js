

import './../App.css';
import { useState , useEffect} from 'react';
import './../Pokemon.service.js';
import { convertPoundsToKilograms, getFirstAbility } from './../Pokemon.service.js';

import { Link } from 'react-router-dom';


function Pokemon(props) {


  const [dataPokemon, setDataPokemon] = useState([])

  const getPokemon = async () => {
    try {
      const responsePokemonBulbar = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}`);
      const jsonPokemon = await responsePokemonBulbar.json();
      setDataPokemon(jsonPokemon);
    
      
    } catch (errorApi) {
      console.error(errorApi);
    }
    

  }


  useEffect(() => {
    getPokemon();
  }, []);


  console.log(dataPokemon);
  console.log(props.idPokemon)



  return (
    <div className="App">
      <header className="App-header">
        { dataPokemon && dataPokemon.sprites &&
        <div> 
            <h1>{dataPokemon.name}</h1>
            <img src={dataPokemon.sprites.front_default}></img>
            <p>{getFirstAbility(dataPokemon)}</p>
            <p>{convertPoundsToKilograms(dataPokemon.weight)}</p>
            <li><Link to={`/detail-page/${props.idPokemon}`}>Info</Link></li>
        </div>
        }
      </header>
    </div>


  );
}

export default Pokemon;

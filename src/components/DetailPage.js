
import './../App.css';
import './../Pokemon.service.js';
import { useParams } from 'react-router-dom';
import Pokemon from './Pokemon';



export function DetailPage () {

    const {id} = useParams();


  return (
    <div className="App">
      <header className="App-header">

       <Pokemon idPokemon={id} />
    
      </header>
    </div>


  );




}
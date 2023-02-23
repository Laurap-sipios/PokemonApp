import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import Pokemon from './components/Pokemon';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      
        {[1,2,3,4,5,6,7,8,9].map((idPokemon) => {
        return <Pokemon idPokemon={idPokemon} />
      })}


      </header>
    </div>


  );
}

export default App;

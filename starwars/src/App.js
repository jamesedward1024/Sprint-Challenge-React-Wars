import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterList from './components/CharacterList';

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
      axios
          .get(`https://rickandmortyapi.com/api/character/`)
          .then((response) => {
              const characterInfo = response.data.results;
              setCharacter(characterInfo);

          })
          .catch((error) => {
              console.log(error);
          })

  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList character={character}/>
    </div>
  );
}

export default App;

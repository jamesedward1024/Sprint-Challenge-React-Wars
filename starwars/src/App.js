import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterList from './components/CharacterList';
import { Container, Row } from "reactstrap";

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
      <Container>
            <Row>
          <CharacterList character={character} />
        </Row>
        </Container>
    </div>
  );
}

export default App;

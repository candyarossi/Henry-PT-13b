import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import characters from "./data.js";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(( {data} ) => {
    //     if (data.name) {
    //        setCharacters([data, ...characters]);
    //     } else {
    //        window.alert('¡No hay personajes con este ID!');
    //     }
    //  });

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters([data, ...characters])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  function random() {
    let randomId = Math.ceil(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id){
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Nav onSearch={onSearch} random={random} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

import imageRickMorty from "srcimg\rickyfoto.png";
import imagenCredencial from "srcimgFotocredencial.jpg";

import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>

        <div className="infoContainer">
          Anahi Ximena Sanchez Vasquez
          <br />
          zs20006727@estudiantes.uv.mx <br />
          <img src={imagenCredencial} alt="imagenCredencial" id="info-img" />
        </div>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

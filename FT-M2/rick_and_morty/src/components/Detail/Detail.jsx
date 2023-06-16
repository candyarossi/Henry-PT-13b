import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const textos = { color: "violet" };
const info = { textAlign: "left", fontSize: "24px" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };
const divPrincipal = {
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
  margin: "auto",
  marginTop: "75px",
};
const styleButton = {
  backgroundColor: "pink",
  color: "purple",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  marginTop: "35px",
  cursor: "pointer",
};

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div style={divPrincipal}>
        <div style={info}>
          {character.name && (
            <p>
              <b style={textos}>Name: </b>
              {character.name}
            </p>
          )}
          {character.status && (
            <p>
              <b style={textos}>Status: </b>
              {character.status}
            </p>
          )}
          {character.species && (
            <p>
              <b style={textos}>Species: </b>
              {character.species}
            </p>
          )}
          {character.gender && (
            <p>
              <b style={textos}>Gender: </b>
              {character.gender}
            </p>
          )}
          {character.origin && (
            <p>
              <b style={textos}>Origin: </b>
              {character.origin.name}
            </p>
          )}
        </div>
        <img style={image} src={character.image} />
      </div>
      <button style={styleButton} onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </>
  );
}

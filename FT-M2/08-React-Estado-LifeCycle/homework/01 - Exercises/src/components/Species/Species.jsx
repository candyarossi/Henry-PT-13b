import React from "react";

export default function Species(props) {
  const { species, handleSpecies, handleAllSpecies } = props;
  return (
    <div>
      <h2>Species</h2>
      {species.map((element, key) => (
        <button key={key} onClick={handleSpecies} value={element}>
          {element}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  );
}
import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <SContainer>
      {characters.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Busca un personaje!
        </p>
      ) : (
        characters.map((e, i) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
            key={e.id}
          />
        ))
      )}
    </SContainer>
  );
}

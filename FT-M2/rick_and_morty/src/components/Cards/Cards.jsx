import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards(props) {
  const { characters } = props;
  return (
    <SContainer>
      {characters.map((c) => (
        <Card
          name={c.name}
          status={c.status}
          species={c.species}
          gender={c.gender}
          origin={c.origin}
          image={c.image}
          key={c.id}
          onClose={() => alert("Eliminar")}
        />
      ))}
    </SContainer>
  );
}

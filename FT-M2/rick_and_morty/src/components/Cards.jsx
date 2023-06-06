import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
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
    </div>
  );
}

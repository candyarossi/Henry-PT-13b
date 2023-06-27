import Card from "../Card/Card";
import { connect } from "react-redux";
import SContainer from "../SContainer/SContainer";

export function Favorites({ favorites }) {
  return (
    <SContainer>
      {favorites.length === 0 ? (
        <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
          ¡Agrega un favorito!
        </p>
      ) : (
        favorites.map((e, i) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={false}
            fav={true}
            key={i++}
          />
        ))
      )}
    </SContainer>
  );
}

export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);

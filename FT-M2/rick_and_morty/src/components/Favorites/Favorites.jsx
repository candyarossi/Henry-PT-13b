import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { useRef } from "react";
import SContainer from "../SContainer/SContainer";
import { filterCards, orderCards } from "../../redux/actions";

const styleSelect = {
  marginRight: "15px",
  padding: "10px",
  borderRadius: "5px",
};

export function Favorites({ favorites }) {
  const filter = useRef(null);
  const order = useRef(null);

  const dispatch = useDispatch();

  function handleReset(e) {
    dispatch({ type: "RESET" });
    filter.current.value = "";
    order.current.value = "";
  }

  return (
    <>
      <select
        style={styleSelect}
        ref={order}
        onChange={(e) => dispatch(orderCards(e.target.value))}
      >
        {["", "Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <select
        style={styleSelect}
        ref={filter}
        onChange={(e) => dispatch(filterCards(e.target.value))}
      >
        {["", "Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <button value="reset" onClick={handleReset}>
        Reset
      </button>
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
    </>
  );
}

export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);

import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(72, 61, 139, 0.7);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 15px 0px;
  max-width: 18.8rem;
`;

const Button = styled.button`
  background-color: pink;
  color: purple;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "violet",
  marginRight: "15px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "deeppink",
  marginRight: "15px",
};

export function Card(props) {
  // style={{display: 'flex', justifyContent: 'space-between'}}
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.favorites &&
      props.favorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  }, [props.favorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        status: props.status,
        origin: props.origin,
        id: props.id,
      });
    }
  }

  return (
    <DivCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {isFav ? (
          <Button onClick={handleFavorite}>❤️</Button>
        ) : (
          <Button onClick={handleFavorite}>🤍</Button>
        )}
        {props.onClose && <Button onClick={props.onClose}>X</Button>}
      </div>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2 style={{ marginBottom: "0" }}>{props.name}</h2>
      </Link>
      {/* {<h4>{props.status}</h4>} */}
      <h4 style={styleSpecie}>{props.species}</h4>
      <h4 style={styleGender}>{props.gender}</h4>
      <h4 style={{ color: "yellow", display: "inline-block" }}>{props.id}</h4>
      {/* {<h4>{props.origin.name}</h4>} */}
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}

export function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

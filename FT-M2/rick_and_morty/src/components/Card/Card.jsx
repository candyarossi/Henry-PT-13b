import styled from "styled-components";
import { Link } from "react-router-dom";

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
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "deeppink",
  //marginRight: '15px',
  marginTop: "-10px",
};

export default function Card(props) {
  // style={{display: 'flex', justifyContent: 'space-between'}}
  return (
    <DivCard>
      <Button onClick={props.onClose}>X</Button>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2>{props.name}</h2>
      </Link>
      {/* {<h4>{props.status}</h4>} */}
      <h4 style={styleSpecie}>{props.species}</h4>
      <h4 style={styleGender}>{props.gender}</h4>
      {/* {<h4>{props.origin.name}</h4>} */}
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}

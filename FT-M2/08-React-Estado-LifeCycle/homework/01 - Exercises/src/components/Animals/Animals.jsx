import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {animals} = this.props;
    return <div>
      {animals.map((element, index) => <div key={index}>
          <h5>{element.name}</h5>
          <img src={element.image} alt={element.name} width="300px" />
          <span>{element.specie}</span>
      </div>)}
    </div>;
  }
}
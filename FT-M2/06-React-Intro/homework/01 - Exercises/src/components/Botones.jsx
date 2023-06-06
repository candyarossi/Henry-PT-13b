import React from "react";

export default class Botones extends React.Component {
  // constructor(props){
  //     super(props);
  // }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            alert(this.props.alerts.m1);
          }}
        >
          Módulo 1
        </button>
        <button
          onClick={() => {
            alert(this.props.alerts.m2);
          }}
        >
          Módulo 2
        </button>
      </div>
    );
  }
}

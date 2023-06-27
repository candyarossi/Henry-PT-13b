import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from "../Card/Card";
import { getStoreName } from "../../redux/actions/actions";

export function Products({ list, getStoreName, storeName }) {
  React.useEffect(() => {
    getStoreName();
  }, []);

  return (
    <>
      <div className="productsBg">
        <h1>{storeName}</h1>
        <div className="productsList">
          {
            /* ¡Renderiza aquí todas tus cards! */
            list.map((e, i) => (
              <Card name={e.name} price={e.price} id={e.id} key={i} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    ...state,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getStoreName: function () {
      dispatch(getStoreName());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

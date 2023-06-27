import React, { useState } from "react";
import { connect } from "react-redux";
import Caja from "../../assets/caja.png";
import "./form.css";
import { addProduct } from "../../redux/actions/actions";

function Form({ list, addProduct }) {
  const [product, setProduct] = useState({ name: "", price: "", id: "" });
  const [errors, setErrors] = useState({ name: "", price: "", id: "" });
  const msjError = "Campo Obligatorio.";

  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    value.length === 0
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (list.length < 9) {
      if (!list.find((e) => e.name === product.name)) {
        if (product.name.length > 0 && product.price.length > 0) {
          addProduct({ ...product, id: Date.now() });
        }
      } else {
        alert("Ya existe un producto con ese nombre.");
      }
    } else {
      alert("Se ha llegado al máximo de 9 productos.");
    }
    setProduct({ name: "", price: "", id: "" });
  }

  function validateSubmit(error) {
    let valid = 0;
    let valoresError = Object.values(error);
    valoresError.forEach((val) => {
      if (val) valid++;
    });
    if (valid === valoresError.length) return true;
    return false;
  }

  return (
    <div className="formBg">
      <div className="inputBox">
        <label>Nombre: </label>
        <input name="name" onChange={handleInputChange} value={product.name} />
        <p>{errors.name && msjError}</p>
      </div>
      <div className="inputBox">
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          onChange={handleInputChange}
          value={product.price}
        />
        <p>{errors.price && msjError}</p>
      </div>
      <button
        className="formBtn"
        onClick={handleSubmit}
        disabled={validateSubmit(errors)}
      >
        ¡ADD!
      </button>
      <img src={Caja} alt="" className="logo" />
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addProduct: function (product) {
      dispatch(addProduct(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";
import axios from "axios";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
}

export function getStoreName() {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/store");
      return dispatch(
        /*Aquí es donde agregas tu código*/
        { type: GET_STORE_NAME, payload: response.data.name }
      );
    } catch (error) {
      console.log(error);
    }
  };
}

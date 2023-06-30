import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  favorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const addFavorites = [...state.allCharacters, payload];
      return {
        ...state,
        favorites: [...addFavorites],
        allCharacters: [...addFavorites],
      };
    case REMOVE_FAV:
      const deleteFavorites = state.allCharacters.filter(
        (e) => e.id !== payload
      );
      return {
        ...state,
        favorites: [...deleteFavorites],
        allCharacters: [...deleteFavorites],
      };
    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter((e) => e.gender === payload),
      };
    case ORDER:
      let orderFavorites;
      if (payload === "Ascendente") {
        orderFavorites = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        orderFavorites = state.favorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return {
        ...state,
        favorites: [...orderFavorites],
      };
    case "RESET":
      return {
        ...state,
        favorites: [...state.allCharacters],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

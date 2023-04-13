/* eslint-disable quotes */
export const initialState = {
  list: [],
  favorites: [],
  loaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_RECIPES_IN_STATE":
      return {
        ...state,
        list: [...action.recipes],
        loaded: true,
      };
    case "SET_FAVORITE_RECIPES_IN_STATE":
      return {
        ...state,
        favorites: [...action.favoriteRecipes],
      };
    default:
      return state;
  }
};

export default reducer;

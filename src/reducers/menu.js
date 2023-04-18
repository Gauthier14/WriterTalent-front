/* eslint-disable quotes */
export const initialState = {
  visible: false,
  genres: [],
  categories: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        visible: !state.visible,
      };

    case "SET_GENRES_IN_STATE":
      return {
        ...state,
        genres: [...action.genreList],
      };
    case "SET_CATEGORIES_IN_STATE":
      return {
        ...state,
        categories: [...action.categoryList],
      };

    default:
      return state;
  }
};

export default reducer;

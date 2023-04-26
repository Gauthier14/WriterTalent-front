const defaultState = {
  title: "",
  editorState: "",
  genre: "",
  categories: [],
};

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_EDITOR_FIELDS_VALUE":
      return {
        ...state,
        [action.valueName]: action.value,
      };
    case "GET_EDITOR_SELECTED_CATEGORIES":
      return {
        ...state,
        categories: [...action.selectedCategories],
      };
    default:
      return state;
  }
};

export default reducer;

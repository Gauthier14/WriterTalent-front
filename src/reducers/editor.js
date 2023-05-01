import { EditorState } from "draft-js";

const defaultState = {
  title: "",
  editorState: EditorState.createEmpty(),
  genre: "",
  categories: [],
  postToEdit: {},
  loaded: false,
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
    case "UPDATE_EDITOR_STATE":
      return {
        ...state,
        editorState: action.editorState,
      };
    case "SET_EDIT_POST_IN_STATE":
      return {
        ...state,
        postToEdit: action.newPost,
      };
    case "SET_EDIT_POST_LOADED":
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default reducer;

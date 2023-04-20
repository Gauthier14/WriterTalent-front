/* eslint-disable quotes */

const defaultState = {
  editorState: "",
};

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "UPDATE_EDITOR_STATE":
      return {
        ...state,
        editorState: action.editorState,
      };
    default:
      return state;
  }
};

export default reducer;

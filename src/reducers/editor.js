/* eslint-disable default-param-last */
/* eslint-disable quotes */
import { EditorState } from "draft-js";

const defaultState = {
  editorState: EditorState.createEmpty(),
};

const reducer = (state = defaultState, { editorState, type }) => {
  switch (type) {
    case "UPDATE_EDITOR_STATE":
      return {
        ...state,
        editorState,
      };
    default:
      return state;
  }
};

export default reducer;

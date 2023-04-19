/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const UPDATE_EDITOR_STATE = "UPDATE_EDITOR_STATE";

/**
 * @param {Array} Posts - List of posts from one category
 */
export const updateEditorState = (editorState) => ({
  type: UPDATE_EDITOR_STATE,
  editorState: editorState,
});

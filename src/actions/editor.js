/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_EDITOR_FIELDS_VALUE = "GET_EDITOR_FIELDS_VALUE";
export const GET_EDITOR_SELECTED_CATEGORIES = "GET_EDITOR_SELECTED_CATEGORIES";
export const UPDATE_EDITOR_STATE = "UPDATE_EDITOR_STATE";
export const SAVE_POST = "SAVE_POST";

/**
 * @param {Array} Posts - List of posts from one category
 */
export const getEditorFieldsValue = (valueName, value) => ({
  type: GET_EDITOR_FIELDS_VALUE,
  valueName: valueName,
  value: value,
});
/**
 * @param {Array} Posts - List of posts from one category
 */
export const getEditorSelectedCategories = (selectedCategories) => ({
  type: GET_EDITOR_SELECTED_CATEGORIES,
  selectedCategories: selectedCategories,
});

/**
 * @param {Array} Posts - List of posts from one category
 */
export const updateEditor = (editorState) => ({
  type: UPDATE_EDITOR_STATE,
  editorState: editorState,
});
/**
 * @param {Array} Posts - List of posts from one category
 */
export const savePost = (contentNewPost) => ({
  type: SAVE_POST,
  content: contentNewPost,
});

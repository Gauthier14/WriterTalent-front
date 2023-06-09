/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_EDITOR_FIELDS_VALUE = "GET_EDITOR_FIELDS_VALUE";
export const GET_EDITOR_SELECTED_CATEGORIES = "GET_EDITOR_SELECTED_CATEGORIES";
export const UPDATE_EDITOR_STATE = "UPDATE_EDITOR_STATE";
export const SAVE_NEW_POST = "SAVE_NEW_POST";
export const UPDATE_POST = "UPDATE_POST";
export const ASK_FOR_PUBLICATION = "ASK_FOR_PUBLICATION";
export const SET_EDIT_POST_LOADED = "SET_EDIT_POST_LOADED";
export const GET_EDIT_POST_FROM_API = "GET_EDIT_POST_FROM_API";
export const SET_EDIT_POST_IN_STATE = "SET_EDIT_POST_IN_STATE";

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
export const askForPublication = (postId) => ({
  type: ASK_FOR_PUBLICATION,
  postId: postId,
});
/**
 * @param {Array} Posts - List of posts from one category
 */
export const saveNewPost = (contentNewPost) => ({
  type: SAVE_NEW_POST,
  content: contentNewPost,
});
/**
 * @param {Array} Posts - List of posts from one category
 */
export const updatePost = (postId) => ({
  type: UPDATE_POST,
  postId: postId,
});

// actions for one post
export const getEditPostFromApi = (postId) => ({
  type: GET_EDIT_POST_FROM_API,
  postId: postId,
});
/**
 * @param {Object} Posts - Post generated by random method
 */
export const setEditPostInState = (newPost) => ({
  type: SET_EDIT_POST_IN_STATE,
  newPost: newPost,
});

/**
 * @param {Object} Posts - Post generated by random method
 */
export const setEditPostLoaded = () => ({
  type: SET_EDIT_POST_LOADED,
});

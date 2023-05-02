/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_VIEWER_MENU = 'TOGGLE_VIEWER_MENU';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SEND_REVIEW = 'SEND_REVIEW';
export const GET_REVIEW_CONTENT = 'GET_REVIEW_CONTENT';
export const LIKE_POST = 'LIKE_POST';
export const DISLIKE_POST = 'DISLIKE_POST';
export const ADD_POST_TO_READ_LATER_LIST = 'ADD_POST_TO_READ_LATER_LIST';
export const ADD_POST_TO_FAVORITE_LIST = 'ADD_POST_TO_FAVORITE_LIST';

/**
 * @param {string} inputText - Value of register-email input
 */
export const getReviewContent = (inputValue, name) => ({
  type: GET_REVIEW_CONTENT,
  textInput: inputValue,
  inputName: name,
});
export const sendReview = (postId) => ({
  type: SEND_REVIEW,
  postId: postId,
});

// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const setToggleViewerMenu = () => ({
  type: TOGGLE_VIEWER_MENU,
});
// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const likePost = (postId) => ({
  type: LIKE_POST,
  postId: postId,
});
// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const addPostToReadLaterList = (postId) => ({
  type: ADD_POST_TO_READ_LATER_LIST,
  postId: postId,
});
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const addPostToFavoriteList = (postId) => ({
  type: ADD_POST_TO_FAVORITE_LIST,
  postId: postId,
});
// --- action creators ---
/**
 * @returns {object} Contains the type of the action for handling pages
 */
export const changePage = (newPage) => ({
  type: CHANGE_PAGE,
  newPage: newPage,
});

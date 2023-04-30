/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_VIEWER_MENU = "TOGGLE_VIEWER_MENU";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const SEND_REVIEW = "SEND_REVIEW";
export const GET_REVIEW_CONTENT = "GET_REVIEW_CONTENT";
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
 * @returns {object} Contains the type of the action for handling pages
 */
export const changePage = (newPage) => ({
  type: CHANGE_PAGE,
  newPage: newPage,
});

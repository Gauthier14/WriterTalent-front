/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_VIEWER_MENU = "TOGGLE_VIEWER_MENU";
export const CHANGE_PAGE = "CHANGE_PAGE";

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

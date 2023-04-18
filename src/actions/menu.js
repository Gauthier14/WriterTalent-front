/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_MENU = "TOGGLE_MENU";
export const GET_GENRES_FROM_API = "GET_GENRES_FROM_API";
export const SET_GENRES_IN_STATE = "SET_GENRES_IN_STATE";
export const GET_CATEGORIES_FROM_API = "GET_CATEGORIES_FROM_API";
export const SET_CATEGORIES_IN_STATE = "SET_CATEGORIES_IN_STATE";

// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

/**
 * @param {array} visibility - List of all genres of posts
 * @returns {object} Contains the type of the action and payload for updating state of genres
 */
export const setGenresInState = (genreList) => ({
  type: TOGGLE_MENU,
  genreList: genreList,
});

/**
 * @param {array} visibility - List of all genres of posts
 * @returns {object} Contains the type of the action and payload for updating state of genres
 */
export const setCategoriesInState = (categoryList) => ({
  type: TOGGLE_MENU,
  categoryList: categoryList,
});

/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_TEXT_FIELDS_LOGIN = "GET_TEXT_FIELDS_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const GET_USER_INFOS_FROM_API = "GET_USER_INFOS_FROM_API";

export const LOGOUT = "LOGOUT";
export const GET_ALL_AUTHORS = "GET_ALL_AUTHORS";
export const SET_ALL_AUTHORS_IN_STATE = "SET_ALL_AUTHORS_IN_STATE";

// --- action creators ---

/**
 * @param {string, string} (email, password) - Email and password of user
 * @returns {object} Action to connect the user
 */
export const loginUser = () => ({
  type: LOGIN_USER,
});

/**
 * @param {string} inputText - Value of login-email input
 */
export const getTextFieldLogin = (inputValue, name) => ({
  type: GET_TEXT_FIELDS_LOGIN,
  textInput: inputValue,
  inputName: name,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  token: token,
});

export const getAllAuthors = () => ({
  type: GET_ALL_AUTHORS,
});
export const getUserInfosFromApi = () => ({
  type: GET_USER_INFOS_FROM_API,
});

export const logout = () => ({
  type: LOGOUT,
});

/**
 * @param {Array} Posts - List of user saved posts
 */
export const setAllAthorsInState = (authorList) => ({
  type: SET_ALL_AUTHORS_IN_STATE,
  authorList: authorList,
});

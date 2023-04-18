/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_TEXT_FIELDS_LOGIN = "GET_TEXT_FIELDS_LOGIN";
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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

export const loginSuccess = (status, pseudo, token) => ({
  type: LOGIN_SUCCESS,
  loggedStatus: status,
  userPseudo: pseudo,
  userToken: token,
});

export const logout = () => ({
  type: LOGOUT,
});

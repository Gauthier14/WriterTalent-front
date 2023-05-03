/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_TEXT_FIELDS_REGISTER = 'GET_TEXT_FIELDS_REGISTER';
export const TOGGLE_PASSWORD_SHOWN = 'TOGGLE_PASSWORD_SHOWN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_REGISTER_SUCCESS = 'SUBMIT_REGISTER_SUCCESS';

// --- action creators ---

/**
 * @param {string} inputText - Value of register-email input
 */
export const getTextFieldRegister = (inputValue, name) => ({
  type: GET_TEXT_FIELDS_REGISTER,
  textInput: inputValue,
  inputName: name,
});
/**
 * @param {string} inputText - Value of register-email input
 */
export const togglePasswordShown = (inputName) => ({
  type: TOGGLE_PASSWORD_SHOWN,
  inputName: inputName,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

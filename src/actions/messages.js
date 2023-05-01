// annuaire des actions

// --- action types ---
export const SET_MESSAGE_INFOS = "SET_MESSAGE_INFOS";
export const CLEAN_MESSAGES = "CLEAN_MESSAGES";

// --- action creators ---
/**
 * @param {string} message - Text of message in chat
 * @returns {object} Contains the type of the action and payload containing message text
 */
export const setMessageInfosInState = (message) => ({
  type: SET_MESSAGE_INFOS,
  newMessage: message,
});
/**
 * @param {string} message - Text of message in chat
 * @returns {object} Contains the type of the action and payload containing message text
 */
export const cleanMessages = () => ({
  type: CLEAN_MESSAGES,
});

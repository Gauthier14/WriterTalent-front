// annuaire des actions

// --- action types ---
export const SET_MESSAGE_INFOS = "SET_MESSAGE_INFOS";

// --- action creators ---
/**
 * @param {string} message - Text of message in chat
 * @returns {object} Contains the type of the action and payload containing message text
 */
export const setMessageInfosInState = (text, className, serverMessage) => ({
  type: SET_MESSAGE_INFOS,
  text: text,
  className: className,
  serverMessage: serverMessage,
});

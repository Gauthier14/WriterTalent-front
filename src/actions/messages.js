// annuaire des actions

// --- action types ---
export const SEND_MESSAGE = "SEND_MESSAGE";

// --- action creators ---
/**
 * @param {string} message - Text of message in chat
 * @returns {object} Contains the type of the action and payload containing message text
 */
export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  newMessage: message,
});

/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_MENU = "TOGGLE_MENU";

// --- action creators ---
/**
 * @param {boolean} visibility - Status of menu visibilyty
 * @returns {object} Contains the type of the action and payload for hide or show menu
 */
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

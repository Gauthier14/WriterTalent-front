/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_VIEWER_MENU = "TOGGLE_VIEWER_MENU";

// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show menu
 */
export const setToggleViewerMenu = () => ({
  type: TOGGLE_VIEWER_MENU,
});

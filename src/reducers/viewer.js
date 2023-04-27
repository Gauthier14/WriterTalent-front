/* eslint-disable quotes */
export const initialState = {
  visible: false,
  currentPage: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_VIEWER_MENU":
      return {
        ...state,
        visible: !state.visible,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.newPage,
      };
    default:
      return state;
  }
};

export default reducer;

/* eslint-disable quotes */
export const initialState = {
  visible: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default reducer;

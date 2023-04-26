const defaultState = {
  text: "",
  class: "",
  serverMessage: "",
};

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "SET_MESSAGE_INFOS":
      return {
        ...state,
        text: action.text,
        class: action.className,
        serverMessage: action.serverMessage,
      };
    default:
      return state;
  }
};

export default reducer;

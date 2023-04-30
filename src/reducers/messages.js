const initialState = {
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_MESSAGE_INFOS":
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };
    case "CLEAN_MESSAGES":
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

export default reducer;

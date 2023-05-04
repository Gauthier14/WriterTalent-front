import { disconnectUser } from '../selectors/user';

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  if (state.messages.length !== 0) {
    state.messages = [];
  }
  if (state.messages !== {} && state.messages.serverMsg === 'Unauthorized') {
    disconnectUser();
  }
  switch (action.type) {
    case 'SET_MESSAGE_INFOS':
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };
    default:
      return state;
  }
};

export default reducer;

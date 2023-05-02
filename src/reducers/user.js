/* eslint-disable quotes */
import { manageSessionStorage } from '../selectors/user';

export const initialState = {
  email: '',
  password: '',
  authors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_TEXT_FIELDS_LOGIN':
      return {
        ...state,
        [action.inputName]: action.textInput,
      };
    case 'SET_ALL_AUTHORS_IN_STATE':
      return {
        ...state,
        authors: action.authorList,
      };
    case 'LOGOUT':
      manageSessionStorage('remove', 'token');
      manageSessionStorage('remove', 'user_id');
      manageSessionStorage('remove', 'username');
      manageSessionStorage('set', 'logged', '');
      manageSessionStorage('remove', 'session-start');
      return state;
    default:
      return state;
  }
};

export default reducer;

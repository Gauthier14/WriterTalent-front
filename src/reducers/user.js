/* eslint-disable quotes */
import { disconnectUser, manageSessionStorage } from '../selectors/user';

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
      disconnectUser();
      return state;
    case 'LOGIN_SUCCESS':
      manageSessionStorage('set', 'token', action.token);
      return {
        ...state,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;

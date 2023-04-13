/* eslint-disable quotes */
export const initialState = {
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_TEXT_FIELDS_LOGIN":
      return {
        ...state,
        [action.inputName]: action.textInput,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        logged: action.loggedStatus,
        pseudo: action.userPseudo,
        token: action.userToken,
      };
    case "LOGOUT":
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;

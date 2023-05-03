/* eslint-disable quotes */
export const initialState = {
  username: '',
  email: '',
  password: '',
  passwordAgain: '',
  showPassword: false,
  showPasswordAgain: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_TEXT_FIELDS_REGISTER':
      return {
        ...state,
        [action.inputName]: action.textInput,
      };
    case 'TOGGLE_PASSWORD_SHOWN':
      return {
        ...state,
        [action.inputName]: !state[action.inputName],
      };
    default:
      return state;
  }
};

export default reducer;

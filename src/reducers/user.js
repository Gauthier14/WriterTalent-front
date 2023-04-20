/* eslint-disable quotes */

export const initialState = {
  userId: "",
  email: "",
  password: "",
  pseudo: "",
  authors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_TEXT_FIELDS_LOGIN":
      return {
        ...state,
        [action.inputName]: action.textInput,
      };
    case "SET_ALL_AUTHORS_IN_STATE":
      return {
        ...state,
        authors: action.authorList,
      };
    default:
      return state;
  }
};

export default reducer;

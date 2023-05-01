/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import {
  GET_GENRES_FROM_API,
  GET_CATEGORIES_FROM_API,
  setCategoriesInState,
  setGenresInState,
} from "../actions/menu";
import { showMessages, generateMessages } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

const menuMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GENRES_FROM_API:
      axios
        .get("http://localhost:8000/api/genres")
        .then((response) => {
          console.log(response);
          store.dispatch(setGenresInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages("genres")));
          showMessages();
        });
      break;
    case GET_CATEGORIES_FROM_API:
      axios
        .get("http://localhost:8000/api/categories")
        .then((response) => {
          console.log(response);
          store.dispatch(setCategoriesInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages("univers")));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};
export default menuMiddleware;

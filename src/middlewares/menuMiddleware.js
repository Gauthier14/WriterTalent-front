/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import {
  GET_GENRES_FROM_API,
  GET_CATEGORIES_FROM_API,
  setCategoriesInState,
  setGenresInState,
} from "../actions/menu";
import { setMessageInfosInState } from "../actions/messages";
import { generateMessage, showMessage } from "../selectors/message";

const menuMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GENRES_FROM_API:
      axios
        .get("http://localhost:8000/api/genres")
        .then((response) => {
          store.dispatch(setGenresInState(response.data));
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("genres"),
              "warning",
              error.message
            )
          );
          showMessage();
        });
      break;
    case GET_CATEGORIES_FROM_API:
      axios
        .get("http://localhost:8000/api/categories")
        .then((response) => {
          store.dispatch(setCategoriesInState(response.data));
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("univers"),
              "warning",
              error.message
            )
          );
          showMessage(10000);
        });
      break;
    default:
      break;
  }
  next(action);
};
export default menuMiddleware;

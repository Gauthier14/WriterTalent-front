/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import { setTimeout } from "core-js";
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
        .get("http://kyllian-g-server.eddi.cloud:8443/api/genres")
        .then((response) => {
          store.dispatch(setGenresInState(response.data));
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              `Les genres n'ont pas pu être récupérés, problème de connexion avec l'API`,
              "warning",
              error.message
            )
          );
          showMessage();
        });
      break;
    case GET_CATEGORIES_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/categories")
        .then((response) => {
          store.dispatch(setCategoriesInState(response.data));
        })
        .catch((error) => {
          setTimeout(() => {
            store.dispatch(
              setMessageInfosInState(
                "Les univers n'ont pas pu être récupérés, problème de connexion avec l'API",
                "warning",
                error.message
              )
            );
            showMessage();
          }, 6000);
        });
      break;
    default:
      break;
  }
  next(action);
};
export default menuMiddleware;

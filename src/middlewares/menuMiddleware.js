/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import {
  GET_GENRES_FROM_API,
  GET_CATEGORIES_FROM_API,
  setCategoriesInState,
  setGenresInState,
} from "../actions/menu";

const menuMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GENRES_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/genres")
        .then((response) => {
          store.dispatch(setGenresInState(response.data));
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_CATEGORIES_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/categories")
        .then((response) => {
          store.dispatch(setCategoriesInState(response.data));
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};
export default menuMiddleware;

import axios from "axios";
import {
  GET_GENRES_FROM_API,
  setCategoriesInState,
  GET_CATEGORIES_FROM_API,
  setGenresInState,
} from "../actions/menu";

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GENRES_FROM_API:
      axios
        .get("http://localhost:8000/api/genres")
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
        .get("http://localhost:8000/api/categories", {
          /* headers: {
            // nom du header: valeur
            Authorization: `Bearer ${store.getState().user.token}`,
          }, */
        })
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

export default postsMiddleware;

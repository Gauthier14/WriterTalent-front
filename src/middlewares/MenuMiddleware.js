import axios from "axios";
import { GET_GENRES_FROM_API } from "../actions/menu";

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GENRES_FROM_API:
      axios
        .get("http://localhost:8000/api/genres")
        .then((response) => {
          store.dispatch(SetAllUserPostsInState(response.data));
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_CATEGORIES_IN_STATE:
      axios
        .get("http://localhost:3001/favorites", {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          store.dispatch(setRecentPostsInState(response.data.favorites));
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

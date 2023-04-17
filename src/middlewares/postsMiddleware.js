import axios from "axios";
import {
  GET_RECENT_POSTS_FROM_API,
  GET_ALL_USER_POSTS_FROM_API,
  SetAllUserPostsInState,
  setRecentPostsInState,
} from "../actions/posts";

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_USER_POSTS_FROM_API:
      axios
        .get("http://localhost:3001/posts")
        .then((response) => {
          store.dispatch(SetAllUserPostsInState(response.data));
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_RECENT_POSTS_FROM_API:
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

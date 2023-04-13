import axios from "axios";
import {
  GET_RECIPES_FROM_API,
  SetRecipesInState,
  GET_FAVORITE_RECIPES_FROM_API,
  SetFavoriteRecipesInState,
} from "../actions/recipes";

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES_FROM_API:
      axios
        .get("http://localhost:3001/recipes")
        .then((response) => {
          store.dispatch(SetRecipesInState(response.data));
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_FAVORITE_RECIPES_FROM_API:
      axios
        .get(
          "http://localhost:3001/favorites",
          {
            headers:
            {
              // nom du header: valeur
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(SetFavoriteRecipesInState(response.data.favorites));
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

export default recipesMiddleware;

/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import axios from "axios";
import {
  LOGIN_USER,
  getTextFieldLogin,
  GET_USER_INFOS_FROM_API,
  setUserInfosInState,
  getUserInfosFromApi,
} from "../actions/user";
import { manageLocalStorage } from "../selectors/user";
import { setToggleMenu } from "../actions/menu";
// import { getFavoriteRecipesFromApi } from "../actions/posts";

const userMiddleware = (store) => (next) => (action) => {
  // console.log("authenticateMiddleware action reçue : " + action);
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post("http://kyllian-g-server.eddi.cloud:8443/api/login_check", {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          manageLocalStorage("set", "token", response.data.token);
          store.dispatch(getTextFieldLogin("", "email"));
          store.dispatch(getTextFieldLogin("", "password"));
          store.dispatch(setToggleMenu());
          store.dispatch(getUserInfosFromApi());
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_USER_INFOS_FROM_API:
      axios
        .post("http://kyllian-g-server.eddi.cloud:8443/api/user/get")
        .then((response) => {
          store.dispatch(setUserInfosInState(response.data));
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

export default userMiddleware;

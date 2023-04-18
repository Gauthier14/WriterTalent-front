/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import axios from "axios";
import {
  loginSuccess,
  LOGIN_USER,
  getTextFieldLogin,
  GET_ALL_AUTHORS,
  setAllAthorsInState,
} from "../actions/user";
// import { getFavoriteRecipesFromApi } from "../actions/posts";

const userMiddleware = (store) => (next) => (action) => {
  // console.log("authenticateMiddleware action reçue : " + action);
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post("http://localhost:3001/login", {
          email: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          store.dispatch(
            loginSuccess(
              response.data.logged,
              response.data.pseudo,
              response.data.userId,
              response.data.token
            )
          );
          localStorage.setItem("token", response.data.token);
          store.dispatch(getTextFieldLogin("", "email"));
          store.dispatch(getTextFieldLogin("", "password"));
          // store.dispatch(getFavoriteRecipesFromApi());
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.log(error);
        });
      break;
    case GET_ALL_AUTHORS:
      axios
        .post("http://localhost:3001/api/users/authors")
        .then((response) => {
          store.dispatch(setAllAthorsInState([response.data]));
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

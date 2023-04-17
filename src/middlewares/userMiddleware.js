/* eslint-disable quotes */
import axios from "axios";
import { loginSuccess, LOGIN_USER, getTextFieldLogin } from "../actions/user";
import { getFavoriteRecipesFromApi } from "../actions/posts";

const userMiddleware = (store) => (next) => (action) => {
  // console.log('authenticateMiddleware action reçue : ' + action);
  // switch (action.type) {
  //  case LOGIN_USER:
  //    axios
  //      .post("http://localhost:3001/login", {
  //        email: store.getState().user.email,
  //        password: store.getState().user.password,
  //      })
  //      .then((response) => {
  //        store.dispatch(
  //          loginSuccess(
  //            response.data.logged,
  //            response.data.pseudo,
  //            response.data.token
  //          )
  //        );
  //        store.dispatch(getTextFieldLogin("", "email"));
  //        store.dispatch(getTextFieldLogin("", "password"));
  //        store.dispatch(getFavoriteRecipesFromApi());
  //      })
  //      .catch((error) => {
  //        // le serveur nous retourne 401 si les identifiants ne sont pas bons
  //        console.log(error);
  //      });
  //    break;
  //
  //  default:
  //    break;
  // }
  // next(action);
};

export default userMiddleware;

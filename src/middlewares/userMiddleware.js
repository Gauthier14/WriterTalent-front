/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import axios from "axios";
import {
  LOGIN_USER,
  GET_ALL_AUTHORS,
  GET_USER_INFOS_FROM_API,
  getTextFieldLogin,
  getUserInfosFromApi,
  setAllAthorsInState,
} from "../actions/user";
import { manageLocalStorage } from "../selectors/user";
import { setToggleMenu } from "../actions/menu";
import { generateMessage, showMessage } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

const userMiddleware = (store) => (next) => (action) => {
  // console.log("authenticateMiddleware action reçue : " + action);
  const token = manageLocalStorage("get", "token");
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post("http://kyllian-g-server.eddi.cloud:8443/api/login_check", {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          manageLocalStorage("set", "token", response.data.token);
          manageLocalStorage("set", "logged", true);
          store.dispatch(getTextFieldLogin("", "email"));
          store.dispatch(getTextFieldLogin("", "password"));
          store.dispatch(setToggleMenu());
          store.dispatch(getUserInfosFromApi());
        })
        .catch((error) => {
          setMessageInfosInState(
            generateMessage("login"),
            "warning",
            error.message
          );
          showMessage();
        });
      break;
    case GET_USER_INFOS_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/user/get", {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          manageLocalStorage("set", "user_id", response.data.id);
          manageLocalStorage("set", "username", response.data.username);
        })
        .catch((error) => {
          setMessageInfosInState(
            generateMessage("login-infos"),
            "warning",
            error.message
          );
          showMessage();
          setTimeout(() => {
            showMessage();
          }, 5500);
        });
      break;
    case GET_ALL_AUTHORS:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/users/authors")
        .then((response) => {
          store.dispatch(setAllAthorsInState(response.data));
        })
        .catch((error) => {
          setMessageInfosInState(
            generateMessage("all-authors"),
            "warning",
            error.message
          );
          showMessage();
        });
      break;
    default:
      break;
  }
  next(action);
};

export default userMiddleware;

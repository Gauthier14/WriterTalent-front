/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import { redirect } from "react-router-dom";
import axios from "axios";
import { SUBMIT_REGISTER } from "../actions/register";
import { generateMessage, showMessage } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      axios
        .post("http://kyllian-g-server.eddi.cloud:8443/api/user/new", {
          username: store.getState().register.username,
          password: store.getState().register.password,
          email: store.getState().register.email,
        })
        .then((response) => {
          setMessageInfosInState(
            generateMessage("register-success"),
            "success",
            response.message
          );
          showMessage();
          window.setTimeout(() => redirect("/login"), 5500);
        })
        .catch((error) => {
          setMessageInfosInState(
            generateMessage("register-fail"),
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

export default registerMiddleware;

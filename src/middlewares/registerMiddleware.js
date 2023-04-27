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
        .post("http://localhost:8000/api/user/new", {
          username: store.getState().register.username,
          password: store.getState().register.password,
          email: store.getState().register.email,
        })
        .then((response) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("register-success"),
              "success",
              response.message
            )
          );
          showMessage();
          window.setTimeout(() => {
            window.location.href = "/login";
          }, 5500);
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("register-fail"),
              "warning",
              error.message
            )
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

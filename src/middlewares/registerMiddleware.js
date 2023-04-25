/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import { SUBMIT_REGISTER } from "../actions/register";
import { generateMessage, showMessage } from "../selectors/message";
import { setMessageInfos } from "../actions/messages";

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
          console.log(response);
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};

export default registerMiddleware;

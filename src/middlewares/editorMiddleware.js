/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import { SAVE_POST } from "../actions/editor";
import { setMessageInfosInState } from "../actions/messages";
import { generateMessage, showMessage } from "../selectors/message";

const editorMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem("token");
  switch (action.type) {
    case SAVE_POST:
      axios
        .post(
          "http://kyllian-g-server.eddi.cloud:8443/api/post",
          {
            content: action.content,
            title: store.getState().editor.title,
            genre: store.getState().editor.genre,
            categories: store.getState().editor.categories,
          },
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("login-success"),
              "success",
              response.statusText
            )
          );
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              generateMessage("genres"),
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
export default editorMiddleware;

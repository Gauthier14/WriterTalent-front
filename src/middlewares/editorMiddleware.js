/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import { convertToRaw } from "draft-js";
import {
  SAVE_NEW_POST,
  GET_EDIT_POST_FROM_API,
  setEditPostInState,
} from "../actions/editor";
import { showMessages, generateMessages } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

const editorMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem("token");
  switch (action.type) {
    case SAVE_NEW_POST:
      axios
        .post(
          "http://kyllian-g-server.eddi.cloud:8443/api/post",
          {
            content: JSON.stringify(convertToRaw(action.content)),
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
            setMessageInfosInState(generateMessages("post-saved"))
          );
          showMessages();
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(generateMessages("post-not-saved"))
          );
          showMessages();
        });
      break;

    case GET_EDIT_POST_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/post/${action.postId}`
        )
        .then((response) => {
          store.dispatch(setEditPostInState(response.data));
          showMessages();
        })
        .catch((error) => {
          store.dispatch(setMessageInfosInState("post"));
          showMessages();
        });
      break;

    default:
      break;
  }
  next(action);
};
export default editorMiddleware;

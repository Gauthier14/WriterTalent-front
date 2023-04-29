/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */

import axios from "axios";
import { SEND_REVIEW } from "../actions/viewer";
import { showMessages, generateMessages } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

const viewerMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem("token");
  switch (action.type) {
    case SEND_REVIEW:
      axios
        .post(
          `http://kyllian-g-server.eddi.cloud:8443/api/review/post/${action.postId}`,
          {
            content: store.getState().viewer.reviewContent,
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
            setMessageInfosInState(generateMessages("review-sent"))
          );
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
        });
      break;
    default:
      break;
  }
  next(action);
};

export default viewerMiddleware;

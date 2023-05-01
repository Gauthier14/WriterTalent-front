/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */

import axios from "axios";
import { getReadPostFromApi } from "../actions/posts";
import {
  SEND_REVIEW,
  getReviewContent,
  LIKE_POST,
  DISLIKE_POST,
  ADD_POST_TO_READ_LATER_LIST,
  ADD_POST_TO_FAVORITE_LIST,
} from "../actions/viewer";
import { showMessages, generateMessages } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";
import { manageSessionStorage } from "../selectors/user";

const viewerMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage("get", "token");
  switch (action.type) {
    case SEND_REVIEW:
      axios
        .post(
          `http://localhost:8000/api/review/post/${action.postId}`,
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
          console.log(response);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-sent"))
          );
          showMessages();
          store.dispatch(getReadPostFromApi(action.postId));
          store.dispatch(getReviewContent("", "reviewContent"));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
          showMessages();
        });
      break;
    case LIKE_POST:
      axios
        .put(
          `http://localhost:8000/api/user/post/${action.postId}/like`,
          {},
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-sent"))
          );
          showMessages();
          store.dispatch(getReadPostFromApi(action.postId));
          store.dispatch(getReviewContent("", "reviewContent"));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
          showMessages();
        });
      break;
    case DISLIKE_POST:
      axios
        .delete(
          `http://localhost:8000/api/user/post/${action.postId}/like`,
          {},
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-sent"))
          );
          showMessages();
          store.dispatch(getReadPostFromApi(action.postId));
          store.dispatch(getReviewContent("", "reviewContent"));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
          showMessages();
        });
      break;
    case ADD_POST_TO_READ_LATER_LIST:
      axios
        .put(
          `http://localhost:8000/api/user/toread/post/${action.postId}`,
          {},
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-sent"))
          );
          showMessages();
          store.dispatch(getReadPostFromApi(action.postId));
          store.dispatch(getReviewContent("", "reviewContent"));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
          showMessages();
        });
      break;
    case ADD_POST_TO_FAVORITE_LIST:
      axios
        .post(
          `http://localhost:8000/api/user/favorites/post/${action.postId}`,
          {},
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-sent"))
          );
          showMessages();
          store.dispatch(getReadPostFromApi(action.postId));
          store.dispatch(getReviewContent("", "reviewContent"));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("review-not-sent"))
          );
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};

export default viewerMiddleware;

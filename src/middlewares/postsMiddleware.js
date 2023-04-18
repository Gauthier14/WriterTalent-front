/* eslint-disable brace-style */
import axios from "axios";
import {
  GET_RECENT_POSTS_FROM_API,
  GET_ALL_USER_PUBLISHED_POSTS_FROM_API,
  GET_ALL_SAVED_USER_POSTS_FROM_API,
  GET_ALL_FAVORITE_USER_POSTS_FROM_API,
  GET_ALL_READ_LATER_USER_POSTS_FROM_API,
  GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API,
  setAllPostsPerCategoryInState,
  setAllPostsPerGenreInState,
  setAllSavedUserPostsInState,
  setRecentPostsInState,
  setAllUserPublishedPostsInState,
  setAllFavoriteUserPostsInState,
  setAllReadLaterUserPostsInState,
} from "../actions/posts";

const postsMiddleware = (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  const token = localStorage.getItem("token");
  switch (action.type) {
    case GET_ALL_USER_PUBLISHED_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/${userId}/posts/published`, {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          store.dispatch(setAllUserPublishedPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;
    case GET_ALL_READ_LATER_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/${userId}/posts/toread`, {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setAllReadLaterUserPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;
    case GET_ALL_SAVED_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/${userId}/posts/saved`, {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setAllSavedUserPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;

    case GET_RECENT_POSTS_FROM_API:
      axios
        .get("http://localhost:8000/api/", {})
        .then((response) => {
          store.dispatch(setRecentPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;

    case GET_ALL_FAVORITE_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/${userId}/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setAllFavoriteUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API:
      axios
        .get(`http://localhost:8000/api/${action.param}/${action.id}/posts`)
        .then((response) => {
          if (action.param === "category") {
            store.dispatch(setAllPostsPerCategoryInState(response.data));
          } else if (action.param === "genre") {
            store.dispatch(setAllPostsPerGenreInState(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};
export default postsMiddleware;

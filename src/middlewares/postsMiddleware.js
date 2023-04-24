/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from "axios";
import {
  GET_RECENT_POSTS_FROM_API,
  GET_ALL_USER_PUBLISHED_POSTS_FROM_API,
  GET_ALL_SAVED_USER_POSTS_FROM_API,
  GET_ALL_FAVORITE_USER_POSTS_FROM_API,
  GET_ALL_READ_LATER_USER_POSTS_FROM_API,
  GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API,
  GET_ALL_MOST_LIKED_POSTS_FROM_API,
  setAllPostsPerCategoryInState,
  setAllPostsPerGenreInState,
  setAllSavedUserPostsInState,
  setRecentPostsInState,
  setAllUserPublishedPostsInState,
  setAllFavoriteUserPostsInState,
  setAllReadLaterUserPostsInState,
  setAllMostLikedPostsInState,
} from "../actions/posts";

const postsMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem("token");
  switch (action.type) {
    case GET_ALL_USER_PUBLISHED_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/user/${action.userId}/posts/published`
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAllUserPublishedPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;
    case GET_ALL_READ_LATER_USER_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/user/${action.userId}/posts/toread`,
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAllReadLaterUserPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;
    case GET_ALL_SAVED_USER_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/user/${action.userId}/posts/saved`,
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAllSavedUserPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;

    case GET_RECENT_POSTS_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/posts/recent")
        .then((response) => {
          console.log(response.data);
          store.dispatch(setRecentPostsInState(response.data));
        })
        .catch((error) => {
          // the server returns 401 if the identifiers are not correct
          console.log(error);
        });
      break;

    case GET_ALL_FAVORITE_USER_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/user/${action.userId}/favorites`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAllFavoriteUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/${action.param}/${action.id}/posts`
        )
        .then((response) => {
          console.log(response.data);
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
    case GET_ALL_MOST_LIKED_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/${action.param}/${action.id}/posts`
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAllMostLikedPostsInState(response.data));
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

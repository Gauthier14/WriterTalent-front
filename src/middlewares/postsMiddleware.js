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
import { generateMessage, showMessage } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";

function notGetPosts(errorMessage) {
  setMessageInfosInState(generateMessage("posts"), "warning", errorMessage);
  showMessage();
}

const postsMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem("token");
  switch (action.type) {
    case GET_ALL_USER_PUBLISHED_POSTS_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/user/${action.userId}/posts/published`
        )
        .then((response) => {
          store.dispatch(setAllUserPublishedPostsInState(response.data));
        })
        .catch((error) => {
          notGetPosts(error.message);
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
          store.dispatch(setAllReadLaterUserPostsInState(response.data));
        })
        .catch((error) => {
          notGetPosts(error.message);
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
          store.dispatch(setAllSavedUserPostsInState(response.data));
        })
        .catch((error) => {
          notGetPosts(error.message);
        });
      break;

    case GET_RECENT_POSTS_FROM_API:
      axios
        .get("http://kyllian-g-server.eddi.cloud:8443/api/posts/recent")
        .then((response) => {
          store.dispatch(setRecentPostsInState(response.data));
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              "Les écrits les plus récents n'ont pas pu être récupérés, problème de connexion avec l'API",
              "warning",
              error.message
            )
          );
          showMessage();
        });
      break;

    case GET_ALL_FAVORITE_USER_POSTS_FROM_API:
      axios

        .get(`http://kyllian-g-server.eddi.cloud:8443/api/user/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setAllFavoriteUserPostsInState(response.data));
        })
        .catch((error) => {
          notGetPosts(error.message);
        });
      break;

    case GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API:
      axios
        .get(
          `http://kyllian-g-server.eddi.cloud:8443/api/${action.param}/${action.id}/posts`
        )
        .then((response) => {
          if (action.param === "category") {
            store.dispatch(setAllPostsPerCategoryInState(response.data));
          } else if (action.param === "genre") {
            store.dispatch(setAllPostsPerGenreInState(response.data));
          }
        })
        .catch((error) => {
          notGetPosts(error.message);
        });
      break;
    case GET_ALL_MOST_LIKED_POSTS_FROM_API:
      axios
        .get(`http://kyllian-g-server.eddi.cloud:8443/api/posts-most-liked`)
        .then((response) => {
          store.dispatch(setAllMostLikedPostsInState(response.data));
        })
        .catch((error) => {
          store.dispatch(
            setMessageInfosInState(
              "Les écrits les plus appréciés n'ont pas pu être récupérés, problème de connexion avec l'API",
              "warning",
              error.message
            )
          );
          showMessage(12000);
        });
      break;
    default:
      break;
  }
  next(action);
};
export default postsMiddleware;

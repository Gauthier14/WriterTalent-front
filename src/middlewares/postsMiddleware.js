/* eslint-disable no-unused-vars */
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
  GET_READ_POST_FROM_API,
  GET_RANDOM_POST_FROM_API,
  GET_ALL_AWAITING_USER_POSTS_FROM_API,
  setAllPostsPerCategoryInState,
  setAllAwaitingUserPostsInState,
  setAllPostsPerGenreInState,
  setAllSavedUserPostsInState,
  setRecentPostsInState,
  setAllUserPublishedPostsInState,
  setAllFavoriteUserPostsInState,
  setAllReadLaterUserPostsInState,
  setAllMostLikedPostsInState,
  setReadPostInState,
  setPostLoaded,
  setRandomPostInState,
} from "../actions/posts";
import { showMessages, generateMessages } from "../selectors/message";
import { setMessageInfosInState } from "../actions/messages";
import { manageSessionStorage } from "../selectors/user";

const postsMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage("get", "token");
  switch (action.type) {
    case GET_ALL_USER_PUBLISHED_POSTS_FROM_API:
      axios

        .get(`http://localhost:8000/api/user/${action.userId}/posts/published`)

        .then((response) => {
          console.log(response);
          store.dispatch(setAllUserPublishedPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("published-posts"))
          );
          showMessages();
        });
      break;
    case GET_ALL_READ_LATER_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/toread`, {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setAllReadLaterUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("read-later-posts"))
          );
          showMessages();
        });
      break;
    case GET_ALL_SAVED_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/posts/saved`, {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setAllSavedUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("saved-posts"))
          );
          showMessages();
        });
      break;

    case GET_RECENT_POSTS_FROM_API:
      axios
        .get("http://localhost:8000/api/posts/recent")
        .then((response) => {
          console.log(response);
          store.dispatch(setRecentPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("recent-posts"))
          );
          showMessages();
        });
      break;

    case GET_ALL_FAVORITE_USER_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/user/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setAllFavoriteUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("favorite-posts"))
          );
          showMessages();
        });
      break;
    case GET_ALL_AWAITING_USER_POSTS_FROM_API:
      axios

        .get(`http://localhost:8000/api/user/posts/awaiting`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        .then((response) => {
          console.log(response);
          store.dispatch(setAllAwaitingUserPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("awaiting-posts"))
          );
          showMessages();
        });
      break;

    case GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API:
      axios

        .get(`http://localhost:8000/api/${action.param}/${action.id}/posts`)

        .then((response) => {
          console.log(response);
          if (action.param === "category") {
            store.dispatch(setAllPostsPerCategoryInState(response.data));
          } else if (action.param === "genre") {
            store.dispatch(setAllPostsPerGenreInState(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages("posts")));
          showMessages();
        });
      break;
    case GET_ALL_MOST_LIKED_POSTS_FROM_API:
      axios
        .get(`http://localhost:8000/api/posts-most-liked`)
        .then((response) => {
          console.log(response);
          store.dispatch(setAllMostLikedPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages("most-liked-posts"))
          );
          showMessages();
        });
      break;
    case GET_READ_POST_FROM_API:
      axios
        .get(`http://localhost:8000/api/post/${action.postId}`)
        .then((response) => {
          console.log(response);
          store.dispatch(setReadPostInState(response.data));
          store.dispatch(setPostLoaded());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages("post")));
          showMessages();
        });
      break;
    case GET_RANDOM_POST_FROM_API:
      axios
        .get(`http://localhost:8000/api/post-random`)
        .then((response) => {
          console.log(response);
          store.dispatch(setRandomPostInState(response.data));
          store.dispatch(setPostLoaded());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages("post")));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};
export default postsMiddleware;

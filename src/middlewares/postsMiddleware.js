/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from 'axios';
import {
  GET_RECENT_POSTS_FROM_API,
  GET_ALL_USER_PUBLISHED_POSTS_FROM_API,
  GET_ALL_SAVED_USER_POSTS_FROM_API,
  GET_ALL_FAVORITE_USER_POSTS_FROM_API,
  GET_ALL_READ_LATER_USER_POSTS_FROM_API,
  GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API,
  GET_ALL_MOST_LIKED_POSTS_FROM_API,
  GET_READ_POST_FROM_API,
  REMOVE_USER_POST,
  GET_RANDOM_POST_FROM_API,
  INCREMENT_POST_NB_VIEWS,
  GET_INFOS_READ_POST_STATUS,
  setInfosPostToReadInState,
  GET_ALL_AWAITING_USER_POSTS_FROM_API,
  GET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR,
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
  setNumberOfPublishedPostsAuthorInState,
  incrementPostNbViews,
  getInfosPostToReadFromApi,
  getAllFavoriteUserPostsFromApi,
  getAllSavedUserPostsFromApi,
  getAllReadLaterUserPostsFromApi,
  getReadPostFromApi,
  getAllUserPublishedPostsFromApi,
} from '../actions/posts';
import { showMessages, generateMessages } from '../selectors/message';
import { setMessageInfosInState } from '../actions/messages';
import { manageSessionStorage } from '../selectors/user';

const postsMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage('get', 'token');
  const userId = manageSessionStorage('get', 'user_id');
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
            setMessageInfosInState(generateMessages('published-posts', error.message)),
          );
          showMessages();
        });
      break;
    case GET_ALL_READ_LATER_USER_POSTS_FROM_API:
      axios
        .get('http://localhost:8000/api/user/toread', {
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
            setMessageInfosInState(generateMessages('read-later-posts', error.message)),
          );
          showMessages();
        });
      break;
    case GET_ALL_SAVED_USER_POSTS_FROM_API:
      axios
        .get('http://localhost:8000/api/user/posts/saved', {
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
          store.dispatch(setMessageInfosInState(generateMessages('saved-posts', error.message)));
          showMessages();
        });
      break;

    case GET_RECENT_POSTS_FROM_API:
      axios
        .get('http://localhost:8000/api/posts/recent')
        .then((response) => {
          console.log(response);
          store.dispatch(setRecentPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('recent-posts', error.message)));
          showMessages();
        });
      break;

    case GET_ALL_FAVORITE_USER_POSTS_FROM_API:
      axios
        .get('http://localhost:8000/api/user/favorites', {
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
          store.dispatch(setMessageInfosInState(generateMessages('favorite-posts', error.message)));
          showMessages();
        });
      break;
    case GET_ALL_AWAITING_USER_POSTS_FROM_API:
      axios

        .get('http://localhost:8000/api/user/posts/awaiting', {
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
          store.dispatch(setMessageInfosInState(generateMessages('awaiting-posts', error.message)));
          showMessages();
        });
      break;

    case GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API:
      axios

        .get(`http://localhost:8000/api/${action.param}/${action.id}/posts`)

        .then((response) => {
          console.log(response);
          if (action.param === 'category') {
            store.dispatch(setAllPostsPerCategoryInState(response.data));
          } else if (action.param === 'genre') {
            store.dispatch(setAllPostsPerGenreInState(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('posts', error.message)));
          showMessages();
        });
      break;
    case GET_ALL_MOST_LIKED_POSTS_FROM_API:
      axios
        .get('http://localhost:8000/api/posts-most-liked')
        .then((response) => {
          console.log(response);
          store.dispatch(setAllMostLikedPostsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages('most-liked-posts', error.message)),
          );
          showMessages();
        });
      break;
    case GET_READ_POST_FROM_API:
      if (token) {
        axios
          .get(`http://localhost:8000/api/post/${action.postId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
            store.dispatch(setReadPostInState(response.data));
            // store.dispatch(setPostLoaded(true));
            if (token) {
              store.dispatch(getInfosPostToReadFromApi(response.data.id));
            }
          })
          .catch((error) => {
            console.log(error);
            store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
            showMessages();
          })
          .finally(() => {
            // store.dispatch(setPostLoaded(true));
          });
      } else {
        axios
          .get(`http://localhost:8000/api/post/${action.postId}`)
          .then((response) => {
            console.log(response);
            store.dispatch(setReadPostInState(response.data));
            store.dispatch(setPostLoaded());
            if (token) {
              store.dispatch(getInfosPostToReadFromApi(response.data.id));
            }
          })
          .catch((error) => {
            console.log(error);
            store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
            showMessages();
          });
      }

      break;

    case GET_RANDOM_POST_FROM_API:
      axios
        .get('http://localhost:8000/api/post-random')
        .then((response) => {
          console.log(response);
          store.dispatch(setRandomPostInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
          showMessages();
        });
      break;
    case INCREMENT_POST_NB_VIEWS:
      axios
        .put(`http://localhost:8000/api/post/${action.postId}/add-view`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
          showMessages();
        });
      break;
    case GET_INFOS_READ_POST_STATUS:
      axios
        .get(`http://localhost:8000/api/user/post/${action.postId}/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setInfosPostToReadInState(response.data));
        })
        .catch((error) => {
          store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
          showMessages();
        });
      break;
    case GET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR:
      axios
        .get(`http://localhost:8000/api/user/${action.authorId}/nb-published-posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(setNumberOfPublishedPostsAuthorInState(response.data.nbPublishedPosts));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
          showMessages();
        });
      break;
    case REMOVE_USER_POST:
      let apiCall = `http://localhost:8000/api/post/${action.postId}`;
      if (action.postList === 'favorites') {
        apiCall = `http://localhost:8000/api/user/favorites/post/${action.postId}`;
      }
      if (action.postList === 'toread') {
        apiCall = `http://localhost:8000/api/user/toread/post/${action.postId}`;
      }
      axios
        .delete(apiCall, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          switch (action.postList) {
            case 'favorites':
              store.dispatch(getAllFavoriteUserPostsFromApi());
              break;
            case 'saved':
              store.dispatch(getAllSavedUserPostsFromApi());
              break;
            case 'toread':
              store.dispatch(getAllReadLaterUserPostsFromApi());
              break;
            case 'published':
              store.dispatch(getAllUserPublishedPostsFromApi(userId));
              break;
            default:
              break;
          }
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post', error.message)));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};
export default postsMiddleware;

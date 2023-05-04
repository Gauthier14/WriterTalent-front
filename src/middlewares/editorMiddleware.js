import axios from 'axios';
import { convertToRaw } from 'draft-js';
import { SAVE_NEW_POST, UPDATE_POST, ASK_FOR_PUBLICATION } from '../actions/editor';
import { showMessages, generateMessages } from '../selectors/message';
import { setMessageInfosInState } from '../actions/messages';
import { manageSessionStorage } from '../selectors/user';

const editorMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage('get', 'token');
  switch (action.type) {
    case SAVE_NEW_POST:
      axios
        .post(
          'http://localhost:8000/api/post',
          {
            content: JSON.stringify(
              convertToRaw(store.getState().editor.editorState.getCurrentContent()),
            ),
            title: store.getState().editor.title,
            genre: store.getState().editor.genre,
            categories: store.getState().editor.categories,
          },
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(setMessageInfosInState(generateMessages('post-saved')));
          showMessages();
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post-not-saved', error.message)));
          showMessages();
        });
      break;
    case UPDATE_POST:
      axios
        .put(
          `http://localhost:8000/api/post/${action.postId}`,
          {
            content: JSON.stringify(
              convertToRaw(store.getState().editor.editorState.getCurrentContent()),
            ),
            title: store.getState().editor.title,
            genre: store.getState().editor.genre,
            categories: store.getState().editor.categories,
          },
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(setMessageInfosInState(generateMessages('post-saved')));
          showMessages();
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('post-not-saved', error.message)));
          showMessages();
        });
      break;
    case ASK_FOR_PUBLICATION:
      axios
        .put(
          `http://localhost:8000/api/post/${action.postId}/awaiting`,
          {},
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(setMessageInfosInState(generateMessages('post-submited')));
          showMessages();
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            setMessageInfosInState(generateMessages('post-not-submited', error.message)),
          );
          showMessages();
        });
      break;

    default:
      break;
  }
  next(action);
};
export default editorMiddleware;

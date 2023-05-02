/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

import axios from 'axios';
import {
  LOGIN_USER,
  GET_ALL_AUTHORS,
  GET_USER_INFOS_FROM_API,
  getTextFieldLogin,
  getUserInfosFromApi,
  setAllAthorsInState,
  logout,
} from '../actions/user';
import { manageSessionStorage } from '../selectors/user';
import { showMessages, generateMessages } from '../selectors/message';
import { setMessageInfosInState } from '../actions/messages';

const userMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage('get', 'token');
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post('http://kyllian-g-server.eddi.cloud:8443/api/login_check', {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log(response);
          manageSessionStorage('set', 'token', response.data.token);
          manageSessionStorage('set', 'logged', true);
          store.dispatch(getTextFieldLogin('', 'email'));
          store.dispatch(getTextFieldLogin('', 'password'));
          store.dispatch(getUserInfosFromApi());
          store.dispatch(setMessageInfosInState(generateMessages('login-success')));
          showMessages();
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('login-fail')));
          showMessages();
        });
      break;
    case GET_USER_INFOS_FROM_API:
      axios
        .get('http://kyllian-g-server.eddi.cloud:8443/api/user/get', {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          manageSessionStorage('set', 'user_id', response.data.id);
          manageSessionStorage('set', 'username', response.data.username);
          window.setTimeout(() => {
            store.dispatch(logout());
            store.dispatch(setMessageInfosInState(generateMessages('user-disconnect')));
            showMessages();
          }, 3600000);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('login-infos')));
          showMessages();
        });
      break;
    case GET_ALL_AUTHORS:
      axios
        .get('http://kyllian-g-server.eddi.cloud:8443/api/users/authors')
        .then((response) => {
          console.log(response);
          store.dispatch(setAllAthorsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('all-authors')));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};

export default userMiddleware;

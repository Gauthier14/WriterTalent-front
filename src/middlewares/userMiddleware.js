import axios from 'axios';
import { manageSessionStorage, setUserInfosInSession } from '../selectors/user';
import {
  LOGIN_USER,
  GET_ALL_AUTHORS,
  GET_USER_INFOS_FROM_API,
  getUserInfosFromApi,
  setAllAthorsInState,
  loginSuccess,
} from '../actions/user';
import { showMessages, generateMessages } from '../selectors/message';
import { setMessageInfosInState } from '../actions/messages';

const userMiddleware = (store) => (next) => (action) => {
  const token = manageSessionStorage('get', 'token');
  switch (action.type) {
    case LOGIN_USER:
      axios
        .post('http://localhost:8000/api/login_check', {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(loginSuccess(response.data.token));
          store.dispatch(getUserInfosFromApi());
          store.dispatch(setMessageInfosInState(generateMessages('login-success')));
          showMessages();
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('login-fail', error.message)));
          showMessages();
        });
      break;
    case GET_USER_INFOS_FROM_API:
      axios
        .get('http://localhost:8000/api/user/get', {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUserInfosInSession(response.data.id, response.data.username, response.data.roles[0]);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('login-infos', error.message)));
          showMessages();
        });
      break;
    case GET_ALL_AUTHORS:
      axios
        .get('http://localhost:8000/api/users/authors')
        .then((response) => {
          console.log(response);
          store.dispatch(setAllAthorsInState(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('all-authors', error.message)));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};

export default userMiddleware;

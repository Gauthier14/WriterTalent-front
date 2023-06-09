/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable brace-style */
import axios from 'axios';
import { SUBMIT_REGISTER } from '../actions/register';
import { showMessages, generateMessages } from '../selectors/message';
import { setMessageInfosInState } from '../actions/messages';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      axios
        .post('http://localhost:8000/api/user/new', {
          username: store.getState().register.username,
          password: store.getState().register.password,
          email: store.getState().register.email,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setMessageInfosInState(generateMessages('register-success')));
          showMessages();
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setMessageInfosInState(generateMessages('register-fail', error.message)));
          showMessages();
        });
      break;
    default:
      break;
  }
  next(action);
};

export default registerMiddleware;

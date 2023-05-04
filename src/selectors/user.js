/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { Navigate } from 'react-router';
/**
 *
 * @param {String} action Use 'set' to set item and 'remove' to remove item
 * @param {String} key item key in localstorage
 * @param {Any} value value which is assign to key in localstorage
 */
export const manageSessionStorage = (action = null, key, value = null) => {
  switch (action) {
    case 'set':
      sessionStorage.setItem(key, value);
      break;
    case 'get':
      return sessionStorage.getItem(key);
    case 'remove':
      sessionStorage.removeItem(key);
      break;
    default:
      break;
  }
};

let hasReturnedTrue = false;

export function returnTrueOnce() {
  if (!hasReturnedTrue) {
    hasReturnedTrue = true;
    return true;
  }
  return false;
}

export const redirection = (link) => {
  <Navigate to={link} />;
};

export const disconnectUser = () => {
  manageSessionStorage('remove', 'token');
  manageSessionStorage('remove', 'user_id');
  manageSessionStorage('remove', 'username');
  manageSessionStorage('remove', 'logged');
  manageSessionStorage('remove', 'session-start');
  manageSessionStorage('remove', 'role');
};

export const setUserInfosInSession = (userId, username, role) => {
  manageSessionStorage('set', 'user_id', userId);
  manageSessionStorage('set', 'username', username);
  manageSessionStorage('set', 'role', role);
};

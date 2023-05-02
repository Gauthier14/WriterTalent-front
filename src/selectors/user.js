/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
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

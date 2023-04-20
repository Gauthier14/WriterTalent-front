/* eslint-disable import/prefer-default-export */
/**
 *
 * @param {String} action Use 'set' to set item and 'remove' to remove item
 * @param {String} key item key in localstorage
 * @param {Any} value value which is assign to key in localstorage
 */
export const manageLocalStorage = (action = null, key, value = null) => {
  switch (action) {
    case "set":
      localStorage.setItem(key, value);
      break;
    case "get":
      return localStorage.getItem(key);
    case "remove":
      localStorage.removeItem(key);
      break;
    default:
      break;
  }
};

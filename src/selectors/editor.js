/* eslint-disable brace-style */
/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */

/**
 * @param {String} Email - Email of new user to register a new account
 * @return {Boolean}
 */

export const filterArray = (item, array) => {
  if (!array.includes(item)) {
    array.push(item);
  } else {
    array.splice(array.indexOf(item), 1);
  }
  return array;
};

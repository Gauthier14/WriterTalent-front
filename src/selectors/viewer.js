/* eslint-disable brace-style */
/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */

/**
 * @param {String} Date - Email of new user to register a new account
 * @return {Boolean}
 */

export const convertStringDate = (stringDate) => {
  const date = new Date(Date.parse(stringDate));
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 return date.toLocaleDateString('fr-FR', options)
};

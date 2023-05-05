/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
/**
 * @param {String} Email - Email of new user to register a new account
 * @return {Boolean}
 */
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

/**
 * @param {String} Password - Email of new user to register a new account
 * @return {Boolean}
 */
export const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-])[a-zA-Z\d!@#$%^&*()_+-]{10,}$/;
  return regex.test(password);
};

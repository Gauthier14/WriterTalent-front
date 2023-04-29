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

export const toolbarParams = {
  options: [
    "inline",
    "blockType",
    "fontSize",
    "fontFamily",
    "list",
    "textAlign",
    "colorPicker",
    "link",
    "emoji",
    "remove",
    "history",
  ],
  inline: { inDropdown: true },
  list: { inDropdown: true },
  textAlign: { inDropdown: true },
  link: { inDropdown: true },
  history: { inDropdown: false },
};

export const getCategoriesIds = (categories) => {
  const arrayOfCategoriesIds = [];
  categories.map((category) => arrayOfCategoriesIds.push(category.id));
  return arrayOfCategoriesIds;
};

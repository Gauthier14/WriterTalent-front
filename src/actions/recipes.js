/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_RECIPES_FROM_API = "GET_RECIPES_FROM_API";
export const SET_RECIPES_IN_STATE = "SET_RECIPES_IN_STATE";
export const GET_FAVORITE_RECIPES_FROM_API = "GET_FAVORITE_RECIPES_FROM_API";
export const SET_FAVORITE_RECIPES_IN_STATE = "SET_FAVORITE_RECIPES_IN_STATE";

// --- action creators ---
export const getRecipesFromApi = () => ({
  type: GET_RECIPES_FROM_API,
});

/**
 * @param {Array} Recipes - List of All recipes
 */
export const SetRecipesInState = (recipeList) => ({
  type: SET_RECIPES_IN_STATE,
  recipes: recipeList,
});

export const getFavoriteRecipesFromApi = () => ({
  type: GET_FAVORITE_RECIPES_FROM_API,
});

/**
 * @param {Array} Recipes - List of user favorites recipes
 */
export const SetFavoriteRecipesInState = (favoriteRecipes) => ({
  type: SET_FAVORITE_RECIPES_IN_STATE,
  favoriteRecipes: favoriteRecipes,
});

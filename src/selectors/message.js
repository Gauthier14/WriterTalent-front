/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} recipes - List of recipes
 * @return {string} - Welcome Message
 */
export function welcomeMessage(recipes) {
  let message;
  if (recipes.length === 0) {
    message = `Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes`;
  }
  else if (recipes.length === 1) {
    message = `Bienvenue sur oRecipes, découvre notre recette`;
  }
  else if (recipes.length > 1) {
    message = `Bienvenue sur oRecipes, découvre nos ${recipes.length} recettes`;
  }
  return message;
}

export function favoritesMessage(recipes) {
  let message;
  if (recipes.length === 0) {
    message = `Vous n'avez pas de recettes favorites`;
  }
  else if (recipes.length === 1) {
    message = `Vous avez une recette favorite`;
  }
  else if (recipes.length > 1) {
    message = `Vous avez ${recipes.length} recettes favorites`;
  }
  return message;
}

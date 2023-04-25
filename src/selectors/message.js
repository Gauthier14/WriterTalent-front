/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/**
 * @param {Number} Delay - Delay to show message
 */
export function showMessage(delay = 5000) {
  document.querySelector(".message").style.display = "block";
  window.setTimeout(() => {
    document.querySelector(".message").style.display = "none";
  }, delay);
}

/**
 * @param {String} dataType - Type of data sending or receving (login, login-infos, all-authors)
 * @return {void}
 */
export function generateMessage(dataType) {
  let message = "";
  switch (dataType) {
    case "login":
      message = "Connexion impossible, veuillez réessayer !";
      break;
    case "login-infos":
      message =
        "Nous n'avons pas pus récupérer vos informations de connexion !";
      break;
    case "all-authors":
      message =
        "La liste des auteurs n'a pas pu être récupérée, Problème de connexion avec L'API !";
      break;
    case "genres":
      message =
        "La liste des genres n'a pas pu être récupérée, Problème de connexion avec L'API !";
      break;
    case "univers":
      message =
        "La liste des auniversn'a pas pu être récupérée, Problème de connexion avec L'API !";
      break;
    default:
      break;
  }
  return message;
}

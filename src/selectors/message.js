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
 * @param {String} dataType - Type of data sending or receving (login-fail,
 * login-success, login-infos, register-fail, all-authors)
 * @return {void}
 */
export function generateMessage(dataType) {
  let message = "";
  switch (dataType) {
    case "login-success":
      // console.log("Vous êtes à présent connecté !");
      message = "Vous êtes à présent connecté !";
      break;
    case "login-fail":
      message = "Connexion impossible, veuillez réessayer !";
      break;
    case "login-infos":
      message =
        "Nous n'avons pas pu récupérer vos informations de connexion !";
      break;
    case "login-input-empty":
      message = "Vérifiez que tous les champs soient remplis";
      break;
    case "register-success":
      message =
        "Votre compte a été créé avec succès. Vous allez être redirigé vers la page de connexion";
      break;
    case "register-fail":
      message =
        "Votre compte n'a pas été créé, veuillez vérifiez les information saisies, puis réessayez !";
      break;
    case "register-input-empty":
      message =
        "Vérifiez que tous les champs sont remplis et avec les bonnes informations !";
      break;
    case "all-authors":
      message =
        "La liste des auteurs n'a pas pu être récupérée. Problème de connexion avec L'API ! Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    case "genres":
      message =
        "La liste des genres n'a pas pu être récupérée. Problème de connexion avec L'API ! Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    case "univers":
      message =
        "La liste des univers n'a pas pu être récupérée. Problème de connexion avec L'API ! Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    case "posts":
      message =
        "Nous n'avons pas pu récupérer les écrits, problème de connexion au serveur. Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    case "post":
      message =
        "Nous n'avons pas pu récupérer l'écrit, problème de connexion au serveur. Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    case "review-sent":
      message =
        "Votre commentaire a été pris en compte. Vous pouvez rafraîchir la page pour la mettre à jour. ";
      break;
    case "review-not-sent":
      message =
        "Votre commentaire n'a pas été créé, problème de connexion au serveur ! Si le problème persite rendez-vous sur l'onglet 'Nous contacter' en bas de la page.";
      break;
    default:
      break;
  }
  return message;
}

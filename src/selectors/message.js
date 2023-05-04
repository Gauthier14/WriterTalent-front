/**
 * @param {Number} Delay - miliseconds - show and hide messages after a delay
 */
export function showMessages(delay = 5000) {
  document.querySelector('.messages').style.display = 'block';
  window.setTimeout(() => {
    document.querySelector('.messages').style.display = 'none';
  }, delay);
}

/**
 * @param {String} dataType - Type of data sending or receving (login-fail,
 * login-success, login-infos, register-fail, all-authors)
 * @return {void}
 */
export function generateMessages(dataType, serverMsg = 'Message') {
  const message = {};
  if (serverMsg === 'Network Error') {
    message.serverMsg = serverMsg;
    message.text = 'Problème de connexion au serveur... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
    message.class = 'warning';
    return message;
  }
  if (serverMsg === 'Unauthorized') {
    message.serverMsg = serverMsg;
    message.text = 'Vous n\'êtes pas autorisé à effectuer cette action... Veuillez vérifier que vous soyez bien connecté ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
    message.class = 'warning';
    return message;
  }
  if (serverMsg === 'Request failed with status code 401') {
    message.serverMsg = serverMsg;
    message.text = 'Identifiants invalides ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
    message.class = 'warning';
    return message;
  }
  switch (dataType) {
    case 'login-success':
      message.serverMsg = serverMsg;
      message.text = 'Vous êtes à présent connecté !';
      message.class = 'success';
      break;
    case 'user-disconnect':
      message.serverMsg = serverMsg;
      message.text = 'Le temps de la session de connexion est écoulé, veuillez vous reconnecter ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'login-fail':
      message.serverMsg = serverMsg;
      message.text = 'Connexion impossible ! Veuillez réessayer ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'login-infos':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos informations de connexion... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'login-input-empty':
      message.serverMsg = serverMsg;
      message.text = 'Vérifiez que tous les champs soient remplis... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'review-content-empty':
      message.serverMsg = serverMsg;
      message.text = 'Votre commentaire est vide... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'not-connected-viewer':
      message.serverMsg = serverMsg;
      message.text = 'Vous devez être connecté pour effectuer cette action... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'register-success':
      message.serverMsg = serverMsg;
      message.text = 'Votre compte a été créé avec succès ! Vous allez être redirigé vers la page de connexion.';
      message.class = 'success';
      break;
    case 'register-fail':
      message.serverMsg = serverMsg;
      message.text = 'Votre compte n\'a pas été créé... Veuillez vérifiez les informations saisies, puis réessayez ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'register-input-empty':
      message.serverMsg = serverMsg;
      message.text = 'Vérifiez que tous les champs soient remplis et avec les bonnes valeurs... Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'all-authors':
      message.serverMsg = serverMsg;
      message.text = 'La liste des auteurs n\'a pas pu être récupérée... Problème de connexion avec L\'API ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'genres':
      message.serverMsg = serverMsg;
      message.text = 'La liste des genres n\'a pas pu être récupérée... Problème de connexion avec L\'API ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'univers':
      message.serverMsg = serverMsg;
      message.text = 'La liste des univers n\'a pas pu être récupérée... Problème de connexion avec L\'API ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer les écrits... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'my-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'favorite-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits favoris... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'awaiting-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits en attente de publication... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'recent-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer les nouveautés... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'published-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits publiés... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'most-liked-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer les écrits les plus aimés... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'read-later-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits à lire plus tard... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'saved-posts':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer vos écrits sauvegardés... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'post':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu récupérer l\'écrit... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'review-sent':
      message.serverMsg = serverMsg;
      message.text = 'Votre commentaire a été pris en compte !';
      message.class = 'success';
      break;
    case 'review-not-sent':
      message.serverMsg = serverMsg;
      message.text = 'Votre commentaire n\'a pas été créé... Problème de connexion au serveur ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    case 'post-saved':
      message.serverMsg = serverMsg;
      message.text = 'Votre écrit a été sauvegardé !';
      message.class = 'success';
      break;
    case 'post-not-saved':
      message.serverMsg = serverMsg;
      message.text = 'Nous n\'avons pas pu sauvegarder votre écrit ! Si le problème persiste, rendez-vous sur la page "Nous contacter" !';
      message.class = 'warning';
      break;
    default:
      break;
  }
  return message;
}

export const checkRegisterSuccess = (messages) => messages.find((msg) => {
  if (
    msg.text
      === 'Votre compte a été créé avec succès ! Vous allez être redirigé vers la page de connexion.'
  ) {
    return true;
  }
  return false;
});

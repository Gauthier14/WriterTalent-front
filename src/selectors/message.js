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
    message.text = 'Problème de connexion au serveur';
    message.class = 'warning';
    return message;
  }
  if (serverMsg === 'Unauthorized') {
    message.serverMsg = serverMsg;
    message.text = "Vous n'êtes pas autorisé à effectuer cette action, veuillez vérifier que vous êtes bien connecté !";
    message.class = 'warning';
    return message;
  }
  if (serverMsg === 'Request failed with status code 401') {
    message.serverMsg = serverMsg;
    message.text = 'Identifiants invalides !';
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
      message.text = 'Le temps de la session de connexion est écoulé, veuillez vous reconnecter !';
      message.class = 'warning';
      break;
    case 'login-fail':
      message.serverMsg = serverMsg;
      message.text = 'Connexion impossible, veuillez réessayer !';
      message.class = 'warning';
      break;
    case 'login-infos':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pus récupérer vos informations de connexion !";
      message.class = 'warning';
      break;
    case 'login-input-empty':
      message.serverMsg = serverMsg;
      message.text = 'Vérifiez que tous les champs soient remplis';
      message.class = 'warning';
      break;
    case 'review-content-empty':
      message.serverMsg = serverMsg;
      message.text = 'Votre commentaire est vide';
      message.class = 'warning';
      break;
    case 'not-connected-viewer':
      message.serverMsg = serverMsg;
      message.text = 'Vous devez être connecté pour effectuer cette action';
      message.class = 'warning';
      break;
    case 'register-success':
      message.serverMsg = serverMsg;
      message.text = 'Votre compte a été créé avec succès, vous allez être redirigé vers la page de connexion';
      message.class = 'success';
      break;
    case 'register-fail':
      message.serverMsg = serverMsg;
      message.text = "Votre compte n'a pas été créé, veuillez vérifiez les information saisies, puis réessayez !";
      message.class = 'warning';
      break;
    case 'register-input-empty':
      message.serverMsg = serverMsg;
      message.text = 'Vérifiez que tous les champs sont remplis et avec les bonnes valeurs';
      message.class = 'warning';
      break;
    case 'all-authors':
      message.serverMsg = serverMsg;
      message.text = "La liste des auteurs n'a pas pu être récupérée, Problème de connexion avec L'API !";
      message.class = 'warning';
      break;
    case 'genres':
      message.serverMsg = serverMsg;
      message.text = "La liste des genres n'a pas pu être récupérée, Problème de connexion avec L'API !";
      message.class = 'warning';
      break;
    case 'univers':
      message.serverMsg = serverMsg;
      message.text = "La liste des univers n'a pas pu être récupérée, Problème de connexion avec L'API !";
      message.class = 'warning';
      break;
    case 'posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer les écrits, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'my-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'favorite-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits favoris, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'awaiting-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits en attente de publication, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'recent-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer les nouveautés, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'published-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits publiés, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'most-liked-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer les écrits les plus aimés, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'read-later-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits à lire plus tard, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'saved-posts':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer vos écrits sauvegardés, problème de connexion au serveur";
      message.class = 'warning';

      break;
    case 'post':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pu récupérer l'écrit, problème de connexion au serveur";
      message.class = 'warning';
      break;
    case 'review-sent':
      message.serverMsg = serverMsg;
      message.text = 'Votre commentaire a été pris en compte.';
      message.class = 'success';
      break;
    case 'review-not-sent':
      message.serverMsg = serverMsg;
      message.text = "Votre commentaire n'a pas été créé, problème de connexion au serveur !.";
      message.class = 'warning';
      break;
    case 'post-saved':
      message.serverMsg = serverMsg;
      message.text = 'Votre écrit a été sauvegardé.';
      message.class = 'success';
      break;
    case 'post-not-saved':
      message.serverMsg = serverMsg;
      message.text = "Nous n'avons pas pus sauvegarder votre écrit !.";
      message.class = 'warning';
      break;
    default:
      break;
  }
  return message;
}

/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import Field from './Field/Field';

import './LoginForm.scss';
import { setToggleMenu } from '../../actions/menu';

const LoginForm = ({ email, password, changeField, handleLogin }) => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedPassword = DOMPurify.sanitize(password);
    handleLogin(sanitizedEmail, sanitizedPassword);
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field name="email" placeholder="Adresse Email" onChange={changeField} value={email} />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <button type="submit" className="login-form-button">
          Se connecter
        </button>
        <button type="submit" className="login-form-button">
          <Link
            to="/register"
            onClick={() => {
              dispatch(setToggleMenu());
            }}
          >
            Pas de compte ?
          </Link>
        </button>

        {/* <button type="submit" className="login-form-button">
          Identifiants oubliés
        </button> */}
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  /** contenu du champ e-mail */
  email: PropTypes.string.isRequired,
  /** contenu du champ password */
  password: PropTypes.string.isRequired,
  /** Traitement déclenché quand on saisit un caractère dans l'un des deux champs. Paramètres :
   * - newValue Nouvelle valeur du champ
   * - identifier Identifiant du champ : 'email' ou 'password'
   */
  changeField: PropTypes.func.isRequired,
  /** Traitement déclenché quand on clique sur le bouton "OK"
   * (quand on est en mode non connecté) */
  handleLogin: PropTypes.func.isRequired,
  /** Traitement déclenché quand on clique sur le bouton "Déconnexion" (quand on est en
   * mode connecté) */
  // handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et
   * le mode pas connecté (affichage du formulaire) */
  // isLogged: PropTypes.bool,
  // /** Message affiché quand on est en mode connecté */
  // loggedMessage: PropTypes.string,
};

/* LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: "Connecté",
}; */

export default LoginForm;

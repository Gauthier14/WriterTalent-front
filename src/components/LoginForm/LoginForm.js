import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Field from "./Field/Field";

import "./LoginForm.scss";

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <form
        autoComplete="off"
        className="login-form-element"
        onSubmit={handleSubmit}
      >
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          // value={password}
        />
        <button type="submit" className="login-form-button">
          Se connecter
        </button>
        <Button>
          <Link to="/register">S'inscrire</Link>
        </Button>
        <button type="submit" className="login-form-button">
          Pas de compte ?
        </button>

        <button type="submit" className="login-form-button">
          Identifiants oubliés
        </button>
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
  handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et
   * le mode pas connecté (affichage du formulaire) */
  isLogged: PropTypes.bool,
  // /** Message affiché quand on est en mode connecté */
  // loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: "Connecté",
};

export default LoginForm;

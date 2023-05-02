<<<<<<< HEAD
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import PasswordChecklist from 'react-password-checklist';
import { useDispatch, useSelector } from 'react-redux';
import './Register.scss';
import { getTextFieldRegister, submitRegister, togglePasswordShown } from '../../actions/register';
import { validateEmail, validatePassword } from '../../selectors/register';
import { showMessages, generateMessages } from '../../selectors/message';
import { setMessageInfosInState } from '../../actions/messages';
=======
/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import PasswordChecklist from "react-password-checklist";
import { useDispatch, useSelector } from "react-redux";
import "./Register.scss";
import {
  getTextFieldRegister,
  submitRegister,
  togglePasswordShown,
} from "../../actions/register";
import { validateEmail, validatePassword } from "../../selectors/register";
import { showMessages, generateMessages } from "../../selectors/message";
import { setMessageInfosInState } from "../../actions/messages";
import DOMPurify from 'dompurify';
>>>>>>> security

function Register() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const isValidPassword = validatePassword(password);
  const passwordAgain = useSelector((state) => state.register.passwordAgain);
  const passwordShown = useSelector((state) => state.register.passwordShown);
  const passwordAgainShown = useSelector((state) => state.register.passwordAgainShown);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateEmail(email)
      && isValidPassword
      && passwordAgain !== ''
      && password !== ''
      && password === passwordAgain
      && username !== ''
    ) {
      dispatch(submitRegister());
    }
    else {
      dispatch(setMessageInfosInState(generateMessages('register-input-empty')));
      showMessages();
    }
  };

  return (
    <main className="register">
      <section className="form-container">
        <h2>FORMULAIRE D'INSCRIPTION</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nom d'utilisateur :
          <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            id="username"
            name="username"
            required
            value={DOMPurify.sanitize(username)}
            onChange={(event) => {
              dispatch(getTextFieldRegister(event.target.value, "username"));
            }}
          />
            </label>
          <label htmlFor="email">Email :
          <input
            type="email"
            placeholder="Entrez une adresse mail valide"
            id="email"
            name="email"
            required
            value={DOMPurify.sanitize(email)}
            onChange={(event) => {
              dispatch(getTextFieldRegister(event.target.value, "email"));
            }}
          />
          </label>
          <div className="input-field">
          <label htmlFor="password">Mot de passe :
            <input
              type="text"
              placeholder="Entrez votre nom d'utilisateur"
              id="username"
              name="username"
              required
              value={username}
              onChange={(event) => {
                dispatch(getTextFieldRegister(event.target.value, 'username'));
              }}
            />
          </label>

          <label htmlFor="email">
            Email :
            <input
              type="email"
              placeholder="Entrez une adresse mail valide"
              id="email"
              name="email"
              required
              value={email}
              onChange={(event) => {
                dispatch(getTextFieldRegister(event.target.value, 'email'));
              }}
            />
          </label>

          <label htmlFor="password">
            Mot de passe :
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="Entrez votre mot de passe"
              id="password"
              name="password"
              required
              value={password}
              onChange={(event) => {
                dispatch(getTextFieldRegister(DOMPurify.sanitize(event.target.value), "password"));
              }}
            />
            <div className="input-field">
              {passwordShown ? (
                <AiFillEye
                  onClick={() => {
                    dispatch(togglePasswordShown('passwordShown'));
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    dispatch(togglePasswordShown('passwordShown'));
                  }}
                />
              )}
            </div>
          </label>

          <label htmlFor="passwordAgain">
            Confirmez votre mot de passe :
            <input
              type={passwordAgainShown ? 'text' : 'password'}
              placeholder="Confirmez votre mot de passe"
              id="passwordAgain"
              name="passwordAgain"
              required
              value={passwordAgain}
              onChange={(event) => {
                dispatch(getTextFieldRegister(event.target.value, 'passwordAgain'));
              }}
            />
            <div className="input-field">
              {passwordAgainShown ? (
                <AiFillEye
                  onClick={() => {
                    dispatch(togglePasswordShown('passwordAgainShown'));
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    dispatch(togglePasswordShown('passwordAgainShown'));
                  }}
                />
              )}
            </div>
          </label>

          <PasswordChecklist
            rules={['minLength', 'lowercase', 'capital', 'number', 'specialChar', 'match']}
            minLength={10}
            value={password}
            valueAgain={passwordAgain}
            messages={{
              minLength: 'Doit contenir au moins 10 caractères.',
              lowercase: 'Doit contenir au moins une lettre minuscules',
              capital: 'Doit contenir au moins une lettre majuscule.',
              number: 'Doit contenir au moins un chiffre.',
              specialChar: 'Doit contenir au moins un caractère spécial.',
              match: 'Les critères sont respectés.',
            }}
          />
          <button className="submit" type="submit">
            S'inscrire
          </button>
        </form>
      </section>
    </main>
  );
}

export default Register;

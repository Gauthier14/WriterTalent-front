import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import PasswordChecklist from 'react-password-checklist';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import './Register.scss';
import { getTextFieldRegister, submitRegister, togglePasswordShown } from '../../actions/register';
import { validateEmail, validatePassword } from '../../selectors/register';
import { showMessages, generateMessages } from '../../selectors/message';
import { setMessageInfosInState } from '../../actions/messages';

function Register() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const isValidPassword = validatePassword(password);
  const showPassword = useSelector((state) => state.register.showPassword);
  const passwordAgain = useSelector((state) => state.register.passwordAgain);
  const showPasswordAgain = useSelector((state) => state.register.showPasswordAgain);

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
          <label htmlFor="username">
            Nom d'utilisateur :
            <input
              type="text"
              placeholder="Entrez votre nom d'utilisateur"
              id="username"
              name="username"
              required
              value={DOMPurify.sanitize(username)}
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
              value={DOMPurify.sanitize(email)}
              onChange={(event) => {
                dispatch(getTextFieldRegister(event.target.value, 'email'));
              }}
            />
          </label>
          <label htmlFor="password">
            Mot de passe :
            <div className="input-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Entrez votre mot de passe"
                id="password"
                name="password"
                required
                value={password}
                onChange={(event) => {
                  dispatch(getTextFieldRegister(event.target.value, 'password'));
                }}
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => {
                    dispatch(togglePasswordShown('showPassword'));
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    dispatch(togglePasswordShown('showPassword'));
                  }}
                />
              )}
            </div>
          </label>

          <label htmlFor="passwordAgain">
            Confirmez votre mot de passe :
            <div className="input-field">
              <input
                type={showPasswordAgain ? 'text' : 'password'}
                placeholder="Confirmez votre mot de passe"
                id="passwordAgain"
                name="passwordAgain"
                required
                value={passwordAgain}
                onChange={(event) => {
                  dispatch(getTextFieldRegister(event.target.value, 'passwordAgain'));
                }}
              />
              {showPasswordAgain ? (
                <AiFillEye
                  onClick={() => {
                    dispatch(togglePasswordShown('showPasswordAgain'));
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    dispatch(togglePasswordShown('showPasswordAgain'));
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

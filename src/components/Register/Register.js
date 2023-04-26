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
import Message from "../Message/Message";
import { generateMessage, showMessage } from "../../selectors/message";
import { setMessageInfosInState } from "../../actions/messages";

function Register() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.register.username);
  const email = useSelector((state) => state.register.email);
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);
  const password = useSelector((state) => state.register.password);
  const isValidPassword = validatePassword(password);
  const passwordAgain = useSelector((state) => state.register.passwordAgain);
  const passwordShown = useSelector((state) => state.register.passwordShown);
  const passwordAgainShown = useSelector(
    (state) => state.register.passwordAgainShown
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateEmail(email) &&
      isValidPassword &&
      passwordAgain !== "" &&
      password !== "" &&
      password === passwordAgain &&
      username !== ""
    ) {
      console.log("inscription soumise");
      dispatch(submitRegister());
    } else {
      console.log("champs vide ou incorrect");
      dispatch(
        setMessageInfosInState(
          generateMessage("register-input-empty"),
          "danger",
          "Erreur de saisie"
        )
      );
      showMessage();
    }
  };

  return (
    <main className="register">
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
      <section className="form-container">
        <h2>FORMULAIRE D'INSCRIPTION</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            id="username"
            name="username"
            required
            value={username}
            onChange={(event) => {
              dispatch(getTextFieldRegister(event.target.value, "username"));
            }}
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="Entrez une adresse mail valide"
            id="email"
            name="email"
            required
            value={email}
            onChange={(event) => {
              dispatch(getTextFieldRegister(event.target.value, "email"));
            }}
          />

          <label htmlFor="password">Mot de passe :</label>
          <div className="input-field">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              id="password"
              name="password"
              required
              value={password}
              onChange={(event) => {
                dispatch(getTextFieldRegister(event.target.value, "password"));
              }}
            />
            {passwordShown ? (
              <AiFillEye
                onClick={() => {
                  dispatch(togglePasswordShown("passwordShown"));
                }}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  dispatch(togglePasswordShown("passwordShown"));
                }}
              />
            )}
          </div>
          <label htmlFor="passwordAgain">Confirmez votre mot de passe :</label>
          <div className="input-field">
            <input
              type={passwordAgainShown ? "text" : "password"}
              placeholder="Confirmez votre mot de passe"
              id="passwordAgain"
              name="passwordAgain"
              required
              value={passwordAgain}
              onChange={(event) => {
                dispatch(
                  getTextFieldRegister(event.target.value, "passwordAgain")
                );
              }}
            />
            {passwordAgainShown ? (
              <AiFillEye
                onClick={() => {
                  dispatch(togglePasswordShown("passwordAgainShown"));
                }}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  dispatch(togglePasswordShown("passwordAgainShown"));
                }}
              />
            )}
          </div>
          <PasswordChecklist
            rules={[
              "minLength",
              "lowercase",
              "capital",
              "number",
              "specialChar",
              "match",
            ]}
            minLength={10}
            value={password}
            valueAgain={passwordAgain}
            messages={{
              minLength: "Doit contenir au moins 10 caractères.",
              lowercase: "Doit contenir au moins une lettre minuscules",
              capital: "Doit contenir au moins une lettre majuscule.",
              number: "Doit contenir au moins un chiffre.",
              specialChar: "Doit contenir au moins un caractère spécial.",
              match: "Les critères sont respectés.",
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

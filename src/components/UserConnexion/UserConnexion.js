/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import PasswordChecklist from "react-password-checklist";
import { useDispatch, useSelector } from "react-redux";
import "./UserConnexion.scss";
// import {
//   getTextFieldRegister,
//   submitRegister,
//   togglePasswordShown,
// } from "../../actions/register";
import { validateEmail, validatePassword } from "../../selectors/register";
import Button from "../Button/Button";

function UserConnexion() {
  // const dispatch = useDispatch();
  // const username = useSelector((state) => state.register.username);
  // const email = useSelector((state) => state.register.email);
  // const isValidEmail = validateEmail(email);

  // const password = useSelector((state) => state.register.password);
  // const isValidPassword = validatePassword(password);
  // const passwordAgain = useSelector((state) => state.register.passwordAgain);
  // const passwordShown = useSelector((state) => state.register.passwordShown);
  // const passwordAgainShown = useSelector(
  //   (state) => state.register.passwordAgainShown
  // );

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     isValidEmail &&
  //     isValidPassword &&
  //     passwordAgain !== "" &&
  //     password !== "" &&
  //     password === passwordAgain &&
  //     username !== ""
  //   ) {
  //     dispatch(submitRegister());
  //   } else {
  //     console.log(
  //       "Vérifiez que tous les champs sont remplis",
  //       isValidPassword,
  //       password
  //     );
  //   }
  // };

  return (
    <main className="user-connexion">
      <section className="form-container">
        <h2>FORMULAIRE DE CONNECTION</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            id="username"
            name="username"
            required
            // value={username}
            // onChange={(event) => {
            //   dispatch(getTextFieldRegister(event.target.value, "username"));
            // }}
          />

          <label htmlFor="password">Mot de passe :</label>

          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            id="password"
            name="password"
            required
            // value={password}
            // onChange={(event) => {
            //   dispatch(getTextFieldRegister(event.target.value, "password"));
            // }}
          />
          {/* {passwordShown ? (
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
            )} */}
          <div className="login-buttons">
            <Button label="Se connecter" />
            <Button label="Mot de passe oublié ?" />
            <Button label="Pas de compte ?" link="/register" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default UserConnexion;

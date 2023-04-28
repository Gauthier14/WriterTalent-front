/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */

import "./UserConnexion.scss";
// import {
//   getTextFieldRegister,
//   submitRegister,
//   togglePasswordShown,
// } from "../../actions/register";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import { getTextFieldLogin, loginUser } from "../../actions/user";
import { generateMessage, showMessage } from "../../selectors/message";
import { setMessageInfosInState } from "../../actions/messages";

function UserConnexion() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = localStorage.getItem("logged");

  return (
    <main className="user-connexion">
      <section className="form-container">
        <h2>
          FORMULAIRE <br />
          DE <br />
          CONNEXION
        </h2>
        <LoginForm
          changeField={(inputValue, inputName) => {
            dispatch(getTextFieldLogin(inputValue, inputName));
          }}
          email={email}
          password={password}
          handleLogin={() => {
            if (email !== "" && password !== "") {
              dispatch(loginUser());
            } else {
              dispatch(
                setMessageInfosInState(
                  generateMessage("login-input-empty"),
                  "danger",
                  "Erreur de saisie"
                )
              );
              showMessage();
            }
          }}
        />
      </section>
    </main>
  );
}

export default UserConnexion;

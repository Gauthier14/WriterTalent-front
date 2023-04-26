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
import Message from "../Message/Message";

function UserConnexion() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);
  return (
    <main className="user-connexion">
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
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
              console.log("Demande connexion");
              dispatch(loginUser());
            } else {
              console.log("champs vide ou incorrect");
              setMessageInfosInState(
                generateMessage("login-input-empty"),
                "danger",
                "Erreur de saisie"
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

/* eslint-disable object-curly-newline */
import PropTypes from "prop-types";
import "./Message.scss";

const Message = ({ text, otherClass, serverMessage }) => (
  <div className={`message ${otherClass}`}>
    <p>
      Erreur : <span>{serverMessage}</span>
    </p>
    <p>{text}</p>
  </div>
);

Message.propTypes = {
  serverMessage: PropTypes.string.isRequired,
  otherClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Message;

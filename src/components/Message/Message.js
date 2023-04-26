/* eslint-disable object-curly-newline */
import PropTypes from "prop-types";
import "./Message.scss";

const Message = ({ text, otherClass, serverMessage }) => (
  <div className={`message ${otherClass}`}>
    <p>
      Message : <span>{serverMessage}</span>
    </p>
    <p>{text}</p>
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  otherClass: PropTypes.string.isRequired,
  serverMessage: PropTypes.string.isRequired,
};
export default Message;
/* eslint-disable object-curly-newline */
import PropTypes from "prop-types";
import "./Message.scss";

const Message = ({ messages }) => (
  <div className="messages">
    {messages.map((msg) => (
      <div className={`message ${msg.class}`}>
        <p>Message :</p>
        <p>{msg.text}</p>
      </div>
    ))}
  </div>
);

Message.propTypes = {
  messages: PropTypes.array,
};
Message.defaultProps = {
  messages: [],
};
export default Message;

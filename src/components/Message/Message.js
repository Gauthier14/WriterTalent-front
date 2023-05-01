/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
import PropTypes from "prop-types";
import "./Message.scss";
import { useDispatch } from "react-redux";

const Message = ({ messages, statusText }) => {
  const dispatch = useDispatch();
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div className={`message ${msg.class}`} key={index}>
          <span>{statusText}</span>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};
Message.propTypes = {
  messages: PropTypes.array,
  statusText: PropTypes.string,
};
Message.defaultProps = {
  messages: [],
  statusText: "Message",
};
export default Message;

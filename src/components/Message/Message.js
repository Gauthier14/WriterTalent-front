/* eslint-disable react/no-array-index-key */
import PropTypes, { shape, string } from 'prop-types';
import './Message.scss';

const Message = ({ messages }) => (
  <div className="messages">
    {messages.map((msg, index) => (
      <div className={`message ${msg.class}`} key={index}>
        <span>{msg.serverMsg}</span>
        <p>{msg.text}</p>
      </div>
    ))}
  </div>
);
Message.propTypes = {
  messages: PropTypes.arrayOf(
    shape({
      text: string,
      serverMsg: string,
    }),
  ).isRequired,
};
export default Message;

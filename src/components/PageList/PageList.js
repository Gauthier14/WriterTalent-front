/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { useSelector } from "react-redux";
import PropTypes, { object } from "prop-types";
import Loader from "../Loader/Loader";
import BookElement from "../BookElement/BookElement";
import "./PageList.scss";
import Message from "../Message/Message";

function PageList({ posts }) {
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);
  return (
    <main className="page-list">
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
      {posts.length > 0 ? (
        posts.map((post) => (
          <BookElement key={post.id} {...post} link={`/post/read/${post.id}`} />
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;

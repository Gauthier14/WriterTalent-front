/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import AuthorItem from "./AuthorItem";
import { getAllAuthors } from "../../actions/user";
import "./AuthorList.scss";
import Message from "../Message/Message";

function AuthorList() {
  const authors = useSelector((state) => state.user.authors);
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return (
    <main className="author-items">
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
      {authors.length > 0 ? (
        authors.map((author) => (
          <AuthorItem
            id={author.id}
            username={author.username}
            key={author.id}
          />
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default AuthorList;

/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import AuthorItem from "./AuthorItem";
import { getAllAuthors } from "../../actions/user";
import "./AuthorList.scss";

function AuthorList() {
  const authors = useSelector((state) => state.user.authors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);
  return (
    <main className="author-items">
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

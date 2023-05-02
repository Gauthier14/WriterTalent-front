import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewLoader from "../NewLoader/NewLoader";
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
        <NewLoader />
      )}
    </main>
  );
}

export default AuthorList;

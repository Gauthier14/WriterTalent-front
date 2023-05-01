import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getNumberOfPublishedPostsAuthorFromApi } from "../../actions/posts";

const AuthorItem = ({ username, id }) => {
  const [numPublications, setNumPublications] = useState(0);
  const dispatch = useDispatch();
  const numberOfPublishedPosts = useSelector(
    (state) => state.posts.numberOfPublishedPosts
  );
  useEffect(() => {
    dispatch(getNumberOfPublishedPostsAuthorFromApi(id));
  }, [dispatch, id, numPublications]);

  useEffect(() => {
    setNumPublications(numberOfPublishedPosts);
  }, [numberOfPublishedPosts]);

  return (
    <div className="book-author">
      <ul>
        <li className="cover-author">
          <Link className="author-link" to={`/posts/author/${id}`}>
            {username}
          </Link>
          <span className="span-published">
            {numPublications} publication{numPublications !== 1 && "s"}
          </span>
        </li>
        <li className="page-author page3-author" />
        <li className="page-author page2-author" />
        <li className="page-author page1-author" />
      </ul>
    </div>
  );
};

AuthorItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default AuthorItem;

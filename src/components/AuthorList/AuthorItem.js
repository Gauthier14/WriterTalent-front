import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getNumberOfPublishedPostsAuthor } from "../../actions/posts";

const AuthorItem = ({ username, id }) => {
  const dispatch = useDispatch();
  const numberOfPublishedPosts = useSelector(
    (state) => state.posts.numberOfPublishedPosts
  );
  useEffect(() => {
    dispatch(getNumberOfPublishedPostsAuthor(id));
  }, [dispatch, id]);


  return (
    <div className="book-author">
      <ul>
        <li className="cover-author">
          <Link className="author-link" to={`/posts/author/${id}`}>
            {username}
          </Link>
          <span className="span-published">
            {numberOfPublishedPosts} publications
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
  numberPosts: PropTypes.number.isRequired, // on ajoute le type de numberPosts
};

export default AuthorItem;

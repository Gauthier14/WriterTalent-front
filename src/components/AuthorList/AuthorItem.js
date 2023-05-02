import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorItem = ({ username, id }) => (
  <div className="book-author">
    <ul>
      <li className="cover-author">
        <Link className="author-link" to={`/posts/author/${id}`}>
          {username}
        </Link>
      </li>
      <li className="page-author page3-author" />
      <li className="page-author page2-author" />
      <li className="page-author page1-author" />
    </ul>
  </div>
);

AuthorItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default AuthorItem;

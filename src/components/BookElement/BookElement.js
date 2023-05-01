/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./BookElement.scss";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { convertDraftToHtml, convertHtmlToText } from "../../selectors/viewer";
import { incrementPostNbViews } from "../../actions/posts";

function BookElement({
  id,
  title,
  link,
  user,
  nbLikes,
  nbViews,
  genre,
  categories,
  content,
}) {
  const extract = "";
  /* if (content !== undefined) {
    extract = convertHtmlToText(convertDraftToHtml(content)).slice(0, 200);
    console.log(extract);
  } */
  const dispatch = useDispatch();
  return (
    <div className="book-post">
      <p className="extract">{extract}</p>
      <p className="nb_likes-views">
        <span>
          <BsFillHandThumbsUpFill />
          {nbLikes}
        </span>
        <span>
          <BsEyeFill />
          {nbViews}
        </span>
      </p>
      <button
        type="button"
        onClick={() => {
          console.log("incrémentation nb views");
          dispatch(incrementPostNbViews(id));
        }}
      >
        <Link to={`/post/read/${id}`}>Lire</Link>
      </button>
      <div className="cover">
        <p className="author">{user.username}</p>
        <h2>{title}</h2>
        <div className="tags">
          <span className="tag">{genre.name}</span>
          {categories.map((category) => (
            <span className="tag" key={category.id}>
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

BookElement.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  nbLikes: PropTypes.number.isRequired,
  nbViews: PropTypes.number.isRequired,
  genre: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  content: PropTypes.string.isRequired,
};

export default BookElement;

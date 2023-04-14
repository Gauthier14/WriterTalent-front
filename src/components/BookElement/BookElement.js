/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./BookElement.scss";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import Button from "../Button/Button";

function BookElement({
  title, link, author, nbLikes, nbViews, genre, category, content,
}) {
  const extract = `${content.slice(0, 200)} ...`;
  return (
    <div className="book">
      <p className="extract">{extract}</p>
      <p className="nb_likes-views">
        <span><BsFillHandThumbsUpFill />{nbLikes}</span>
        <span><BsEyeFill />{nbViews}</span>
      </p>
      <Button label="Lire" link={link} />
      <div className="cover">
        <p className="author">{author}</p>
        <h2>{title}</h2>
        <p className="tag">{genre}</p>
        <p className="tag">{category}</p>
      </div>
    </div>
  );
}

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  nbLikes: PropTypes.string.isRequired,
  nbViews: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BookElement;

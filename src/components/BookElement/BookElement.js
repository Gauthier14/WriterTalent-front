/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./BookElement.scss";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import Button from "../Button/Button";

function BookElement({
  title,
  link,
  user,
  nbLikes,
  nbViews,
  genre,
  categories,
  content,
}) {
  const extract = `${content.slice(0, 200)} ...`;
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
      <Button label="Lire" link={link} />
      <div className="cover">
        <p className="author">{user.username}</p>
        <h2>{title}</h2>
        <p className="tag">{genre.name}</p>
        {categories.map((category) => (
          <p className="tag" key={category.id}>
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}

BookElement.propTypes = {
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

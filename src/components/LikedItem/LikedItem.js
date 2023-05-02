import PropTypes from 'prop-types';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LikedItem = ({
  id, title, genre, categories, nbLikes,
}) => (
  <li>
    <Link to={`/post/read/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>
      <span className="genre">{genre.name}</span>
      {categories.map((category) => (
        <span className="category" key={category.id}>
          {category.name}
        </span>
      ))}
    </p>
    <p>
      <BsFillHandThumbsUpFill size={20} color="rgba(123, 182, 149, 0.9)" />
      <span className="nbLikes">{nbLikes}</span>
    </p>
  </li>
);

LikedItem.propTypes = {
  categories: PropTypes.array.isRequired,
  genre: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  nbLikes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default LikedItem;

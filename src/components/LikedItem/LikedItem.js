import PropTypes from 'prop-types';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReadPostFromApi } from '../../actions/posts';

const LikedItem = ({
  id, title, genre, categories, nbLikes,
}) => {
  const dispatch = useDispatch();
  return (
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
        <BsFillHandThumbsUpFill size={30} color="#42D11F" />
        <span className="nbLikes">{nbLikes}</span>
      </p>
    </li>
  );
};

LikedItem.propTypes = {
  categories: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  nbLikes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default LikedItem;

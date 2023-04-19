/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../../actions/menu";
import { getAllPostsPerCategoryOrGenreFromApi } from "../../actions/posts";

const DropMenuItem = ({ param, id, label }) => {
  const dispatch = useDispatch();
  return (
    <li className="drop-menu-item">
      <Link
        to={`/${param}/${id}/posts`}
        onClick={() => {
          dispatch(setToggleMenu());
          dispatch(getAllPostsPerCategoryOrGenreFromApi(param, id));
        }}
      >
        {label}
      </Link>
    </li>
  );
};

DropMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
};

export default DropMenuItem;

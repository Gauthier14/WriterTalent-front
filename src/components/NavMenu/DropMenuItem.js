/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToggleMenu } from '../../actions/menu';

const DropMenuItem = ({ pathname, label }) => {
  const dispatch = useDispatch();
  return (
    <li className="drop-menu-item">
      <Link
        to={pathname}
        onClick={() => {
          dispatch(setToggleMenu());
        }}
      >
        {label}
      </Link>
    </li>
  );
};

DropMenuItem.propTypes = {
  pathname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DropMenuItem;

/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setToggleMenu } from '../../actions/menu';

const MenuItem = ({ children, className }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={className}
      onClick={() => {
        dispatch(setToggleMenu());
      }}
    >
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MenuItem.defaultProps = {
  className: 'menu-item',
};
export default MenuItem;

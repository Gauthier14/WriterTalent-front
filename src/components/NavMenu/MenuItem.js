/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../../actions/menu";

const MenuItem = ({ children, className, dispatchMethod }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={className}
      onClick={() => {
        dispatch(setToggleMenu());
        dispatch(dispatchMethod());
      }}
    >
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dispatchMethod: PropTypes.func,
};

MenuItem.defaultProps = {
  className: "menu-item",
};
export default MenuItem;

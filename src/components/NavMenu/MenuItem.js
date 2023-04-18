import PropTypes from "prop-types";

const MenuItem = ({ children, className }) => (<li className={className}>{children}</li>);

MenuItem.propTypes = {
  children: PropTypes.isRequired,
  className: PropTypes.isRequired,
};

export default MenuItem;

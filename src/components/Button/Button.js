/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Button({
  bgColor,
  bgHoverColor,
  color,
  backdropFilter,
  label,
  link,
  linkTarget,
  width,
  children,
  transform,
  type
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const style = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    backdropfilter: backdropFilter,
    width: `${width}`,
  };
  const styleHover = {
    backgroundColor: `${bgHoverColor}`,
    color: `${color}`,
    transform: `${transform}`,
  };
  return (
    <button
      className="custom-btn"
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHover ? styleHover : style}
    >
      <Link to={link} target={linkTarget}>
        {label}
      </Link>
      {children}
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  color: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  backdropFilter: PropTypes.bool,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkTarget: PropTypes.string,
  width: PropTypes.string,
  transform: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  bgColor: "#333",
  bgHoverColor: "#bdbd74",
  color: "#fff",
  backdropFilter: true,
  linkTarget: "",
  width: "fit-content",
  transform: "scale(1.1)",
  link:'#',
  type: 'button',
};
export default Button;

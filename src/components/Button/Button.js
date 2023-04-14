/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Button({
  bgColor = "#333",
  bgHoverColor = "#6e6d6d",
  color = "#fff",
  label,
  link,
  width = "fit-content",
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
    width: `${width}`,
  };
  const styleHover = {
    backgroundColor: `${bgHoverColor}`,
    color: `${color}`,
    transform: "scale(1.1)",
  };
  return (
    <button
      style={isHover ? styleHover : style}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link}>{label}</Link>
    </button>
  );
}

Button.propTypes = {
  bgColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Button;

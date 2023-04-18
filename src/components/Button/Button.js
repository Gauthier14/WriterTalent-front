/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Button({
  bgColor = "#333",
  bgHoverColor = "#6e6d6d",
  color = "#fff",
  backdropFilter = true,
  label,
  link,
  linkTarget = "",
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
    backdropfilter: backdropFilter,
    width: `${width}`,
  };
  const styleHover = {
    backgroundColor: `${bgHoverColor}`,
    color: `${color}`,
    transform: "scale(1.1)",
  };
  return (
    <button
      className="custom-btn"
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHover ? styleHover : style}
    >
      <Link to={link} target={linkTarget}>
        {label}
      </Link>
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
};

export default Button;

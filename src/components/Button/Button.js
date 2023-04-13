import PropTypes from "prop-types"
import "./Button.scss";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Button({ bgColor, bgHoverColor, color, label, link }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const style = {
    backgroundColor: `${bgColor}`, 
    color: `${color}`
  }
  const styleHover = {
    backgroundColor: `${bgHoverColor}`, 
    color: `${color}`,
    transform : 'scale(1.1)',
  }
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

Button.defaultProps = {
  bgColor: '#333',
  color: '#fff',
  bgHoverColor : "#6e6d6d",
}


Button.propTypes = {
  bgColor: PropTypes.string,
  bgHoverColor : PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button;

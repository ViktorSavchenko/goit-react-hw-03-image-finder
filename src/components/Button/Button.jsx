import PropTypes from 'prop-types';
import React from "react";
import './Button.css';

function Button({ onClick}) { 
  return (
    <button className="Button" type="button" onClick={onClick}>Load more</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
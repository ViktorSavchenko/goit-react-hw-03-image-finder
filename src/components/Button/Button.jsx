import React from "react";
import './Button.css';

function Button({ onClick}) { 
  return (
    <button className="Button" type="button" onClick={onClick}>Load more</button>
  )
}

export default Button;
import React from "react";
import './NotFound.css'
import notFoundImage from './notfound.jpg';

function NotFound({ message}) { 
  return (
    <div className="Not-found-wrapper">
      <p className="Not-found-notation">{message}</p>
      <img src={notFoundImage } alt="sadcat" width="400" className="NotFoundImage"/>
    </div>
  );
};

export default NotFound;
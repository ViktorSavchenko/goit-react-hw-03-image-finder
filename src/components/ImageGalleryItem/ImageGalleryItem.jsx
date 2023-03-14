import React from "react";
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem({ webformatURL, largeImageURL, onClick }) {
  return (
    <li className="Gallery-list__item">
      <img src={webformatURL} alt="" className="Gallery-list__image" onClick={()=> onClick(largeImageURL) } />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
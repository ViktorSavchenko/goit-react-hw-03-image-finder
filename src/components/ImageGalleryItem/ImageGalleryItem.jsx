import React from "react";
import './ImageGalleryItem.css';

function ImageGalleryItem({ webformatURL, largeImageURL, onClick }) {
  return (
    <li className="Gallery-list__item">
      <img src={webformatURL} alt="" className="Gallery-list__image" onClick={()=> onClick(largeImageURL) } />
    </li>
  );
};

export default ImageGalleryItem;
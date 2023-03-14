import React from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css'

function ImageGallery ({images, onClick}) { 
  return (
    <ul className="Gallery-list">
      {images.map(({ id, webformatURL, largeImageURL }) => (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={ onClick} />))}
    </ul>
  );
  
}

export default ImageGallery;
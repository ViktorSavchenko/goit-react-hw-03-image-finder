import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css'

function ImageGallery ({images, onClick}) { 
  return (
    <ul className="Gallery-list">
      {images.map(({ id, webformatURL, largeImageURL }) => (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onClick={ onClick} />))}
    </ul>
  );
  
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
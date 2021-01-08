import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ id, img, alt, large, onHandleModalUrl }) => {
  return (
    <li key={id} className="ImageGalleryItem" onClick={onHandleModalUrl}>
      <img
        src={img}
        alt={alt}
        data-url={large}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  onHandleModalUrl: PropTypes.func,
};

export default ImageGalleryItem;

import React from "react";


import PropTypes from "prop-types";
import "./ImageGallery.css";

export default function ImageGallery({children}) {
  return (
    <ul className="ImageGallery">
    {children}
    </ul>
  );
}

ImageGallery.propTypes ={
  children: PropTypes.node.isRequired
}

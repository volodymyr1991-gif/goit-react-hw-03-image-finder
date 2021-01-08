import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ image, onHandleClick }) {
  return (
    <div className="Overlay" onClick={onHandleClick}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func,
};

export default Modal;

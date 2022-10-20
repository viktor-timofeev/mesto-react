import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_function_closeup popup_type_dark ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_size_large">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
          data-type="auto"
        />
        <h2 className="popup__image-caption">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

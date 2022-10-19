import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_function_closeup popup_type_dark ${props.card ? 'popup_opened' : ''}`}>
    <div className="popup__container popup__container_size_large">
      <button className="popup__close-button" type="button" onClick={props.onCLose}></button>
      <img className="popup__image" 
      style={{ backgroundImage: `url(${props.card})` }}
        alt="" data-type="auto"/>
      <h2 className="popup__image-caption">{props.card}</h2>
    </div>
  </div> 
  );
}

export default ImagePopup;
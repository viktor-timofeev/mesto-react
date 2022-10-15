import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}  ${props.isOpen ? 'popup_opened' : ''}`} >
    <div className="popup__container popup__container_size_small">
      <button className="popup__close-button" type="button"></button>
      <form className="popup__form" name={`${props.name}`} method="post" noValidate>
        <h2 className="popup__title popup__title_type_large">{props.title}</h2>
        {props.children}
        <button className="popup__submit-button popup__submit-button_type_inactive" type="submit" disabled>Создать</button>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;
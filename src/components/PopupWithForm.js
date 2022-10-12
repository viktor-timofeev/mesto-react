import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`} >
    <div className="popup__container popup__container_size_small">
      <button className="popup__close-button" type="button"></button>
      <form className="popup__form popup__form_function_add popup__form_height_big" name={`${props.name}`} method="post" novalidate>
        <h2 className="popup__title popup__title_type_large">Новое место</h2>
        <input id="title" className="popup__input popup__input_type_name" name="title" placeholder="Название"
          value="" type="text" minlength="2" maxlength="30" required/>
        <span id="title-error" className="popup__input-error title-error"></span>
        <input id="link" className="popup__input popup__input_type_link" name="link"
          placeholder="Ссылка на картинку" value="" type="url" required/>
        <span id="link-error" className="popup__input-error link-error"></span>
        <button className="popup__submit-button popup__submit-button_type_inactive" type="submit" disabled>Создать</button>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;
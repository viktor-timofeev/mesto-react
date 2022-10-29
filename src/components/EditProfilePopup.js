import React from "react";

export const EditProfilePopup = (props) => {
  


  return (
    <PopupWithForm
        name="edit"
        title="Редактировать профиль">
        {
          <>
            <input
              id="name"
              className="popup__input popup__input_type_title"
              name="name"
              placeholder="Имя"
              defaultValue=""
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
            <span
              id="name-error"
              className="popup__input-error name-error"
            ></span>
            <input
              id="about"
              className="popup__input popup__input_type_subtitle"
              name="about"
              placeholder="О себе"
              defaultValue=""
              type="text"
              minLength="2"
              maxLength="200"
              required
            />
            <span
              id="about-error"
              className="popup__input-error about-error"
            ></span>
          </>
        }
      </PopupWithForm>
  );
}

export default EditProfilePopup;

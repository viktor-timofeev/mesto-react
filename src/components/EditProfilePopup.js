import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";



const EditProfilePopup = (props) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  } 
  
  return (
  /*  <div 
    className={`popup popup_function_edit popup_type_light ${
      props.isOpen ? "popup_opened" : ""
    }`}
       name="edit" title="Редактировать профиль">
        {
          <>
            <input
              id="name"
              value={props.name}
              onChange={handleChange}
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
              value={props.description}
              onChange={handleChange}
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
          </>*/

<div className={`popup popup_function_edit popup_type_light ${
      props.isOpen ? "popup_opened" : ""
    }`}>
<div className="popup__container popup__container_size_small">
  <button className="popup__close-button" type="button" onClick={props.onClose}></button>
  <form className="popup__form popup__form_function_edit popup__form_height_big" name="touristProfile" method="post" onSubmit={handleSubmit} novalidate>
    <h2 className="popup__title popup__title_type_large">Редактировать профиль</h2>
    <input
              id="name"
              value={props.name}
              onChange={handleChangeName}
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
              value={props.description}
              onChange={handleChangeDescription}
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
    <button className="popup__submit-button popup__submit-button_type_inactive" type="submit">Сохранить</button>
  </form>
</div>
</div>
  );
}

export default EditProfilePopup;

import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const AddPlacePopup = (props) => {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  const avatarLink = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
    avatar: avatarLink,
    });
  } 

 return (
  <div className={`popup popup_function_add popup_type_light ${props.isOpen ? "popup_opened" : ""}`}>
  <div className="popup__container popup__container_size_small">
    <button className="popup__close-button" type="button" onClick={props.onClose}></button>
    <form className="popup__form popup__form_function_add popup__form_height_big" name="newCard" method="post" onSubmit={handleSubmit} novalidate>
      <h2 class="popup__title popup__title_type_large">Новое место</h2>
      <input
        id="title"
        className="popup__input popup__input_type_name"
        name="title"
        placeholder="Название"
        defaultValue=""
        type="text"
        minLength="2"
        maxLength="30"
        required
      />
      <span
        id="title-error"
        className="popup__input-error title-error"
      ></span>
      <input
        id="link"
        className="popup__input popup__input_type_link"
        name="link"
        placeholder="Ссылка на картинку"
        defaultValue=""
        type="url"
        required
      />
      <span
        id="link-error"
        className="popup__input-error link-error"
      ></span>
       <button className="popup__submit-button popup__submit-button_type_active" type="submit">Создать</button>
     </form>
    </div>
  </div>

 )
  }


export default AddPlacePopup;

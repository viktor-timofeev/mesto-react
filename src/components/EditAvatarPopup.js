import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";



const EditAvatarPopup = (props) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  const avatarLink = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarLink,
    });
  } 

  
  return (
   
<div className={`popup popup_function_edit-photo popup_type_light ${
      props.isOpen ? "popup_opened" : ""
    }`}>
<div className="popup__container popup__container_size_small">
  <button className="popup__close-button" type="button" onClick={props.onClose}></button>
  <form className="popup__form popup__form_function_edit-photo popup__form_height_medium" name="touristProfile" method="post" onSubmit={handleSubmit} novalidate>
    <h2 className="popup__title popup__title_type_large">Обновить аватар</h2>
    <input
          id="link"
          className="popup__input popup__input_type_link"
          name="link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          type="url"
          required
          value={avatarLink}
        />
        <span
          id="link-error"
          className="popup__input-error link-error"
        ></span>
    <button className="popup__submit-button popup__submit-button_type_inactive" type="submit"
      disabled>Сохранить</button>
  </form>
</div>
</div>
  );
}

export default EditAvatarPopup;

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

  function handleChange(e) {
    setName(e.target.value);
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
    <div name="edit" title="Редактировать профиль">
        {
          <>
            <input
              id="name"
              value={name}
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
              value={description}
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
          </>
        }
      </div>
  );
}

export default EditProfilePopup;

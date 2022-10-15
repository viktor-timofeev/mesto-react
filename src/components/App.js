import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsisEditAvatarPopupOpen] = React.useState(false);
  
function handleEditAvatarClick() {
  setIsisEditAvatarPopupOpen(true);
}
function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}
function handleAddPlaceClick() {
  setIsisEditAvatarPopupOpen(true);
}

return (
  <div className="App">
  
<Header />
<Main
onEditProfile = {handleEditProfileClick}
onEditAvatar = {handleEditAvatarClick}
onAddPlace = {handleAddPlaceClick}
/>
<Footer />
<PopupWithForm name="edit"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}>
  {

<>  <input id="name" className="popup__input popup__input_type_title" name="name" placeholder="Имя" value=""
    type="text" minlength="2" maxlength="40" required/>
    <span id="name-error" className="popup__input-error name-error"></span>
    <input id="about" className="popup__input popup__input_type_subtitle" name="about"
    placeholder="О себе" value="" type="text" minlength="2" maxlength="200" required/>
    <span id="about-error" className="popup__input-error about-error"></span>
    <button className="popup__submit-button popup__submit-button_type_inactive" type="submit"
    disabled>Сохранить</button>
</>
}
 </PopupWithForm> 

 <PopupWithForm name="add"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}>

{
<>
<input id="title" className="popup__input popup__input_type_name" name="title" placeholder="Название"
value="" type="text" minlength="2" maxlength="30" required/>
<span id="title-error" className="popup__input-error title-error"></span>
<input id="link" className="popup__input popup__input_type_link" name="link"
placeholder="Ссылка на картинку" value="" type="url" required/>
<span id="link-error" className="popup__input-error link-error"></span>
</>
}
</PopupWithForm> 

 <PopupWithForm name="edit-photo"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}>

{
<>
<input id="title" className="popup__input popup__input_type_name" name="title" placeholder="Название"
value="" type="text" minlength="2" maxlength="30" required/>
<span id="title-error" className="popup__input-error title-error"></span>
<input id="link" className="popup__input popup__input_type_link" name="link"
placeholder="Ссылка на картинку" value="" type="url" required/>
<span id="link-error" className="popup__input-error link-error"></span>
</>
}
</PopupWithForm> 


{/*  

  <div className="popup popup_function_confirm popup_type_light">
    <div className="popup__container popup__container_size_extra-small">
      <button className="popup__close-button" type="button"></button>
      <form className="popup__form popup__form_function_confirm popup__form_height_small" method="delete" novalidate>
        <h2 className="popup__title popup__title_type_small">Вы уверены?</h2>
        <button className="popup__submit-button popup__submit-button_type_active">Да</button>
      </form>
    </div>
  </div>

  <div className="popup popup_function_edit-photo popup_type_light">
    <div className="popup__container popup__container_size_small">
      <button className="popup__close-button" type="button"></button>
      <form className="popup__form popup__form_function_edit-photo popup__form_height_medium" name="touristProfile" method="post" novalidate>
        <h2 className="popup__title">Обновить аватар</h2>
        <input id="avatar" className="popup__input popup__input_type_avatar" name="avatar"
        placeholder="Ссылка на картинку" value="" type="url" required/>
      <span id="avatar-error" className="popup__input-error avatar-error"></span>
        <button className="popup__submit-button popup__submit-button_type_inactive" type="submit"
          disabled>Сохранить</button>
      </form>
    </div>
  </div>

  <div className="popup popup_function_add popup_type_light">
    <div className="popup__container popup__container_size_small">
      <button className="popup__close-button" type="button"></button>
      <form className="popup__form popup__form_function_add popup__form_height_big" name="newCard" method="post" novalidate>
        <h2 className="popup__title popup__title_type_large">Новое место</h2>
        
        <button className="popup__submit-button popup__submit-button_type_inactive" type="submit" disabled>Создать</button>
      </form>
    </div>
  </div>

  <ImagePopup/>

</div>
  );

  function handleEditAvatarClick() {
    document.querySelector(".popup_function_edit-photo").classList.add("popup_opened");
  }
  function handleEditProfileClick() {
    document.querySelector(".popup_function_edit").classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document.querySelector(".popup_function_add").classList.add("popup_opened");
  }
}*/}
</div>
)}
export default App;

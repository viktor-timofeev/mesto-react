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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);


  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  
function handleEditAvatarClick() {
  setIsisEditAvatarPopupOpen(true);
}
function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}
function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function closeAllPopups() {
  setIsisEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setIsImagePopupOpen(false);
}

return (
<div className="page">
<Header />
<Main
onEditProfile = {handleEditProfileClick}
onEditAvatar = {handleEditAvatarClick}
onAddPlace = {handleAddPlaceClick}
onCardClick = {handleCardClick}
/>
<Footer />
<PopupWithForm name="edit"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onCLose={closeAllPopups}>
  {

<>  <input id="name" className="popup__input popup__input_type_title" name="name" placeholder="Имя" defaultValue=""
    type="text" minlength="2" maxlength="40" required/>
    <span id="name-error" className="popup__input-error name-error"></span>
    <input id="about" className="popup__input popup__input_type_subtitle" name="about"
    placeholder="О себе" defaultValue="" type="text" minlength="2" maxlength="200" required/>
    <span id="about-error" className="popup__input-error about-error"></span>
</>
}
 </PopupWithForm> 

 <PopupWithForm name="add"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onCLose={closeAllPopups}>

{
<>
<input id="title" className="popup__input popup__input_type_name" name="title" placeholder="Название"
defaultValue="" type="text" minlength="2" maxlength="30" required/>
<span id="title-error" className="popup__input-error title-error"></span>
<input id="link" className="popup__input popup__input_type_link" name="link"
placeholder="Ссылка на картинку" defaultValue="" type="url" required/>
<span id="link-error" className="popup__input-error link-error"></span>
</>
}
</PopupWithForm> 

 <PopupWithForm name="edit-photo"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onCLose={closeAllPopups}>

{
<>
<input id="link" className="popup__input popup__input_type_link" name="link"
placeholder="Ссылка на картинку" defaultValue="" type="url" required/>
<span id="link-error" className="popup__input-error link-error"></span>
</>
}
</PopupWithForm>

<ImagePopup
  card = {selectedCard}
  onClose = {closeAllPopups}
  isOpen = {isImagePopupOpen}
/>
</div>
)}

export default App;

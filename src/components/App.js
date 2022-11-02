import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState([]);
  const [cards, setCards] = React.useState("");

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.removeCard(card._id).then((newCard) => {
        setCards((state) => state.filter((c) => c._id === card._id ? newCard : c));
    });
  }

  React.useEffect(() => {
      api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })

      .catch((error) =>
        console.log(`Ошибка при добавлении карточек: ${error}`)
      );
  });

 

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) =>
        console.log(`Ошибка при обновлении информации профиля: ${error}`)
      );
  });

  //Card.js
 
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser() {
    api.setUserInfo()
      .then((data) => {
        setCurrentUser(data);
        })
        closeAllPopups();
      }

  function handleUpdateAvatar() {
    api.setUserPic()
    .then((data) => {
      setCurrentUser(data)
    })
      closeAllPopups();
    }
  
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateUser} /> 

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onCLose={closeAllPopups}
      >
        {
          <>
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
          </>
        }
      </PopupWithForm>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateAvatar} />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
    </div>
   </CurrentUserContext.Provider>
  );
}

export default App;

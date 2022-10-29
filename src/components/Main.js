import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Card from "./Card";



function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__item">
          <div className="profile__edit-image">
            <img
              className="profile__image"
              alt={currentUser.name}
              src={currentUser.avatar}
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
              id="id-avatar"
            />
            <button
              className="profile__photo-edit-button"
              onClick={props.onEditAvatar}
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__title-block">
              <h1 className="profile__title" id="id-name">
                {currentUser.name}
              </h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfile}
                type="button"
              ></button>
            </div>
            <p className="profile__subtitle" id="id-about">
              {currentUser.description}
            </p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        ))}
      </section>
    </main>
  );
}

export default Main;

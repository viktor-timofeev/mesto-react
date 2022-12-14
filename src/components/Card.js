import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = props.card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `${isOwn ? 'elements__trash_visible' : 'elements__trash_hidden'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = props.card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `elements__like ${isLiked ? 'elements__like_state_active' : ''}`;


  return (
    <div key={props.card.id}>
      <div className="elements__element">
        <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
        <img
          className="elements__image"
          src={props.card.link}
          onClick={handleCardClick}
          alt={props.card.name}
          data-type="auto"
        />
        <div className="elements__group">
          <h2 className="elements__title">{props.card.name}</h2>
          <div className="elements__like-group">
            <button className="elements__like" type="button" onClick={handleLikeClick}></button>
            <p className="elements__like-number">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

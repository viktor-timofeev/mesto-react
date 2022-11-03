import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";



function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [cards, setCards] = React.useState([]);

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

        {props.cards.map((card) => {

          return <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        })}
      </section>
    </main>
  );
}

export default Main;

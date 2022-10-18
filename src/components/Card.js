import React from 'react';

function Card(props) {

  const handleCardClick = () => {
    props.onCardClick(...props, props.card);
  } 

  return (
      <div key={props.card.id}>
        <div className="elements__element">
          <button className="elements__trash_visible" type="button"></button>
          <img className="elements__image"
          style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleCardClick} alt="" data-type="auto"/>
          <div className="elements__group">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__like-group">
            <button className="elements__like" type="button"></button>
            <p className="elements__like-number">{props.card.likes.length}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }

export default Card;
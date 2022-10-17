import React from 'react';
import closeIconPath from '../images/close-icon.svg'

function Card(props) {
  return (
      <div key={props.id}>
        <div className="elements__element">
          <button className="elements__trash" type="button" style={{ backgroundImage: `${closeIconPath}` }}></button>
          <img className="elements__image"
          style={{ backgroundImage: `url(${props.card.link})` }} onClick={props.onCardClick} alt="" data-type="auto"/>
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
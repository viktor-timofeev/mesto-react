import React from 'react';

function Card(props) {
  return (
      <div key={props.id}>
        <div className="elements__element">
          <button className="elements__trash" type="button"></button>
          <img className="elements__image"
          style={{ backgroundImage: `url(${props.link})` }} onClick={props.onCardClick} alt="" data-type="auto"/>
          <div className="elements__group">
            <h2 className="elements__title">{props.name}</h2>
            <div className="elements__like-group">
            <button className="elements__like" type="button"></button>
            <p className="elements__like-number">{props.name}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }

export default Card;
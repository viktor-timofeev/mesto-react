import React from 'react';
import avatarPath from '../images/avatar.jpg'; 
import PopupWithForm from './PopupWithForm';

function Main(props) {
  return (
    <main className="content">

    <section className="profile">
      <div className="profile__item">
        <div className="profile__edit-image">
        <img className="profile__image" alt="" /*src="<%=require('./images/avatar.jpg')%>"*/ src={avatarPath} id="id-avatar"/>
        <button className="profile__photo-edit-button" onClick={props.onEditAvatar} type="button"></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title" id="id-name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
          </div>
          <p className="profile__subtitle" id="id-about">Исследователь океана</p>
        </div>
      </div>
      <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
    </section>

    <section className="elements">
      <template className="elements-item">
        <div className="elements__element">
          <button className="elements__trash" type="button"></button>
          <img className="elements__image"
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt=" "
            data-type="auto"/>
          <div className="elements__group">
            <h2 className="elements__title"></h2>
            <div className="elements__like-group">
            <button className="elements__like" type="button"></button>
            <p className="elements__like-number"></p>
          </div>
          </div>
        </div>
      </template>
    </section>

  </main> 
 
  );

  
}

export default Main;
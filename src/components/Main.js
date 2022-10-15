import React from 'react'; 
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';

function Main(props) {
  const [userName,  setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch(error => console.log(`Ошибка при обновлении информации профиля: ${error}`))
    
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch(error => console.log(`Ошибка при добавлении карточек: ${error}`))
    })

  return (
    <main className="content">

    <section className="profile">
      <div className="profile__item">
        <div className="profile__edit-image">
        <img className="profile__image" alt="" style={{ backgroundImage: `url(${userAvatar})` }} id="id-avatar"/>
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
    <section class="elements">
    {cards.map((card, i) => (
      // Важный атрибут: key
      <div key={card.id}>
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
      </div>
    ))}
</section>
  </main> 
 
  );

  
}

export default Main;
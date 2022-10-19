import React from 'react'; 
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
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
    .catch(error => console.log(`Ошибка при обновлении информации профиля: ${error}`));
    
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
  
    .catch(error => console.log(`Ошибка при добавлении карточек: ${error}`))
    });

  return (
    <main className="content">

    <section className="profile">
      <div className="profile__item">
        <div className="profile__edit-image">
        <img className="profile__image" alt="" style={{ backgroundImage: `url(${userAvatar})` }} id="id-avatar"/>
        <button className="profile__photo-edit-button" onClick={onEditAvatar} type="button"></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title" id="id-name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
          </div>
          <p className="profile__subtitle" id="id-about">Исследователь океана</p>
        </div>
      </div>
      <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
    </section>
    <section className="elements">
    {cards.map((_id, ...props) => <Card key={_id} props onCardClick={onCardClick}/>
    )}
    </section>
  </main>  
  );

}


export default Main;
import editButtonPen from '../images/edit-button__pen.svg';
import addButton from '../images/add-button.svg';
import api from '../utils/Api.js';
import Card from './Card.js'

import React from 'react';

function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((initialUser) => {
        setUserAvatar(initialUser.avatar);
        setUserName(initialUser.name);
        setUserDescription(initialUser.about);
      })
      .catch(err => console.log(err))
    }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <div className="profile__avatar-overlay">
            <img className="profile__avatar-edit" src={editButtonPen} alt="поменять аватар" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__heading-line">
            <h1 className="profile__header">{userName}</h1>
            <button className="profile__edit-button" type="button" name="edit-button" onClick={props.onEditProfile}>
              <img className="profile__edit-image" src={editButtonPen} alt="кнопка-редактирования" />
            </button>
          </div>
          <p className="profile__subheader">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" name="add-button" onClick={props.onAddPlace}>
          <img className="profile__add-button-image" src={addButton} alt="кнопка добавить" />
        </button>
      </div>
      <section className="elements">
        {cards.map((card) => {
          return (
          <Card card={card} onCardClick={() => props.onCardClick(card)} key={card._id} />
          )}
        )}
      </section>
    </main>
  )
}

export default Main;
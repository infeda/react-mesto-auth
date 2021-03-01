import editButtonPen from '../images/edit-button__pen.svg';
import addButton from '../images/add-button.svg';
import Card from './Card.js'

import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
          <div className="profile__avatar-overlay">
            <img className="profile__avatar-edit" src={editButtonPen} alt="поменять аватар" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__heading-line">
            <h1 className="profile__header">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" name="edit-button" onClick={props.onEditProfile}>
              <img className="profile__edit-image" src={editButtonPen} alt="кнопка-редактирования" />
            </button>
          </div>
          <p className="profile__subheader">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" name="add-button" onClick={props.onAddPlace}>
          <img className="profile__add-button-image" src={addButton} alt="кнопка добавить" />
        </button>
      </div>
      <section className="elements">
        {props.cards.map((card) => {
          return (
          <Card card={card} onCardClick={() => props.onCardClick(card)} key={card._id} onCardLike={() => props.onCardLike(card)} onCardDelete={() => props.onCardDelete(card)} />
          )}
        )}
      </section>
    </main>
  )
}

export default Main;
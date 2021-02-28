import editButtonPen from '../images/edit-button__pen.svg';
import addButton from '../images/add-button.svg';
import api from '../utils/Api.js';
import Card from './Card.js'

import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(err => console.log(err))
    }, []
  );

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    const likeRequest = !isLiked ? api.likeCard(card._id) : api.deleteLikeCard(card._id);
    likeRequest
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  } 

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
        {cards.map((card) => {
          return (
          <Card card={card} onCardClick={() => props.onCardClick(card)} key={card._id} onCardLike={() => handleCardLike(card)} />
          )}
        )}
      </section>
    </main>
  )
}

export default Main;
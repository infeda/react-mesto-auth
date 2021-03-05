import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';


export default function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? '' : 'card__delete_invisible'}`
  ); 

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`; 

  return (
    <article className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={props.onCardClick} />
      <div className="card__content">
        <h2 className="card__heading">{props.card.name}</h2>
        <div className="card__like-section">
          <button className={cardLikeButtonClassName} type="button" name="like-button" onClick={props.onCardLike} ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button" name="delete-button" onClick={props.onCardDelete} ></button>
    </article>
  )
}
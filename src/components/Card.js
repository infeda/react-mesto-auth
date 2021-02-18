export default function Card(props) {
  return (
    <article className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={props.onCardClick} />
      <div className="card__content">
        <h2 className="card__heading">{props.card.name}</h2>
        <div className="card__like-section">
          <button className="card__like" type="button" name="like-button"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete" type="button" name="delete-button"></button>
    </article>
  )
}
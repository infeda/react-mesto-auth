export default function Card(props) {
  return (
    props.cards.map((card) => {
      return (
        <article className="card">
          <img className="card__image" src={card.link} alt={card.name} onClick={console.log('it was clicked')} />
          <div className="card__content">
            <h2 className="card__heading">{card.name}</h2>
            <div className="card__like-section">
              <button className="card__like" type="button" name="like-button"></button>
              <p className="card__like-counter">{card.likes.length}</p>
            </div>
          </div>
          <button className="card__delete" type="button" name="delete-button"></button>
        </article>
        )
      })
  )
}
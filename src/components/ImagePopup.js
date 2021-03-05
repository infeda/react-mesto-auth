import closeIcon from '../images/Close-Icon.svg';

function ImagePopup(props) {
  return (
    <div className={ (props.card.link === '') ? 'popup popup_image' : 'popup popup_image popup_opened' }>
      <div className="popup-container-image">
        <button className="popup__close-button popup__close-button_popup_image" type="button"
          name="close-image-popup" onClick={props.onCLose}>
          <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
        </button>
        <img className="popup-container-image__image" src={ (props.card.link === '') ? '//:0' : props.card.link} alt='Рисунок' />
        <h2 className="popup-container-image__heading">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
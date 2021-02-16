import closeIcon from '../images/Close-Icon.svg';

function ImagePopup(props) {
  console.log(props.card);
  return (
    <div className={ (!props.card === '') ? 'popup popup_image popup_opened' : 'popup popup_image' }>
      <div className="popup-container-image">
        <button className="popup__close-button popup__close-button_popup_image" type="button"
          name="close-image-popup">
          <img className="popup__close-icon" src={closeIcon} alt="закрыть" onClick={props.onClose} />
        </button>
        <img className="popup-container-image__image" src={props.selectedCard} alt={props.selectedCard} />
        <h2 className="popup-container-image__heading"></h2>
      </div>
    </div>
  )
}

export default ImagePopup;
import closeIcon from '../images/Close-Icon.svg';

function PopupWithForm(props) {
  return (
    <div className={ props.isOpen ?  `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <div className="popup-container">
        <button className={`popup__close-button popup__close-button_popup_${props.name}`} type="button"
          name={`close-${props.name}-popup`} onClick={props.onClose}>
          <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
        </button>
        <h2 className="popup-container__heading">{props.title}</h2>
        <form className={`popup-container__form popup-container__form_${props.name}`} name={`popup-form-${props.name}`} onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
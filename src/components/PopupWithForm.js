import closeIcon from '../images/Close-Icon.svg';

function PopupWithForm(props) {

  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup-container">
        <button className={`popup__close-button popup__close-button_popup_${props.name}`} type="button"
          name={`close-${props.name}-popup`}>
          <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
        </button>
        <h2 className="popup-container__heading">{props.title}</h2>
        <form className={`popup-container__form popup-container__form_${props.name}`} name={`popup-form-${props.name}`}>
          <fieldset className="popup-container__input-container">
            <label className="popup-container__field">
              <input type="text" name="name" id="name" value="" minlength="2" maxlength="40"
                className="popup-container__form-item popup-container__form-item_el_name" placeholder="Введите своё имя"
                required />
              <span id="name-error" className="popup-container__form-item-error"></span>
            </label>
            <label className="popup-container__field">
              <input type="text" name="text" id="text" value="" minlength="2" maxlength="200"
                className="popup-container__form-item popup-container__form-item_el_text" placeholder="Введите описание"
                required />
              <span id="text-error" className="popup-container__form-item-error"></span>
            </label>
          </fieldset>
          <button type="submit" className="popup-container__submit-button" name={`${props.name}-submit-button`}>Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {

  const nameInputRef = React.useRef();
  const linkInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value
    })

    props.onClose();
  }

  return (
    <PopupWithForm title="Новое место" name="add" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
      <fieldset className="popup-container__input-container">
        <label className="popup-container__field">
          <input type="text" name="heading" id="heading" defaultValue="" minLength="2" maxLength="30"
            className="popup-container__form-item popup-container__form-item_el_heading" placeholder="Название"
            required ref={nameInputRef} />
          <span id="heading-error" className="popup-container__form-item-error"></span>
        </label>
        <label className="popup-container__field">
          <input type="url" name="link" id="link" defaultValue=""
            className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка на картинку"
            required ref={linkInputRef} />
            <span id="link-error" className="popup-container__form-item-error"></span>
        </label>
      </fieldset>
      <button type="submit" className="popup-container__submit-button" name="add-submit-button">Создать</button>
    </PopupWithForm>
  )
}
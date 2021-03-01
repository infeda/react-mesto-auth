import PopupWithForm from './PopupWithForm';
import React from 'react';


export default function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    })

    props.onClose();
  }

  return (
    <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="url" name="link" id="avatar-link" defaultValue=""
              className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка"
              required ref={inputRef} />
              <span id="avatar-link-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
      </PopupWithForm>
  )
}
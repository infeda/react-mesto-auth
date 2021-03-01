import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }, [currentUser]
  );

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name, 
      about: description
    })

    props.onClose();
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="edit" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
      <fieldset className="popup-container__input-container">
        <label className="popup-container__field">
          <input type="text" name="name" id="name" value={name || ""} minLength="2" maxLength="40"
            className="popup-container__form-item popup-container__form-item_el_name" placeholder="Введите своё имя"
            required onChange={handleNameChange} />
          <span id="name-error" className="popup-container__form-item-error"></span>
        </label>
        <label className="popup-container__field">
          <input type="text" name="text" id="text" value={description || ""} minLength="2" maxLength="200"
            className="popup-container__form-item popup-container__form-item_el_text" placeholder="Введите описание"
            required onChange={handleDescriptionChange} />
          <span id="text-error" className="popup-container__form-item-error"></span>
        </label>
      </fieldset>
      <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
    </PopupWithForm>
  )
}
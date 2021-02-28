import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/Api.js';

import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then((initialUser) => {
        setCurrentUser(initialUser)
      })
      .catch(err => console.log(err))
    }, []
  )

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="text" name="name" id="name" defaultValue="" minLength="2" maxLength="40"
              className="popup-container__form-item popup-container__form-item_el_name" placeholder="Введите своё имя"
              required />
            <span id="name-error" className="popup-container__form-item-error"></span>
          </label>
          <label className="popup-container__field">
            <input type="text" name="text" id="text" defaultValue="" minLength="2" maxLength="200"
              className="popup-container__form-item popup-container__form-item_el_text" placeholder="Введите описание"
              required />
            <span id="text-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
       <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="text" name="heading" id="heading" defaultValue="" minLength="2" maxLength="30"
              className="popup-container__form-item popup-container__form-item_el_heading" placeholder="Название"
              required />
            <span id="heading-error" className="popup-container__form-item-error"></span>
          </label>
          <label className="popup-container__field">
            <input type="url" name="link" id="link" defaultValue=""
              className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка на картинку"
              required />
              <span id="link-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button popup-container__submit-button_inactive" name="add-submit-button">Создать</button>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="url" name="link" id="avatar-link" defaultValue=""
              className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка"
              required />
              <span id="avatar-link-error" className="popup-container__form-item-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="delete">
        <button type="submit" className="popup-container__submit-button" name="delete-submit-button">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onCLose={closeAllPopups}/>

      </div> 
    </CurrentUserContext.Provider>
  );
};

export default App;

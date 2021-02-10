import React from 'react';
import './index.css';
import logo from './images/logo__header.svg';
import editAvatar from './images/edit-avatar.png';
import editButtonPen from './images/edit-button__pen.svg';
import addButton from './images/add-button.svg';

function App() {
  return (
    <body className="root">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="логотип" />
        </header>
        <main className="content">
          <div className="profile">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src="//:0" alt="аватар" />
              <div className="profile__avatar-overlay">
                <img className="profile__avatar-edit" src={editAvatar} alt="поменять аватар" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__heading-line">
                <h1 className="profile__header">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" name="edit-button">
                  <img className="profile__edit-image" src={editButtonPen} alt="кнопка-редактирования" />
                </button>
              </div>
              <p className="profile__subheader"></p>
            </div>
            <button className="profile__add-button" type="button" name="add-button">
              <img className="profile__add-button-image" src={addButton} alt="кнопка добавить" />
            </button>
          </div>
          <section className="elements">

          </section>
          <div className="popup popup_edit">
            <div className="popup-container">
              <button className="popup__close-button popup__close-button_popup_edit" type="button"
                name="close-edit-popup">
                <img className="popup__close-icon" src="<%=require('./images/Close-Icon.svg')%>" alt="закрыть" />
              </button>
              <h2 className="popup-container__heading">Редактировать профиль</h2>
              <form className="popup-container__form popup-container__form_edit" name="popup-form-edit">
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
                <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_add">
            <div className="popup-container">
              <button className="popup__close-button popup__close-button_popup_add" type="button"
                name="close-add-popup">
                <img className="popup__close-icon" src="<%=require('./images/Close-Icon.svg')%>" alt="закрыть" />
              </button>
              <h2 className="popup-container__heading">Новое место</h2>
              <form className="popup-container__form popup-container__form_add" name="popup-form-add">
                <fieldset className="popup-container__input-container">
                  <label className="popup-container__field">
                    <input type="text" name="heading" id="heading" value="" minlength="2" maxlength="30"
                      className="popup-container__form-item popup-container__form-item_el_heading" placeholder="Название"
                      required />
                    <span id="heading-error" className="popup-container__form-item-error"></span>
                  </label>
                  <label className="popup-container__field">
                    <input type="url" name="link" id="link" value=""
                      className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка на картинку"
                      required />
                      <span id="link-error" className="popup-container__form-item-error"></span>
                  </label>
                </fieldset>
                <button type="submit" className="popup-container__submit-button popup-container__submit-button_inactive" name="add-submit-button">Создать</button>
              </form>
            </div>
          </div>
          <div className="popup popup_image">
            <div className="popup-container-image">
              <button className="popup__close-button popup__close-button_popup_image" type="button"
                name="close-image-popup">
                <img className="popup__close-icon" src="<%=require('./images/Close-Icon.svg')%>" alt="закрыть" />
              </button>
              <img className="popup-container-image__image" src="//:0" alt="null" />
              <h2 className="popup-container-image__heading"></h2>
            </div>
          </div>
          <div className="popup popup_delete">
            <div className="popup-container">
              <button className="popup__close-button popup__close-button_popup_delete">
                <img className="popup__close-icon" src="<%=require('./images/Close-Icon.svg')%>" alt="закрыть" />
              </button>
              <h2 className="popup-container__heading">Вы уверены?</h2>
              <button type="submit" className="popup-container__submit-button" name="delete-submit-button">Да</button>
            </div>
          </div>
          <div className="popup popup_edit-avatar">
            <div className="popup-container">
              <button className="popup__close-button popup__close-button_popup_edit" type="button"
                name="close-edit-popup">
                <img className="popup__close-icon" src="<%=require('./images/Close-Icon.svg')%>" alt="закрыть" />
              </button>
              <h2 className="popup-container__heading">Обновить аватар</h2>
              <form className="popup-container__form popup-container__form_edit-avatar" name="popup-form-edit-avatar">
                <fieldset className="popup-container__input-container">
                  <label className="popup-container__field">
                    <input type="url" name="link" id="avatar-link" value=""
                      className="popup-container__form-item popup-container__form-item_el_link" placeholder="Ссылка"
                      required />
                      <span id="avatar-link-error" className="popup-container__form-item-error"></span>
                  </label>
                </fieldset>
                <button type="submit" className="popup-container__submit-button" name="edit-submit-button">Сохранить</button>
              </form>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p className="footer__copyright">
            &copy; 2020 Mesto Russia
          </p>
        </footer>
      </div>
      <template id="card-template">
        <article className="card">
          <img className="card__image" src="//:0" alt="null" />
          <div className="card__content">
            <h2 className="card__heading"></h2>
            <div className="card__like-section">
              <button className="card__like" type="button" name="like-button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="card__delete" type="button" name="delete-button"></button>
        </article>
      </template>
  
    </body>
  );
};

export default App;

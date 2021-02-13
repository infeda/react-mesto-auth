  import editAvatar from '../images/edit-avatar.png';
  import editButtonPen from '../images/edit-button__pen.svg';
  import addButton from '../images/add-button.svg';
  import closeIcon from '../images/Close-Icon.svg';

  import PopupWithForm from './PopupWithForm';

  const editAvatarButton = document.querySelector('.profile__avatar-container');

  function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_add').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src="//:0" alt="аватар" />
          <div className="profile__avatar-overlay">
            <img className="profile__avatar-edit" src={editAvatar} alt="поменять аватар" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__heading-line">
            <h1 className="profile__header">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" name="edit-button" onClick={handleEditProfileClick}>
              <img className="profile__edit-image" src={editButtonPen} alt="кнопка-редактирования" />
            </button>
          </div>
          <p className="profile__subheader"></p>
        </div>
        <button className="profile__add-button" type="button" name="add-button" onClick={handleAddPlaceClick}>
          <img className="profile__add-button-image" src={addButton} alt="кнопка добавить" />
        </button>
      </div>
      <section className="elements">

      </section>
      <PopupWithForm title="Редактировать профиль" name="edit">
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
      </PopupWithForm>
      
      <PopupWithForm title="Новое место" name="add">
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
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="edit-avatar">
        <fieldset className="popup-container__input-container">
          <label className="popup-container__field">
            <input type="url" name="link" id="avatar-link" value=""
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

      {/* <div className="popup popup_edit">
        <div className="popup-container">
          <button className="popup__close-button popup__close-button_popup_edit" type="button"
            name="close-edit-popup">
            <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
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
      </div> */}
      {/* <div className="popup popup_add">
        <div className="popup-container">
          <button className="popup__close-button popup__close-button_popup_add" type="button"
            name="close-add-popup">
            <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
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
      </div> */}
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
      {/* <div className="popup popup_delete">
        <div className="popup-container">
          <button className="popup__close-button popup__close-button_popup_delete">
            <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
          </button>
          <h2 className="popup-container__heading">Вы уверены?</h2>
          <button type="submit" className="popup-container__submit-button" name="delete-submit-button">Да</button>
        </div>
      </div> */}
      {/* <div className="popup popup_edit-avatar">
        <div className="popup-container">
          <button className="popup__close-button popup__close-button_popup_edit" type="button"
            name="close-edit-popup">
            <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
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
      </div> */}
    </main>
  )
  }

  export default Main;
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api.js';
import ProtectedRoute from './ProtectedRoute';

import CurrentUserContext from '../contexts/CurrentUserContext';
import Register from './Register';
import Login from './Login';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  const [currentUser, setCurrentUser] = React.useState({name: '', avatar: '', about: ''});

  const [cards, setCards] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    Promise.all([
      api.getInitialCards(),
      api.getUserInfo()
    ])
      .then(([cards, initialUser]) => {
        setCards(cards);
        setCurrentUser(initialUser);
      })
      .catch(err => console.log(err))
    }, []
  );

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    const likeRequest = !isLiked ? api.likeCard(card._id) : api.deleteLikeCard(card._id);
    likeRequest
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(item => !(item._id === card._id));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

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
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(user) {
    api.editUserInfo([user.name, user.about])
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar.avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(info) {
    api.addNewCard(info.name, info.link)
      .then((card) => {
        setCards([card, ...cards]);
      })
      .catch((err) => console.log(err));
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  return (

      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">

            <Header loggedIn={loggedIn} />
            <Switch>
              <ProtectedRoute path="/home" loggedIn={loggedIn} component={Main}
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
              <Route path="/sign-in">
                <Login />
              </Route>
              <Route path="/sign-up">
                <Register />
              </Route>
              <Route path="/">
                {loggedIn ? <Redirect to="/home" /> : <Redirect to="/sign-up" /> }
              </Route>
            </Switch>

            <Footer loggedIn={loggedIn} />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 

          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

          <PopupWithForm title="Вы уверены?" name="delete">
            <button type="submit" className="popup-container__submit-button" name="delete-submit-button">Да</button>
          </PopupWithForm>

          <ImagePopup card={selectedCard} onCLose={closeAllPopups}/>

        </div> 
      </CurrentUserContext.Provider>

  );
};

export default App;

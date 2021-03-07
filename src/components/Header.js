import logo from '../images/logo__header.svg';
import React from 'react';
import {Link, Route} from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <nav>
        <ul className="header__nav">
          <Route path="/sign-in">
            <Link to="sign-up" className="header__link">Регистрация</Link>
          </Route>
          <Route path="/sign-up">
            <Link to="sign-in" className="header__link">Войти</Link>
          </Route>
          {props.loggedIn && 
            <>
              <li className="header__text">{props.email.email}</li>
              <li className="header__link header__link_out" onClick={props.onSignOut}>Выйти</li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;
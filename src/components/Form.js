import React from 'react';
import { Link } from 'react-router-dom';

export default function Form(props) {
  return (
    <div className={`form form_${props.name}`} >
      <h1 className="form__heading">{props.heading}</h1>
      <form className="form__form">
        <fieldset className="form__fieldset">
          <label className="form__field">
            <input type="email" name="email" id="email" minLength="2" maxLength="40"
              className="form__input form__input_el_email" placeholder="Email"
              required />
          </label>
          <label className="form__field">
            <input type="password" name="password" minLength="2" maxLength="40" className="form__input form__input_el_password" placeholder="Пароль" required />
          </label>
        </fieldset>
        <button type="submit" className="form__submit-button" name={`${props.name}-submit-button`}>
          {props.submitButton}
        </button>
        <div className={`form__signin ${props.name === 'register' ? '' : 'form__signin_invisible'}`} >
          <p className="form__text" >
            Уже зарегистрированы?
          </p>
          <Link to="sign-in" className="form__link-to-login">Войти</Link>
        </div>
      </form>
    </div>
  )
}
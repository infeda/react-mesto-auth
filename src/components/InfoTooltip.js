import closeIcon from '../images/Close-Icon.svg';
import succeedIcon from '../images/succeed.jpg';
import deniedIcon from '../images/denied.jpg';
import React from 'react';

export default function InfoTooltip(props) {
  return (
    <div className={ !props.isOpen ? 'popup popup_register' : 'popup popup_register popup_opened' }>
      <div className="popup-container popup-container_register">
        <button className={`popup__close-button popup__close-button_popup_register`} type="button"
          name={`close-register-popup`} onClick={props.onClose} >
          <img className="popup__close-icon" src={closeIcon} alt="закрыть" />
        </button>
        <img src={props.isSucceed ? succeedIcon : deniedIcon} alt="картинка" />
        <h2 className="popup-container__heading popup-container__heading_register">{`${props.isSucceed ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
      </div>
    </div>
  )
}
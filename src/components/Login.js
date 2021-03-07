import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Login(props) {
  const history = useHistory();

  const initialData = {
    email: '',
    password: ''
  }

  const [data, setData] = React.useState(initialData);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      props.setLoggedIn(true);
    }
  }, [history]);

  const resetForm = () => {
    setData(initialData);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onLogin(data)
      .then(res => {
        resetForm();
      })
      .then(() => {
        history.push('/');
        props.setEmail({email: data.email});
      })
      .catch(err => console.log(err));

  }

  return (
    <div className="form form_login">
      <h1 className="form__heading">Войти</h1>
      <form className="form__form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <label className="form__field">
            <input type="email" value={data.email} name="email" id="email" minLength="2" maxLength="40"
              className="form__input form__input_el_email" placeholder="Email"
              required onChange={handleChange} />
          </label>
          <label className="form__field">
            <input type="password" value={data.password} name="password" minLength="2" maxLength="40" 
            className="form__input form__input_el_password" placeholder="Пароль" required onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit" className="form__submit-button" name={`login-submit-button`}>
          Войти
        </button>
      </form>
    </div>
  )
}
import Form from './Form';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
  const history = useHistory();

  const initialData = {
    email: '',
    password: ''
  }

  const [data, setData] = React.useState(initialData);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      console.log('JWT in localStorage');
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
      .then(() => history.push('/home'))
      .catch(err => console.log(err));

  }

  return (
    <Form name="login" heading="Вход" submitButton="Войти" onChange={handleChange} onSubmit={handleSubmit} data={data} />
  )
}
import Form from './Form';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';

export default function Register(props) {
  const history = useHistory();

  const initialData = {
    email: '',
    password: ''
  }

  const [data, setData] = React.useState(initialData);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      history.push('/home');
      props.setLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(data => ({
      ...data,
      [name]: value
    })
    )
  }

  const resetForm = () => {
    setData(initialData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onRegister(data)
      .then(res => {
        resetForm();
      })
      .then(() => {
        history.push('/sign-in');
      })
      .catch(err => console.log(err));
    
  }
  
  return (
    <Form name="register" heading="Регистрация" submitButton="Зарегистрироваться" onSubmit={handleSubmit} onChange={handleChange} data={data} />
  )
}
import Form from './Form';
import React from 'react';

export default function Register(props) {
  const initialData = {
    email: '',
    password: ''
  }

  const [data, setData] = React.useState(initialData);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(data => ({
      ...data,
      [name]: value
    })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onRegister(data);
  }
  
  return (
    <Form name="register" heading="Регистрация" submitButton="Зарегистрироваться" onSubmit={handleSubmit} onChange={handleChange} data={data} />
  )
}
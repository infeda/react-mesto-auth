
export const register = (email, password) => {
  return fetch('https://auth.nomoreparties.co/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
})
  .then((res) => {
    if (res.ok) {
      return res.json();
      }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
}; 

export const login = (email, password) => {
  return fetch('https://auth.nomoreparties.co/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
})
  .then((res) => {
    if (res.ok) {
      return res.json();
      }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}; 

export const checkToken = (jwt) => {
  return fetch('https://auth.nomoreparties.co/users/me', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
      }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
}; 

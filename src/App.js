import React from 'react';
import './index.css';
// import logo from './images/logo__header.svg';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <body className="root">
      <div className="page">
      <Header />
      <Main />
      <Footer />
      </div>
      <template id="card-template">
        <article className="card">
          <img className="card__image" src="//:0" alt="null" />
          <div className="card__content">
            <h2 className="card__heading"></h2>
            <div className="card__like-section">
              <button className="card__like" type="button" name="like-button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="card__delete" type="button" name="delete-button"></button>
        </article>
      </template>
  
    </body>
  );
};

export default App;

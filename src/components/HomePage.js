// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Добро пожаловать!</h1>
      <p>Выберите игру:</p>
      <ul>
        <li>
          <Link to="/kahoot">Кахут</Link>
        </li>
        <li>
          <Link to="/millionaire">Кто хочет стать миллионером?</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

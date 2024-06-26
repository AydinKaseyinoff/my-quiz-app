// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/LoginPage';
import Register from './components/SignupPage';
import MillionaireGame from './components/MillionaireGame';
import KahootGame from './components/KahootGame';
import './App.css';
import Profile from './components/Profile';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const loggedInRoutes = (
    <>
      <li>
        <a href="/profile">Профиль</a>
      </li>
      <li>
        <a href="/millionaire">Миллионер</a>
      </li>
      <li>
        <a href="/kahoot">Кахут</a>
      </li>
      <li>
        <button onClick={handleLogout}>Выйти</button>
      </li>
    </>
  );

  const loggedOutRoutes = (
    <>
      <li>
        <a href="/login">Войти</a>
      </li>
      <li>
        <a href="/register">Регистрация</a>
      </li>
    </>
  );

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            {user ? loggedInRoutes : loggedOutRoutes}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/millionaire" element={<MillionaireGame />} />
          <Route path="/kahoot" element={<KahootGame />} />
        </Routes>
      </div>
      <audio autoPlay loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Router>
  );
};

export default App;

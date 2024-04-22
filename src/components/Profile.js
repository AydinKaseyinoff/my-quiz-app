// src/pages/Profile.js

import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <h1>Профиль</h1>
      <div>
        <p>
          <strong>Имя пользователя:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Пароль:</strong> {user.password}
        </p>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import './Header.css';
import logoYoutube from '../images/logo-youtube.svg'
import userAvatar from '../images/user-Avatar.jpg'


const Header = () => {
  return (
    <header className="header">
      <img src={logoYoutube} className="logo" />
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="user-profile">
        <img src={userAvatar} alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;
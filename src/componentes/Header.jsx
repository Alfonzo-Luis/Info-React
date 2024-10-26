import React from 'react';
import './Header.css';
import logoYoutube from '../images/logo-youtube.svg';
import userAvatar from '../images/user-Avatar.jpg';
import { FaSearch } from 'react-icons/fa'; 

const Header = ({ toggleSidebar }) => {
  return (
    <div>
      <header className="header">
        <div>
        <button onClick={toggleSidebar} className="menu-button">Menu</button>
        <img src={logoYoutube} className="logo" alt="YouTube Logo" />
        </div>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="user-profile">
          <img src={userAvatar} alt="User Profile" />
        </div>
      </header>
    </div>
  );
};

export default Header;
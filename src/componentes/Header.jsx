import React from 'react';
import './Header.css';
import logoYoutube from '../images/logo-youtube.svg'
import userAvatar from '../images/user-Avatar.jpg'


const Header = ({ toggleSidebar }) => {
  return (
    <div>
   <header className="header">
      <button onClick={toggleSidebar}>Menu</button>
      <img src={logoYoutube} className="logo" />
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="user-profile">
        <img src={userAvatar} alt="User Profile" />
      </div>
    </header>
    </div>
  );
};

export default Header;

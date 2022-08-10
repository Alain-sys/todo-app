import React from 'react';
import './Header.css';
import iconSun from '../../assets/icon-sun.svg';
import iconMoon from '../../assets/icon-moon.svg';

const Header = ({ handleChange, themeClass }) => {
  return (
    <header>
      <h1 className="logo">todo</h1>
      <button type="button" className="theme" onClick={() => handleChange()}>
        <img
          className={`theme__image_${themeClass}`}
          src={themeClass === 'dark' ? iconSun : iconMoon}
          alt="sun logo for light theme or moon logo for dark theme"></img>
      </button>
    </header>
  );
};

export default Header;

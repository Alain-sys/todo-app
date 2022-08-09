import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(false);
  const themeClass = theme ? 'light' : 'dark';

  const handleChange = () => {
    setTheme(theme ? false : true);
  };

  return (
    <div className={`content content_theme_${themeClass}`}>
      <Header themeClass={themeClass} handleChange={handleChange} />
      <Main theme={theme} themeClass={themeClass} />

      <a className={`github-profile`} href="https://github.com/Alain-sys">
        My Github Profile
      </a>
    </div>
  );
};

export default App;

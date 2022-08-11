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
      <Main themeClass={themeClass} />
      <div className={`attribution attribution_theme_${themeClass}`}>
        <p>
          Challenge by {''}
          <a className="github-profile" href="https://www.frontendmentor.io/">
            Frontend Mentor
          </a>
          . Coded by {''}
          <a className="github-profile" href="https://github.com/Alain-sys">
            Alain-sys
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;

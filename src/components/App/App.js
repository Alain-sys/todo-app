import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

import bgDesktopDark from '../../assets/bg-desktop-dark.jpg';
import bgDesktopLight from '../../assets/bg-desktop-light.jpg';
import bgMobileDark from '../../assets/bg-mobile-dark.jpg';
import bgMobileLight from '../../assets/bg-mobile-light.jpg';

const App = () => {
  const [theme, setTheme] = useState(false);
  const body = document.querySelector('body');

  const handleChange = () => {
    if (theme) {
      setTheme(false);
      body.classList.remove('light');
    } else {
      setTheme(true);
      body.classList.add('light');
    }
  };

  return (
    <div>
      <Header theme={theme} handleChange={handleChange} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

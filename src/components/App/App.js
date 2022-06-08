import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

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
    <>
      <Header theme={theme} handleChange={handleChange} />
      <Main />
      <Footer />
    </>
  );
};

export default App;

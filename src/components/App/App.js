import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(false);
  const themeClass = theme ? 'light' : 'dark';

  const handleChange = () => {
    setTheme(theme ? false : true);
  };

  return (
    <div className={`content content-${themeClass}`}>
      <Header themeClass={themeClass} handleChange={handleChange} />
      <Main theme={theme} themeClass={themeClass} />
      <Footer />
    </div>
  );
};

export default App;

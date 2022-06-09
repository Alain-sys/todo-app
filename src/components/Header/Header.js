import './Header.css';
import iconSun from '../../assets/icon-sun.svg';
import iconMoon from '../../assets/icon-moon.svg';

const Header = (props) => {
  return (
    <header>
      <h1 className="logo">todo</h1>
      <button type="button" className="theme" onClick={() => props.handleChange()}>
        <img className={`theme__image-${props.themeClass}`} src={props.themeClass === 'dark' ? iconSun : iconMoon} alt=""></img>
      </button>
    </header>
  );
};

export default Header;

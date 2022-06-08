import './Header.css';
import iconSun from '../../assets/icon-sun.svg';
import iconMoon from '../../assets/icon-moon.svg';

const Header = (props) => {
  return (
    <header>
      <h1 className="header__logo">todo</h1>
      <button type="button" className="header__theme" onClick={() => props.handleChange()}>
        <img src={props.theme === false ? iconSun : iconMoon} alt=""></img>
      </button>
    </header>
  );
};

export default Header;

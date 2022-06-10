import { useState } from 'react';
import './Main.css';

const OutputFormSubmit = (props) => {
  const rows = props.formSubmit.map((element, index) => {
    return (
      <div className="list__items" key={index}>
        <input type="checkbox" className="list__checkbox" name="checkbox"></input>
        <p className="list__text">{element}</p>
      </div>
    );
  });

  return <div className={`list list_${props.themeClass}`}>{rows}</div>;
};

const Main = (props) => {
  const [initialValue, setInitialValue] = useState('');
  const [formSubmit, setFormSubmit] = useState([]);
  const handleChange = (e) => {
    setInitialValue(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (initialValue !== '') {
      setFormSubmit([...formSubmit, initialValue]);
      setInitialValue('');
    } else {
      return;
    }
  };

  return (
    <main>
      <form className={`form form_${props.themeClass} `} onSubmit={onFormSubmit}>
        <span className={`form__span form__span_${props.themeClass}`}></span>
        <input
          type="text"
          className={`form__input form__input_${props.themeClass}`}
          value={initialValue}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="create a new todo"
          placeholder="Create a new todo..."></input>
      </form>
      <OutputFormSubmit themeClass={props.themeClass} formSubmit={formSubmit} />
    </main>
  );
};

export default Main;

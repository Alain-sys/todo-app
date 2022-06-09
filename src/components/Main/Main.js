import { useState } from 'react';
import './Main.css';

const OutputFormSubmit = (props) => {
  const rows = props.formSubmit.map((element, index) => {
    return (
      <div key={index}>
        <button type="button"></button>
        <p>{element}</p>
      </div>
    );
  });

  return <div className={`main__output main__output-${props.themeClass}`}>{rows}</div>;
};

const Main = (props) => {
  const [initialValue, setInitialValue] = useState('');
  const [formSubmit, setFormSubmit] = useState([]);
  const handleChange = (e) => {
    setInitialValue(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmit([...formSubmit, initialValue]);
    setInitialValue('');
  };

  return (
    <main>
      <form className={`main__form main__form-${props.themeClass} `} onSubmit={onFormSubmit}>
        <button type="button" className="main__buttons"></button>
        <input
          type="text"
          className={`main__input main__input-${props.themeClass}`}
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

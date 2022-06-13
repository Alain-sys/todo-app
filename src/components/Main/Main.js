import { useState } from 'react';
import './Main.css';

const OutputFormSubmit = (props) => {
  const rows = props.formSubmit.map((element, index) => {
    return (
      <div className="list__items" key={index}>
        <input
          type="checkbox"
          className={`list__checkbox list__checkbox_${props.themeClass}`}
          onClick={(e) => props.removeCharacter(e.target, index)}
          name="checkbox"></input>
        <p className={`list__text list__text_${props.themeClass}`}>{element}</p>
      </div>
    );
  });

  return <div className={`list list_${props.themeClass}`}>{rows}</div>;
};

const Main = (props) => {
  const [initialValue, setInitialValue] = useState('');
  const [formSubmit, setFormSubmit] = useState([]);
  const [checked, setChecked] = useState({
    index: false,
  });

  console.log(checked);

  console.log(formSubmit);
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

  const removeCharacter = (e, index) => {
    const test = formSubmit;

    setChecked({ ...checked, [index]: e.checked });
    // setFormSubmit(
    //   test.filter((character, i) => {
    //     return i !== index;
    //   })
    // );
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
      <OutputFormSubmit themeClass={props.themeClass} formSubmit={formSubmit} removeCharacter={removeCharacter} />
    </main>
  );
};

export default Main;

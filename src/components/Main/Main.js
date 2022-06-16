import { useState } from 'react';
import './Main.css';
import cross from '../../assets/icon-cross.svg';

const OutputFormSubmit = (props) => {
  // console.log(props.formSubmit);
  const animationHoverOn = (e) => {
    e.style.opacity = '1';
  };

  const animationHoverOff = (e) => {
    e.style.opacity = '0';
  };

  const rows = props.formSubmit.map((element, index) => {
    return (
      <div
        className="list__items"
        key={index}
        onMouseEnter={(e) => animationHoverOn(e.currentTarget.childNodes[1])}
        onMouseLeave={(e) => animationHoverOff(e.currentTarget.childNodes[1])}>
        <label className={`list__label list__label_${props.themeClass} ${element.checked ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={element.checked}
            className={`list__checkbox list__checkbox_${props.themeClass}`}
            onChange={() => props.updateForm(index)}
            name="checkbox"
          />
          {element.text}
        </label>
        <button className="list__delete" onClick={() => props.removeCharacter(index)}>
          <img src={cross} alt="cross" />
        </button>
      </div>
    );
  });

  return <div className={`list list_${props.themeClass}`}>{rows}</div>;
};

const Main = (props) => {
  const todoItems = [
    { text: 'Complete online JavaScript course', checked: true },
    { text: 'Jog around the park 3x', checked: false },
    { text: '10 minutes meditation', checked: false },
    { text: 'Read for 1 hour', checked: false },
    { text: 'Pick up groceries', checked: false },
    { text: 'Complete Todo App on Frontend Mentor', checked: false },
  ];

  const [initialValue, setInitialValue] = useState('');
  const [formSubmit, setFormSubmit] = useState(todoItems);

  const handleChange = (e) => {
    setInitialValue(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (initialValue !== '') {
      setFormSubmit([...formSubmit, { text: initialValue, checked: false }]);
      setInitialValue('');
    } else {
      return;
    }
  };

  const updateForm = (index) => {
    let items = [...formSubmit];
    let item = { ...items[index] };
    item.checked = !item.checked;
    items[index] = item;
    setFormSubmit(items);
  };

  const removeCharacter = (index) => {
    const test = formSubmit;

    setFormSubmit(
      test.filter((character, i) => {
        return i !== index;
      })
    );
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
          placeholder="Create a new todo..."
        />
      </form>
      <OutputFormSubmit themeClass={props.themeClass} formSubmit={formSubmit} removeCharacter={removeCharacter} updateForm={updateForm} />
    </main>
  );
};

export default Main;

import { useState } from 'react';
import './Main.css';

const OutputFormSubmit = (props) => {
  console.log(props.formSubmit);
  const rows = props.formSubmit.map((element, index) => {
    return (
      <div className="list__items" key={index}>
        <label className={`list__label list__label_${props.themeClass} ${element.checked ? 'checked' : ''}`}>
          <input
            type="checkbox"
            className={`list__checkbox list__checkbox_${props.themeClass}`}
            onClick={() => props.functionChecked(index)}
            name="checkbox"></input>
          {element.text}
        </label>
        <button onClick={() => props.removeCharacter(index)}>test</button>
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
  // const [checked, setChecked] = useState();

  // console.log(formSubmit[0].checked);

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

  const functionChecked = (index) => {
    let items = formSubmit;
    console.log(items);
    let item = items[index];
    console.log(item);

    item.text = 'test';

    items[index] = item;

    setFormSubmit(items);

    // const t = e[0].classList;
    // t.toggle('checked');
    // setChecked({ ...checked, [index]: b.checked });
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
          placeholder="Create a new todo..."></input>
      </form>
      <OutputFormSubmit
        themeClass={props.themeClass}
        formSubmit={formSubmit}
        removeCharacter={removeCharacter}
        // checked={checked}
        functionChecked={functionChecked}
      />
    </main>
  );
};

export default Main;

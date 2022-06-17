import { useState } from 'react';
import './Main.css';
import cross from '../../assets/icon-cross.svg';

const OutputItems = (props) => {
  // console.log(props);
  // console.log(props.props.formSubmit);
  var t = 0;

  const test = () => {
    props.props.formSubmit.forEach((element) => {
      const a = element.checked;
      console.log(a);

      if (!a) {
        t++;
      } else {
        return;
      }
      return t;
    });
  };
  test();

  return (
    <div className="status-items">
      <span className={`status-items__span status-items__span-${props.props.themeClass}`}>{t} items left</span>
      <div className="status-items__buttons">
        <button className={`btn-1 status-items__status status-items__status-${props.props.themeClass}`}>All</button>
        <button className={`btn-2 status-items__status status-items__status-${props.props.themeClass}`}>Active</button>
        <button className={`btn-2 status-items__status status-items__status-${props.props.themeClass}`}>Completed</button>
      </div>

      <button className={`status-items__status status-items__status-${props.props.themeClass}`}>Clear Completed</button>
    </div>
  );
};

const OutputFormSubmit = (props) => {
  const animationHoverOn = (e) => {
    e.style.opacity = '1';
  };

  const animationHoverOff = (e) => {
    e.style.opacity = '0';
  };

  const rows = props.formSubmit.map((element, index) => {
    return (
      <div
        className={`list__items list__items-${props.themeClass}`}
        key={index}
        onMouseEnter={(e) => animationHoverOn(e.currentTarget.childNodes[2])}
        onMouseLeave={(e) => animationHoverOff(e.currentTarget.childNodes[2])}>
        <input
          id={index}
          type="checkbox"
          checked={element.checked}
          className={`list__checkbox list__checkbox_${props.themeClass}`}
          onChange={() => props.updateForm(index)}
          name="checkbox"
        />
        <label htmlFor={index} className={`list__label list__label_${props.themeClass} ${element.checked ? 'checked' : ''}`}>
          {element.text}
        </label>
        <button className="list__delete" onClick={() => props.removeCharacter(index)}>
          <img src={cross} alt="cross" />
        </button>
      </div>
    );
  });

  return (
    <div className={`list list_${props.themeClass}`}>
      {rows}
      <OutputItems props={props} />
    </div>
  );
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

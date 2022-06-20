import { useState } from 'react';
import './Main.css';
import cross from '../../assets/icon-cross.svg';

const ActionOutputFormSubmit = (props) => {
  var countElementChecked = 0;

  const countItemsLeft = () => {
    props.formSubmit.forEach((element) => {
      const elementChecked = element.checked;

      if (!elementChecked) {
        countElementChecked++;
      } else {
        return;
      }
      return countElementChecked;
    });
  };
  countItemsLeft();

  return (
    <div className="status-items">
      <span className={`status-items__span status-items__span-${props.themeClass}`}>{countElementChecked} items left</span>
      <div className="status-items__buttons">
        <button className={`btn-1 status-items__status status-items__status-${props.themeClass}`} onClick={(e) => props.statusTodoItems(e.target)}>
          All
        </button>
        <button
          className={`btn-2 status-items__status status-items__status-${props.themeClass}`}
          data-id="active"
          onClick={(e) => props.statusTodoItems(e.target)}>
          Active
        </button>
        <button
          className={`btn-2 status-items__status status-items__status-${props.themeClass}`}
          data-id="completed"
          onClick={(e) => props.statusTodoItems(e.target)}>
          Completed
        </button>
      </div>

      <button className={`status-items__status status-items__status-${props.themeClass}`}>Clear Completed</button>
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

  const test = (element, index) => {
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
        <button className="list__delete" onClick={() => props.removeItems(index)}>
          <img src={cross} alt="cross" />
        </button>
      </div>
    );
  };

  // const rows = props.statusTodo.map((element, index) => {
  //   return (
  //     <div
  //       className={`list__items list__items-${props.themeClass}`}
  //       key={index}
  //       onMouseEnter={(e) => animationHoverOn(e.currentTarget.childNodes[2])}
  //       onMouseLeave={(e) => animationHoverOff(e.currentTarget.childNodes[2])}>
  //       <input
  //         id={index}
  //         type="checkbox"
  //         checked={element.checked}
  //         className={`list__checkbox list__checkbox_${props.themeClass}`}
  //         onChange={() => props.updateForm(index)}
  //         name="checkbox"
  //       />
  //       <label htmlFor={index} className={`list__label list__label_${props.themeClass} ${element.checked ? 'checked' : ''}`}>
  //         {element.text}
  //       </label>
  //       <button className="list__delete" onClick={() => props.removeItems(index)}>
  //         <img src={cross} alt="cross" />
  //       </button>
  //     </div>
  //   );
  // });

  // return <>{rows}</>;

  /**************TEST  *******/
  console.log(props.statusTodo);
  if (props.statusTodo === 'active') {
    const rows = props.formSubmit
      .filter((todo) => todo.checked === false)
      .map((element, index) => {
        return test(element, index);
      });
    return <>{rows}</>;
  } else if (props.statusTodo === 'completed') {
    const rows = props.formSubmit
      .filter((todo) => todo.checked === true)
      .map((element, index) => {
        return test(element, index);
      });
    return <>{rows}</>;
  } else if (props.statusTodo === 'all') {
    const rows = props.formSubmit.map((element, index) => {
      return test(element, index);
    });
    return <>{rows}</>;
  } else {
    return;
  }
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

  // const [statusTodo, setStatusTodo] = useState(formSubmit);
  const [statusTodo, setStatusTodo] = useState('all');
  // const [items, setItems] = useState(formSubmit);

  console.log('form', formSubmit);
  console.log('status', statusTodo);

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
    // console.log(items);
    let item = { ...items[index] };
    item.checked = !item.checked;
    items[index] = item;
    setFormSubmit(items);
    // setStatusTodo(items);
  };

  const removeItems = (index) => {
    const element = formSubmit;

    setFormSubmit(
      element.filter((items, i) => {
        return i !== index;
      })
    );

    // setStatusTodo(
    //   element.filter((items, i) => {
    //     return i !== index;
    //   })
    // );
  };

  const statusTodoItems = (e) => {
    // if (e.dataset.id === 'active') {
    //   setStatusTodo(formSubmit.filter((item) => item.checked === false));
    // } else if (e.dataset.id === 'completed') {
    //   setStatusTodo(formSubmit.filter((item) => item.checked === true));
    // } else {
    //   setStatusTodo(formSubmit);
    // }

    if (e.dataset.id === 'active') {
      setStatusTodo('active');
    } else if (e.dataset.id === 'completed') {
      setStatusTodo('completed');
    } else {
      setStatusTodo('all');
    }

    // console.log(statusTodo);
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
      <div className={`list list_${props.themeClass}`}>
        <OutputFormSubmit
          themeClass={props.themeClass}
          formSubmit={formSubmit}
          statusTodo={statusTodo}
          removeItems={removeItems}
          updateForm={updateForm}
          statusTodoItems={statusTodoItems}
        />
        <ActionOutputFormSubmit themeClass={props.themeClass} formSubmit={formSubmit} statusTodoItems={statusTodoItems} />
      </div>
    </main>
  );
};

export default Main;

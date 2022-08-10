import React from 'react';
import { useState } from 'react';
import './Main.css';
import TodoList from './TodoList';
import TodoFiltersStatus from './TodoFiltersStatus';
import useMediaQueries from './MediaQueries';

let nextId = 6;

const Main = ({ themeClass }) => {
  const [newTodoItem, setNewTodoItem] = useState('');
  const [todoItems, setTodoItems] = useState([
    { id: 0, text: 'Complete online JavaScript course', checked: true },
    { id: 1, text: 'Jog around the park 3x', checked: false },
    { id: 2, text: '10 minutes meditation', checked: false },
    { id: 3, text: 'Read for 1 hour', checked: false },
    { id: 4, text: 'Pick up groceries', checked: false },
    { id: 5, text: 'Complete Todo App on Frontend Mentor', checked: false },
  ]);

  const [todoFilter, setTodoFilter] = useState('all'); // all - completed - active

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newTodoItem !== '') {
      setTodoItems([...todoItems, { id: nextId++, text: newTodoItem, checked: false }]);
      setNewTodoItem('');
    }
  };

  const updateItem = (id) => {
    const newItems = todoItems.map((item) => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });

    setTodoItems(newItems);
  };

  const removeItem = (id) => {
    setTodoItems((items) => items.filter((it) => it.id !== id));
  };

  const removeCompletedItems = () => {
    setTodoItems((items) => items.filter((it) => !it.checked));
  };

  const countItemsLeft = todoItems.filter((it) => !it.checked).length;
  const mobileSize = useMediaQueries('(max-width: 768px)');

  return (
    <main>
      <form className={`form form_theme_${themeClass} `} onSubmit={onFormSubmit}>
        <span className={`form__circle form__circle_theme_${themeClass}`}></span>
        <input
          type="text"
          className={`form__input form__input_theme_${themeClass}`}
          value={newTodoItem}
          onChange={(e) => setNewTodoItem(e.target.value)}
          aria-label="create a new todo"
          placeholder="Create a new todo..."
        />
      </form>
      <div className={`todo todo_theme_${themeClass}`}>
        <TodoList themeClass={themeClass} todoItems={todoItems} todoFilter={todoFilter} updateItem={updateItem} removeItem={removeItem} />
        <div className="todo-filters">
          <span className={`todo-filters__items-left todo-filters__items-left_theme_${themeClass}`}>{countItemsLeft} items left</span>
          {!mobileSize && <TodoFiltersStatus todoFilter={todoFilter} setTodoFilter={setTodoFilter} themeClass={themeClass} />}
          <button className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass}`} onClick={() => removeCompletedItems()}>
            Clear Completed
          </button>
        </div>
      </div>
      {mobileSize && <TodoFiltersStatus todoFilter={todoFilter} setTodoFilter={setTodoFilter} themeClass={themeClass} />}
    </main>
  );
};

export default Main;

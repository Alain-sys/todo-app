import React from 'react';
import cross from '../../assets/icon-cross.svg';

const TodoItem = ({ item, themeClass, updateItem, removeItem }) => {
  const animationHoverOn = (e) => {
    e.style.opacity = '1';
  };

  const animationHoverOff = (e) => {
    e.style.opacity = '0';
  };

  return (
    <div
      className={`todo-items todo-items_theme_${themeClass}`}
      key={item.id}
      onMouseEnter={(e) => animationHoverOn(e.currentTarget.childNodes[2])}
      onMouseLeave={(e) => animationHoverOff(e.currentTarget.childNodes[2])}>
      <input
        id={item.id}
        type="checkbox"
        checked={item.checked}
        className={`todo-items__checkbox todo-items__checkbox_theme_${themeClass}`}
        onChange={() => updateItem(item.id)}
        name="checkbox"
      />
      <label htmlFor={item.id} className={`todo-items__label todo-items__label_theme_${themeClass} ${item.checked ? 'checked' : ''}`}>
        {item.text}
      </label>
      <button className="todo-items__delete" onClick={() => removeItem(item.id)} type="button">
        <img src={cross} alt="grey cross" />
      </button>
    </div>
  );
};

const TodoList = ({ todoItems, todoFilter, themeClass, updateItem, removeItem }) => {
  const filterTodoItems = (todo) => {
    if (todoFilter === 'active') {
      return !todo.checked;
    }
    if (todoFilter === 'completed') {
      return todo.checked;
    }

    return true;
  };

  return (
    <div className={`todo-list todo-list_theme_${themeClass}`}>
      {todoItems.filter(filterTodoItems).map((item) => (
        <TodoItem key={item.id} item={item} themeClass={themeClass} updateItem={updateItem} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default TodoList;

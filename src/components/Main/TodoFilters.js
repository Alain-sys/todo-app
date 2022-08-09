import React from 'react';

const TodoFilters = ({ countItemsLeft, themeClass, setTodoFilter, removeCompletedItems, todoFilter }) => {
  return (
    <div className="todo-filters">
      <span className={`todo-filters__items-left todo-filters__items-left_theme_${themeClass}`}>{countItemsLeft} items left</span>
      <div className="todo-filters__status">
        <button
          className={`todo-filters__status-buttons  todo-filters__status-buttons_theme_${themeClass}  ${todoFilter === 'all' ? 'active' : ''}`}
          onClick={() => setTodoFilter('all')}>
          All
        </button>
        <button
          className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass} ${todoFilter === 'active' ? 'active' : ''}`}
          onClick={() => setTodoFilter('active')}>
          Active
        </button>
        <button
          className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass}  ${todoFilter === 'completed' ? 'active' : ''}`}
          onClick={() => setTodoFilter('completed')}>
          Completed
        </button>
      </div>

      <button className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass}`} onClick={() => removeCompletedItems()}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFilters;

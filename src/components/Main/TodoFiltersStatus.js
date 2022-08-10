import React from 'react';

const TodoFiltersStatus = ({ todoFilter, setTodoFilter, themeClass }) => {
  return (
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
  );
};

export default TodoFiltersStatus;

import React from 'react';

const TodoFiltersStatus = ({ todoFilter, setTodoFilter, themeClass }) => {
  return (
    <div className={`todo-filters__status todo-filters__status_theme_${themeClass}`}>
      <button
        className={`todo-filters__status-buttons  todo-filters__status-buttons_theme_${themeClass}  ${todoFilter === 'all' ? 'active' : ''}`}
        onClick={() => setTodoFilter('all')}
        type="button">
        All
      </button>
      <button
        className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass} ${todoFilter === 'active' ? 'active' : ''}`}
        onClick={() => setTodoFilter('active')}
        type="button">
        Active
      </button>
      <button
        className={`todo-filters__status-buttons todo-filters__status-buttons_theme_${themeClass}  ${todoFilter === 'completed' ? 'active' : ''}`}
        onClick={() => setTodoFilter('completed')}
        type="button">
        Completed
      </button>
    </div>
  );
};

export default TodoFiltersStatus;

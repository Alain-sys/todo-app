import { useState } from 'react';
import './Main.css';

const Main = (props) => {
  const [initialValue, setInitialValue] = useState('');
  const [formSubmit, setFormSubmit] = useState([]);
  const handleChange = (e) => {
    setInitialValue(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmit([...formSubmit, initialValue]);
    setInitialValue('');
  };

  return (
    <main>
      <div className={`main__user-value main__user-value-${props.themeClass}`}>
        <form onSubmit={onFormSubmit}>
          <button type="button"></button>
          <input type="text" value={initialValue} onChange={(e) => handleChange(e.target.value)}></input>
        </form>
      </div>
    </main>
  );
};

export default Main;

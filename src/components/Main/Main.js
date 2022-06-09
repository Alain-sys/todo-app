import { useState } from 'react';
import './Main.css';

const Main = (props) => {
  const [userValue, setUserValue] = useState('');

  return (
    <main>
      <div>
        <button type="button"></button>
        <p></p>
      </div>
    </main>
  );
};

export default Main;

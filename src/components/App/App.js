import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { getTricks } from '../../ApiCalls';

function App() {
  const [tricks, setTricks] = useState(null);

  useEffect(() => {
    getTricks('http://localhost:3001/api/v1/tricks').then((tricks) =>
      setTricks(tricks)
    );
  }, []);

  const cardElements = tricks
    ? tricks.map((trick) => {
        return (
          <Card
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            id={trick.id}
            key={trick.id}
          />
        );
      })
    : null;

  return (
    <div className='App'>
      <h1>Sick Trick Wish List</h1>
      <section className='trick-section'>{cardElements}</section>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';
import { getTricks } from '../../ApiCalls';

function App() {
  const [tricks, setTricks] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTricks('http://localhost:3001/api/v1/tricks')
      .then((tricks) => setTricks(tricks))
      .catch((error) => setError('There was an error. Please try again.'));
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
      <Form setTricks={setTricks} prevTricks={[tricks]} />
      <section className='trick-section'>
        {tricks ? cardElements : <p>{error}</p>}
      </section>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './Form.css';
import { addTrick } from '../../ApiCalls';

const Form = ({ setTricks, prevTricks }) => {
  const [stance, setStance] = useState('');
  const [trickName, setTrickName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const newTrick = {
    stance: stance,
    name: trickName,
    obstacle: obstacle,
    tutorial: link,
    key: prevTricks.length + 1,
    id: prevTricks.length + 1,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrick('http://localhost:3001/api/v1/tricks', newTrick).catch((error) =>
      setError('Something went wrong. Please try again!')
    );
    setTricks((prevTricks) => [
      ...prevTricks,
      {
        stance: stance,
        name: trickName,
        obstacle: obstacle,
        tutorial: link,
        key: prevTricks.length + 1,
        id: prevTricks.length + 1,
      },
    ]);
    clearForm();
  };

  const clearForm = () => {
    setStance('');
    setTrickName('');
    setObstacle('');
    setLink('');
  };

  return (
    <section className='form-section'>
      <form onSubmit={handleSubmit}>
        <select
          type='dropdown'
          name='stance'
          id='stance'
          onChange={(event) => setStance(event.target.value)}
          value={stance}
          required
        >
          <option value='' disabled selected>
            Choose Your Stance
          </option>
          <option value='Regular'>Regular</option>
          <option value='Switch'>Switch</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
          onChange={(event) => setTrickName(event.target.value)}
          value={trickName}
          required
        />
        <select
          type='dropdown'
          name='obstacle'
          id='obstacle'
          onChange={(event) => setObstacle(event.target.value)}
          value={obstacle}
          required
        >
          <option value='' disabled selected>
            Choose Your Obstacle
          </option>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
        <input
          type='text'
          placeholder='Link to Tutorial'
          onChange={(event) => setLink(event.target.value)}
          value={link}
          required
        />
        <button type='submit'>Send It!</button>
      </form>
      {error ? <p>{error}</p> : null}
    </section>
  );
};

export default Form;

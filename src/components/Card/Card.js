import './Card.css';

const Card = ({ stance, name, obstacle, tutorial }) => {
  return (
    <div className='card'>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to tutorial:</p>
      <p>{tutorial}</p>
    </div>
  );
};

export default Card;

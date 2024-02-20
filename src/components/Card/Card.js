import './Card.css';

const Card = ({ stance, name, obstacle, tutorial }) => {
  return (
    <div className='card'>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
};

export default Card;

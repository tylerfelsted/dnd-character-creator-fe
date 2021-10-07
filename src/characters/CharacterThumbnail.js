import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CharacterThumbnail({character}) {
  const { name, level, race } = character;
  const characterClass = character.class;
  const history = useHistory();

  function handleClick() {
    history.push(`/characters/${character._id}`);
  }

  return (
    <Card onClick={handleClick} className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Level {level} {race} {characterClass}</Card.Text>
      </Card.Body>
    </Card>
  )
  
}

export default CharacterThumbnail;
import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BackendAPI from '../api/backendAPI';
import UserContext from '../hooks/userContext';

function CharacterThumbnail({character}) {
  const { currentUser } = useContext(UserContext);
  const { name, level, race } = character;
  const characterClass = character.class;
  const history = useHistory();

  function handleClick() {
    history.push(`/characters/${character._id}`);
  }

  async function handleDelete(e) {
    e.preventDefault();
    await BackendAPI.deleteCharacter(currentUser._id, character._id);
    history.push('/')
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Level {level} {race} {characterClass}</Card.Text>
        <Button onClick={handleClick}>View Details</Button>
        <Button onClick={handleDelete} className="btn-danger">Delete</Button>
      </Card.Body>
    </Card>
  )
  
}

export default CharacterThumbnail;
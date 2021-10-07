import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import UserContext from '../hooks/userContext';
import Input from '../helpers/Input';
import ChooseAbilityScores from './ChooseAbilityScores';
import ChooseClass from './ChooseClass';
import ChooseRace from './ChooseRace';
import BackendAPI from '../api/backendAPI';
import DndAPI from '../api/dndAPI';

function CreateCharacter() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();
  const initialValues = {
    name: "",
    level: 1,
    hitPoints: 0,
    armorClass: 10,
    class: "Barbarian",
    race: "Dragonborn"
  }
  const [ formData, setFormData ] = useState(initialValues);
  const initialAbilityScores = {
    str: 0,
    dex: 0,
    int: 0,
    wis: 0,
    con: 0,
    cha: 0
  }
  const [ abilityScores, setAbilityScores] = useState(initialAbilityScores);

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await DndAPI.request(`/api/races/${formData.race.toLowerCase()}`);
    const characterData = {
      ...formData,
      hitPoints: {
        max: formData.hitPoints,
        current: formData.hitPoints
      },
      speed: res.speed,
      abilityScores
    }
    const characterId = await BackendAPI.createCharacter(currentUser._id, characterData);
    history.push(`/characters/${characterId}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input id="name" label="Name" type="text" value={formData.name} handleChange={handleChange}/>
        <Input id="level" label="Level" type="number" value={formData.level} handleChange={handleChange}/>
        <Input id="hitPoints" label="Hit Points" type="number" value={formData.hitPoints} handleChange={handleChange} />
        <Input id="armorClass" label="Armor Class" type="number" value={formData.armorClass} handleChange={handleChange} />
        <ChooseRace formData={formData} setFormData={setFormData} />
        <ChooseClass formData={formData} setFormData={setFormData} />
        <ChooseAbilityScores formData={abilityScores} setFormData={setAbilityScores} />
        <Button type="submit">Create Character!</Button>
      </Form>
    </Container>
  )

}

export default CreateCharacter;
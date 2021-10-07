import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import UserContext from "../../hooks/userContext";
import BackendAPI from "../../api/backendAPI";

function HitPoints({ hitPoints, character, setCharacter }) {
  const { currentUser } = useContext(UserContext);
  const { max, current } = hitPoints
  const [ modifier, setModifier ] = useState(0);

  function handleChange(e) {
    setModifier(e.target.value);
  }

  async function heal() {
    const newHitPoints = {
      ...hitPoints,
      current: Number(current) + Number(modifier)
    }
    setCharacter({...character, hitpoints: newHitPoints});
    await BackendAPI.updateCharacter(currentUser._id, character._id, {hitPoints: newHitPoints});
  }

  async function damage() {
    const newHitPoints = {
      ...hitPoints,
      current: Number(current) - Number(modifier)
    }
    setCharacter({...character, hitpoints: newHitPoints});
    await BackendAPI.updateCharacter(currentUser._id, character._id, {hitPoints: newHitPoints});
  }

  return (
    <>
      <div>
        HP: {current}/{max}
        <Button onClick={heal} className="mx-2 btn-sm btn-success">Heal</Button>
        <input id="modifier" type="number" value={modifier} onChange={handleChange} />
        <Button onClick={damage} className="mx-2 btn-sm btn-danger">Damage</Button>
      </div>
    </>
  )
}

export default HitPoints;
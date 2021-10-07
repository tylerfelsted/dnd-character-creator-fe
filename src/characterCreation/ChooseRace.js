import { useState, useEffect } from 'react';
import DndAPI from '../api/dndAPI';

function ChooseRace({ formData, setFormData }) {
  const [ raceOptions, setRaceOptions ] = useState();

  useEffect(() => {
    async function apiCall() {
      try{
        const classes = await DndAPI.request('/api/races');
        setRaceOptions(classes.results);
      } catch(err) {
        console.error(err);
      }
    }
    apiCall();
  }, [])

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  if(!raceOptions) return 'loading...'

  return (
    <select name="race" value={formData.race} onChange={handleChange}>
      {raceOptions.map(o => (
        <option key={o.index} value={o.name}>{o.name}</option>
      ))}
    </select>
  )
}

export default ChooseRace;
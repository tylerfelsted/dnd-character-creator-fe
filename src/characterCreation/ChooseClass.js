import { useState, useEffect } from 'react';
import DndAPI from '../api/dndAPI';

function ChooseClass({ formData, setFormData }) {
  const [ classOptions, setClassOptions ] = useState();

  useEffect(() => {
    async function apiCall() {
      try{
        const classes = await DndAPI.request('/api/classes');
        setClassOptions(classes.results);
      } catch(err) {
        console.error(err);
      }
    }
    apiCall();
  }, [])

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  if(!classOptions) return 'loading...'

  return (
    <select name="class" value={formData.class} onChange={handleChange}>
      {classOptions.map(o => (
        <option key={o.index} value={o.name}>{o.name}</option>
      ))}
    </select>
  )
}

export default ChooseClass;
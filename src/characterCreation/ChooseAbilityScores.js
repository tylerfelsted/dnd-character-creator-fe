import Input from "../helpers/Input";

function ChooseAbilityScores({ formData, setFormData}) {

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <>
      <Input id="str" label="Strength" type="number" value={formData.str} handleChange={handleChange}/>
      <Input id="int" label="Intelligence" type="number" value={formData.int} handleChange={handleChange}/>
      <Input id="wis" label="Wisdom" type="number" value={formData.wis} handleChange={handleChange}/>
      <Input id="con" label="Constitution" type="number" value={formData.con} handleChange={handleChange}/>
      <Input id="dex" label="Dexterity" type="number" value={formData.dex} handleChange={handleChange}/>
      <Input id="cha" label="Charisma" type="number" value={formData.cha} handleChange={handleChange}/>
    </>
  )
}

export default ChooseAbilityScores;
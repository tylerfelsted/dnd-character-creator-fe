import { useEffect, useState } from 'react';
import DndAPI from '../../api/dndAPI';

function Skills({ abilityScores, abilityModifiers, proficiencies, proficiencyBonus }) {
  const [ skills, setSkills ] = useState();

  useEffect(() => {
    async function apiCall() {
      try {
        let results = await DndAPI.request('/api/skills');
        const skills = [];

        for(let s of results.results) {
          const skill = await DndAPI.request(s.url);
          skills.push({
            index: skill.index,
            name: skill.name,
            ability: skill.ability_score.index
          });
        }
        setSkills(skills);
      } catch(err) {
        console.error(err);
      }
    }
    apiCall();
  }, [])

  if(!skills) return "loading..."

  return (
    <div>
      Skills:
      <ul>
        {skills.map(s => {

          return <li key={s.index}>{s.name}: {abilityModifiers[s.ability]}</li>
        })}
      </ul>
    </div>
  )
}

export default Skills;
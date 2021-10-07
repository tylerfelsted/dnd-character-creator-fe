import AbilityScores from './characterData/AbilityScores';
import HitPoints from './characterData/HitPoints';
import Proficiencies from './characterData/Proficiencies';
import Languages from './characterData/Languages';
import Spells from './characterData/Spells';
import Equipment from './characterData/Equipment';

function RenderCharacter({ character }) {
  const { name, level, race, abilityScores, hitPoints, proficiencies, languages, spells, spellSlots, equipment} = character;
  const characterClass = character.class;
  return (
    <>
      <h1>{name}</h1>
      <div>Level {level} {race} {characterClass}</div>
      <HitPoints hitPoints={hitPoints} />
      <AbilityScores abilityScores={abilityScores}/>
      <Proficiencies proficiencies={proficiencies} />
      <Languages languages={languages} />
      <Spells spells={spells} spellSlots={spellSlots} />
      <Equipment equipment={equipment} />
    </>
  )
}

export default RenderCharacter;
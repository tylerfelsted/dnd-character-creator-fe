import AbilityScores from './characterData/AbilityScores';
import HitPoints from './characterData/HitPoints';
import Skills from './characterData/Skills';

function RenderCharacter({ character }) {
  const { name, level, race, armorClass, speed, abilityScores, hitPoints, proficiencies, languages, spells, spellSlots, equipment} = character;
  const characterClass = character.class;
  const proficiencyBonus = Math.ceil(level/4)+1;
  const abilityModifiers = {};
  for(let ability in abilityScores) {
    const abilityModifier = Math.floor((abilityScores[ability]-10)/2);
    abilityModifiers[ability] = abilityModifier;
  }

  return (
    <>
      <h1>{name}</h1>
      <div>Level {level} {race} {characterClass}</div>
      <div>Proficiency Bonus: +{proficiencyBonus}</div>
      <div>Armor Class: {armorClass}</div>
      <div>Initiative: {(abilityModifiers.dex > 0) ? '+' : ''}{abilityModifiers.dex}</div>
      <div>Speed: {speed}ft</div>
      <HitPoints hitPoints={hitPoints} />
      <AbilityScores abilityScores={abilityScores} abilityModifiers={abilityModifiers}/>
      <Skills abilityModifiers={abilityModifiers}/>
    </>
  )
}

export default RenderCharacter;
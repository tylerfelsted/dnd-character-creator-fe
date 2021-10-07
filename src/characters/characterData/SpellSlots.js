function SpellSlots({ spellSlots }) {
  const spellLevels = Object.keys(spellSlots);
  return (
    <div className="text-start">Spell Slots: 
      <ul>
        {spellLevels.map(s => (
          <li key={s}>Level {s}: {spellSlots[s].used}/{spellSlots[s].total}</li>
        ))}
      </ul>
    </div>
  )
}

export default SpellSlots;
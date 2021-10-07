function Spells({spells, spellSlots}) {
  const spellLevels = Object.keys(spells);

  return (
    <div className="text-start">Spells: 
      <ul>
        {spellLevels.map(l => (
          <li key={l}>{(l === '0') ? 'Cantrips' : `Level ${l}: ${spellSlots[l].used}/${spellSlots[l].total}`} 
            <ul>
              {spells[l].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Spells;
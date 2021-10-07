function Proficiencies({ proficiencies }) {
  const { skills, savingThrows, armor, weapons, tools } = proficiencies;
  return (
    <div className="text-start">
      Proficiencies:
      <ul>
        <li><ul>
          Skills
          {skills.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul></li>
        <li><ul>
          Saving Throws
          {savingThrows.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul></li>
        <li><ul>
          Armor
          {armor.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul></li>
        <li><ul>
          Weapons
          {weapons.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul></li>
        <li><ul>
          Tools
          {tools.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul></li>
      </ul>
    </div>
  )
}

export default Proficiencies;
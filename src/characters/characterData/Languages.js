function Languages({ languages }) {
  return (
    <div className="text-start">
      Languages:
      <ul>
        {languages.map(l => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  )
}

export default Languages;
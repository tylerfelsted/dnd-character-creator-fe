function Equipment({ equipment }) {
  return (
    <div>
      Equipment:
      <ul>
        {equipment.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default Equipment;
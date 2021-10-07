function HitPoints({hitPoints}) {
  const { max, current } = hitPoints

  return (
    <div>HP: {current}/{max}</div>
  )
}

export default HitPoints;
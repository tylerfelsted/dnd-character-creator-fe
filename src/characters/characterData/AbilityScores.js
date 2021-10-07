import { Row, Col, Container } from 'react-bootstrap';

function AbilityScores({abilityScores}) {
  const { str, dex, wis, int, con, cha } = abilityScores;
  return (
    <Container>
      <Row>
        <Col>
          <Row>Strength: {str}</Row>
          <Row>Modifier: {Math.floor((str - 10)/2)}</Row>
        </Col>
        <Col>
          <Row>Dexterity: {dex}</Row>
          <Row>Modifier: {Math.floor((dex - 10)/2)}</Row>
        </Col>
        <Col>
          <Row>Constitution: {con}</Row>
          <Row>Modifier: {Math.floor((con - 10)/2)}</Row>
        </Col>
        <Col>
          <Row>Intelligence: {int}</Row>
          <Row>Modifier: {Math.floor((int - 10)/2)}</Row>
        </Col>
        <Col>
          <Row>Wisdom: {wis}</Row>
          <Row>Modifier: {Math.floor((wis - 10)/2)}</Row>
        </Col>
        <Col>
          <Row>Charisma: {cha}</Row>
          <Row>Modifier: {Math.floor((cha - 10)/2)}</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AbilityScores;
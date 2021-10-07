import { useContext } from 'react';
import UserContext from './hooks/userContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Home() {
  const { currentUser } = useContext(UserContext);

  if(currentUser) {
    return (
      <Container>
        <Row className="justify-content-center">
        <Col md="auto"><h1>Character Creator</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><p>The (unofficial) character creator for D&D 5e.</p></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><h2>Welcome Back, {currentUser.username}</h2></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><Button as={NavLink} to="/characters">View Characters</Button></Col>
        <Col md="auto"><Button as={NavLink} to="/characters/new">Create New Character</Button></Col>
      </Row>
      </Container>
    )
  }
  

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto"><h1>Character Creator</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><p>The (unofficial) character creator for D&D 5e.</p></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><Button as={NavLink} to="/login">Log In</Button></Col>
        <Col md="auto"><Button as={NavLink} to="/register">Register</Button></Col>
      </Row>
    </Container>
  )
}

export default Home;
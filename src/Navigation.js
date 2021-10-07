import { useContext } from 'react';
import UserContext from './hooks/userContext';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Character Creator</Navbar.Brand>
        <Nav>
          
          {!currentUser ? 
            <>
              <Nav.Link as={NavLink} to='/login'>Log In</Nav.Link>
              <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
            </>
            : 
            <> 
              <Nav.Link as={NavLink} to='/characters'>View Characters</Nav.Link>
              <Nav.Link as={NavLink} to='/characters/new'>Create a Character</Nav.Link>
              <Nav.Link as={NavLink} onClick={logout} to='/'>Log Out {currentUser.username}</Nav.Link>
            </>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;
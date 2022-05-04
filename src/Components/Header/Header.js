import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebaseinit';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light">
  <Container>
  <Navbar.Brand as={Link} to="/">Bunch</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/uploadpd">Upload product</Nav.Link>
      <Nav.Link as={Link} to="/inventory/:id">Mange in</Nav.Link>
      
    </Nav>
    <Nav>
      {
        user? <button onClick={()=>signOut(auth)}>logout</button>: <Nav.Link as={Link} to="/login">Log in</Nav.Link>
      }
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
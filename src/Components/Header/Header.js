import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebaseinit';
import './header.css'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar className='red-color' collapseOnSelect expand="lg" bg="light">
  <Container>
  <Navbar.Brand as={Link} to="/">Bunch</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/manageInventory">Manage inventory</Nav.Link>
      
    </Nav>
    <Nav>
      {
        user? <button className='logout-button rounded' onClick={()=>signOut(auth)}>Log out</button>: <Nav.Link as={Link} to="/login">Log in</Nav.Link>
      }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
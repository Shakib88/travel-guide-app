import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

  const {user, logOut} = useAuth();

    return (
        <Navbar bg="dark"expand="lg" variant="dark" sticky="top" >
  <Container>
    <Navbar.Brand as={Link} to="/home">Tour services</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      
      <Navbar.Brand as={Link} to="/addtour">Add Tripe </Navbar.Brand>
      <Navbar.Brand as={Link} to="/management">Management </Navbar.Brand>

      <Navbar.Brand as={Link} to="/about">Contract Us</Navbar.Brand>
        
      </Nav>
      <Navbar.Text>

      {user?.email ?
        <Button onClick={logOut} variant="light">LogOut</Button>:
        <Navbar.Brand as={Link} to="/login">Login</Navbar.Brand>
        }

      </Navbar.Text>

      <Navbar.Text>
        Signed in as:{user?.displayName}
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
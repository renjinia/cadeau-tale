import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="light" expand="lg" className="px-4 ">
      <Navbar.Brand href="/" className="d-flex align-items-center text-white">
        <img
          style={{ width: '60px', height: 'auto', marginRight: '10px' }}
          src={icon}
          alt=""
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Cadeau-tale</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center ">
          <Nav.Link href="/home" className="mx-2 text-white">Home</Nav.Link>
          <Nav.Link href="/" className="mx-2 text-white">About</Nav.Link>
          <Nav.Link href="/cart" className="mx-2 text-white"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

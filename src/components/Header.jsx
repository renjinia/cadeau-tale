import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';


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
          <Link style={{textDecoration:'none'}} to={'/home'} className="mx-2 text-white ">Home</Link>
          <Link style={{textDecoration:'none'}}  to={'/'}className="mx-2 text-white">About</Link>
          <Link style={{textDecoration:'none'}}  to={'/cart'} className="mx-2 text-white"><i class="fa-solid fa-cart-shopping"></i></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (

<div className="bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      {/* Intro Section */}
      <div className="col-lg-4 col-md-6 mb-4">
        <h5 className="text-white font-weight-bold d-flex align-items-center">
          <img
            style={{ width: '60px', height: 'auto', marginRight: '10px' }}
            src={icon}
            alt="Cadeau-tale Icon"
          />
          Cadeau-tale
        </h5>
        <p>
          Cadeau-Tale is a personalized gift platform that transforms your special moments into heartwarming stories.
        </p>
        <p>Create customized books, cards, or keepsakes with unique narratives tailored for your loved ones.</p>
        <p>
          Perfect for birthdays, anniversaries, or any occasion, Cadeau-Tale blends creativity and sentiment to craft
          unforgettable memories that resonate for a lifetime.
        </p>
      </div>

      {/* Links Section */}
      <div className="col-lg-2 col-md-6 mb-4">
        <h5 className="text-white font-weight-bold">Links</h5>
        <ul className="list-unstyled">
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Landing Page
            </Link>
          </li>
          <li>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
              Cart Page
            </Link>
          </li>
        </ul>
      </div>

      {/* Guides Section */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="text-white font-weight-bold">Guides</h5>
        <ul className="list-unstyled">
          <li>
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
            >
              Birthday Card
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
            >
              Frames
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
            >
              Mini Album
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="text-white font-weight-bold">Contact Us</h5>
        <form className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email..."
              aria-label="Email"
            />
            <button className="btn btn-info" type="button">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </form>
        <p>
          <i className="fa-solid fa-envelope me-2"></i> 
          <a style={{ textDecoration: 'none', color: 'white' }} href="mailto:revathyranganath00@gmail.com">
            revathyranganath00@gmail.com
          </a>
        </p>
        <p>
          <i className="fa-solid fa-phone me-2"></i>
          <a style={{ textDecoration: 'none', color: 'white' }} href="tel:+917736791818">
            +91 7736791818
          </a>
        </p>
        <p>
          <i className="fa-solid fa-location-dot me-2"></i> Perumon Road, Kollam, Kerala
        </p>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="d-flex justify-content-center align-items-center mb-3">
      <a
        style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a
        style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/cadeau_tale?igsh=Ymw4d3dxcXR6M3cy"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}
        target="_blank"
        rel="noreferrer"
        href="https://www.twitter.com"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
    </div>

    {/* Footer Note */}
    <p className="text-center">
      &copy; 2025 Cadeau-Tale. All Rights Reserved.
    </p>
  </div>
</div>

  
  );
};

export default Footer;

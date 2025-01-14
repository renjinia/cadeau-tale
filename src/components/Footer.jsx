import React from 'react';
import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          {/* Intro Section */}
          <div className="col-lg-4 col-md-3 ">
            <h5 className="text-white font-weight-bold d-flex align-items-center">
              <img
                style={{ width: '60px', height: 'auto', marginRight: '10px' }}
                src={icon}
                alt=""
              />
              Cadeau-tale
            </h5>
            <p>
              Cadeau-Tale is a personalized gift platform that transforms your special moments into heartwarming stories. 
            </p>
            <p>Create customized books, cards, or keepsakes with unique narratives tailored for your loved ones.  </p>
            <p>Perfect for birthdays, anniversaries, or any occasion, Cadeau-Tale blends creativity and 
              sentiment to craft unforgettable memories that resonate for a lifetime.</p>
           
          </div>

          {/* Guides Section */}
          <div className="col-lg-4 col-md-6 mt-2  ">
            <h5 className="text-white font-weight-bold">Services</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
                >
                  Birthday Card
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
                >
                  Polaroid Kit
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href="https://www.instagram.com/reel/DCeuEOEqfsE/?igsh=MTdmaHB0czk4OGhwNQ=="
                >
                  Customised Frame
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-12 mt-2">
            <h5 className="text-white font-weight-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href=""
                >
                  <i className="fa-solid fa-envelope me-2"></i> revathyranganath00@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href=""
                >
                  <i className="fa-solid fa-phone me-2"></i> +91 7736791818
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  rel=""
                  href=""
                >
                  <i className="fa-solid fa-location-dot me-2"></i> perumon Road, Kollam, Kerala
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="d-flex justify-content-center align-items-center ">
          <a
            style={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            rel=""
            href="https://www.instagram.com/cadeau_tale?igsh=Ymw4d3dxcXR6M3cy/"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            className="ms-3"
            style={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            rel=""
            href="https://www.instagram.com/cadeau_tale?igsh=Ymw4d3dxcXR6M3cy"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="ms-3"
            style={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            rel=""
            href=""
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-2">
          &copy; 2025 cadeau-tale. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

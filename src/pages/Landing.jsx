import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import birthday from '../assets/birthdaycard.jpeg';
import frame from '../assets/frame.jpeg';
import hamper from '../assets/polaroid hamper.jpeg';
import minialbum from '../assets/hamper.jpeg';
import paperframe from '../assets/paper frame.jpeg';
import bottle from '../assets/bottle.jpeg';
import card from '../assets/card.jpeg';
import album from '../assets/minialbum.jpeg';
import vintage from '../assets/bdcard vintage theme.jpeg';
const Landing = () => {
  return (
    <>
      {/* Landing Section */}
      <div className="landing-background d-flex justify-content-center align-items-center text-white text-center vh-100">
        <Container>
          <h1 className="display-4 fw-bold text-white">WELCOME</h1>
          <p className="lead mt-3 text-black text-white">
            To Cadeau Tale, your destination for meaningful gifts and heartfelt stories! <br />
            Discover a curated collection of unique presents, each with its own tale to tell. From handcrafted treasures to personalized keepsakes, Cadeau Tale brings joy and connection to every occasion. Celebrate moments, create memories, and share the magic of giving!
          </p>
          <Link to="/home" className="btn btn-dark">
            Get Started
          </Link>
        </Container>
      </div>

      {/* ProductSection */}
      <div  className="container mt-5 mb-5">
        <h2 className="text-center mb-4 display-5 fw-bold">Our Products</h2>
        <Row className="g-4 mt-4">
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                variant="top"
                src={birthday}
              />
              <Card.Body>
                <Card.Title className='fw-bold'>Birthday Card</Card.Title>
                <Card.Text>
                Celebrate life's special moments with our handcrafted birthday cards. Each card is designed to add a personal touch to your heartfelt wishes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                variant="top"
                src={frame}
              />
              <Card.Body>
                <Card.Title className='fw-bold'>Photo Frame</Card.Title>
                <Card.Text>
                Preserve cherished memories with our beautifully crafted photo frames, designed to add elegance and warmth to any space. Perfect for showcasing your most treasured moments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                variant="top"
                src={hamper}
              />
              <Card.Body>
                <Card.Title className='fw-bold'>Polaroid Hamper</Card.Title>
                <Card.Text>
                Delight in a personalized Polaroid Hamper featuring cherished moments captured in vintage-style prints. Perfect for creating lasting memories with a touch of nostalgia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                variant="top"
                src={minialbum}
              />
              <Card.Body>
                <Card.Title className='fw-bold'>Minialbum</Card.Title>
                <Card.Text>
                Preserve your cherished memories with our handcrafted mini albums, perfect for showcasing life's special moments. Compact, stylish, and heartfelt!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    {/* gallery section */}
      <div  className="container  mb-5 ">
        <h2 className="text-center mt-5 display-5 fw-bold">Gallery</h2>
      <Row className='g-4 mt-4'>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={bottle}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={paperframe}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={card}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={frame}
            />
          </Card>
        </Col>
      </Row>
      <Row className='g-4 mt-2'>
      <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={hamper}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={birthday}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={album}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className='h-100'>
            <Card.Img style={{width:'100%', height:'350px ' ,objectFit: 'cover'}}
              variant="top"
              src={vintage}
            />
          </Card>
        </Col>
      </Row>

    </div>

    </>
  );
};

export default Landing;

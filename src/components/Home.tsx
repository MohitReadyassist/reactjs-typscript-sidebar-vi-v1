import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => (
  <div className="Home" data-testid="Home">
    Home Component
    <Container fluid>
      <Row>
        <Col md={4} className="card">
          <p className="card-content">
            <span className="count">16</span>
            <span className="count-name">Courses</span>
          </p>
        </Col>
        <Col md={4} className="card">
          <p className="card-content">
            <span className="count">100</span>
            <span className="count-name">Attendees</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="card">
          <p className="card-content">
            <span className="count">45</span>
            <span className="count-name">Certificates</span>
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

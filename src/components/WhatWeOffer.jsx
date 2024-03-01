import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Offer.css'; // Import custom styles for animations and additional styling


// using bootstrap react 
    
function WhatWeOffer() {
  return (
    <section id="offer-section" className="py-5">
      <Container>
        <h2 className="text-center mb-5 heading">What We Offer</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={6} className="mb-4">
            <a href="/explore-ai-opportunities" className="text-decoration-none">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title className="offer-title">Explore AI Opportunities</Card.Title>
                  <Card.Text>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <a href="/design-ai-trust-layer" className="text-decoration-none">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title className="offer-title">Design AI Trust Layer</Card.Title>
                  <Card.Text>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <a href="/scalability-focused-solutions" className="text-decoration-none">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title className="offer-title">Scalability-Focused Solutions</Card.Title>
                  <Card.Text>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <a href="/end-to-end-workflow-automation" className="text-decoration-none">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title className="offer-title">End to End Workflow Automation</Card.Title>
                  <Card.Text>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default WhatWeOffer;   // exporting component

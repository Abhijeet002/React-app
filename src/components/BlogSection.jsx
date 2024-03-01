import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/BlogSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// using react bootstrap
function BlogSection() {
  return (
    <section id="blog-section" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 heading">Explore Our Blogs</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={6} className="mb-4">
            <Card className="blog-card">
              <Card.Body>
                <Card.Title>Speaking SQL: Turning Natural Language into Database Dialogues</Card.Title>
                <Card.Text>
                  Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.
                </Card.Text>
                <Button variant="primary" href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <Card className="blog-card">
              <Card.Body>
                <Card.Title>Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</Card.Title>
                <Card.Text>
                  Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.
                </Card.Text>
                <Button variant="primary" href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <Card className="blog-card">
              <Card.Body>
                <Card.Title>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</Card.Title>
                <Card.Text>
                  Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.
                </Card.Text>
                <Button variant="primary" href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} className="mb-4">
            <Card className="blog-card">
              <Card.Body>
                <Card.Title>Privacy Matters: Balancing Privacy, Price, and Performance</Card.Title>
                <Card.Text>
                  Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.
                </Card.Text>
                <Button variant="primary" href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BlogSection;    // exporting component



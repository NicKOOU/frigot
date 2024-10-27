// src/IndexSections/Contact.js
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardBody } from 'reactstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => (
  <section className="section section-lg bg-light" id="contact">
    <Container className="text-center">
      <h2 className="display-4" style={{ color: "#007bff" }}>Contactez-nous</h2>
      <p className="lead text-muted">
        Vous avez un projet en tête ? Contactez-nous pour obtenir un devis ou pour en savoir plus sur nos services.
      </p>
      
      {/* Informations de Contact Direct */}
      <Row className="mb-5">
        <Col md="4" className="text-center">
          <Card className="shadow border-0">
            <CardBody>
              <FaPhoneAlt style={{ color: "#007bff" }} size="2rem" />
              <h5 className="mt-3" style={{ color: "#007bff" }}>Téléphone</h5>
              <p className="text-muted">+33 1 23 45 67 89</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="text-center">
          <Card className="shadow border-0">
            <CardBody>
              <FaEnvelope style={{ color: "#007bff" }} size="2rem" />
              <h5 className="mt-3" style={{ color: "#007bff" }}>Email</h5>
              <p className="text-muted">contact@cooltechsolutions.com</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="text-center">
          <Card className="shadow border-0">
            <CardBody>
              <FaMapMarkerAlt style={{ color: "#007bff" }} size="2rem" />
              <h5 className="mt-3" style={{ color: "#007bff" }}>Adresse</h5>
              <p className="text-muted">123 Rue des Frigorifiques, Paris, France</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Formulaire de Contact */}
      <Row className="justify-content-center">
        <Col lg="8">
          <Form>
            <FormGroup>
              <Input
                type="text"
                placeholder="Votre nom"
                required
                className="form-control-lg"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                placeholder="Votre email"
                required
                className="form-control-lg"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                placeholder="Votre message"
                rows="5"
                required
                className="form-control-lg"
              />
            </FormGroup>
            <Button style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} type="submit" className="btn-lg mt-3">
              Envoyer le message
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Réseaux Sociaux et Carte */}
      <Row className="text-center mt-5">
        <Col>
          <h5 className="mb-4" style={{ color: "#007bff" }}>Retrouvez-nous sur</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/cooltechsolutions" target="_blank" rel="noopener noreferrer">
              <FaFacebook size="2rem" className="mx-2" style={{ color: "#007bff" }} />
            </a>
            <a href="https://www.linkedin.com/company/cooltechsolutions" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2rem" className="mx-2" style={{ color: "#007bff" }} />
            </a>
            <a href="https://www.instagram.com/cooltechsolutions" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="2rem" className="mx-2" style={{ color: "#007bff" }} />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531568042!3d-37.81627944202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e09f1e1d77c5!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510722806043"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;

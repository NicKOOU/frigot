// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, Form, FormGroup, Input, Label } from "reactstrap";
import IceCube from "../components/IceCube";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Background Animation */}
      <section className="hero-section position-relative">
        <div className="background-animation" />
        <Container className="text-center">
          <h1 className="display-3 text-primary">泰州优库冷库设备有限公司</h1>
          <p className="lead text-muted">Les experts en installation de chambres frigorifiques</p>
          <IceCube />
          <Button color="primary" href="#services" className="mt-4">
            Découvrir nos services
          </Button>
          <div className="statistics mt-5 d-flex justify-content-center">
            <div className="stat">
              <h3 className="text-primary">500+</h3>
              <p className="text-muted">Projets réalisés</p>
            </div>
            <div className="stat mx-4">
              <h3 className="text-primary">98%</h3>
              <p className="text-muted">Clients satisfaits</p>
            </div>
            <div className="stat">
              <h3 className="text-primary">24/7</h3>
              <p className="text-muted">Support disponible</p>
            </div>
          </div>
        </Container>
        <div className="scroll-down text-center">
          <a href="#services"><i className="ni ni-bold-down text-primary"></i></a>
        </div>
      </section>

      {/* Services Section with Detailed Cards */}
      <section id="services" className="section-services bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-4 text-primary">Nos Services</h2>
              <p className="text-muted">Découvrez notre gamme complète de solutions frigorifiques.</p>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <Card className="service-card shadow border-0">
                <CardBody className="text-center">
                  <i className="ni ni-building text-primary" style={{ fontSize: "3rem" }} />
                  <CardTitle tag="h5" className="mt-3">Installation de chambres froides</CardTitle>
                  <CardText className="text-muted">
                    Des solutions adaptées pour maintenir vos produits à la température idéale.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="service-card shadow border-0">
                <CardBody className="text-center">
                  <i className="ni ni-support-16 text-primary" style={{ fontSize: "3rem" }} />
                  <CardTitle tag="h5" className="mt-3">Maintenance et support</CardTitle>
                  <CardText className="text-muted">
                    Un service rapide et fiable pour assurer la continuité de vos installations.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="service-card shadow border-0">
                <CardBody className="text-center">
                  <i className="ni ni-delivery-fast text-primary" style={{ fontSize: "3rem" }} />
                  <CardTitle tag="h5" className="mt-3">Réparation d’urgence</CardTitle>
                  <CardText className="text-muted">
                    Intervention rapide en cas de panne pour protéger vos stocks.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section with Animated Quote and Customer Photos */}
      <section id="testimonials" className="section-testimonials text-center">
        <Container>
          <h2 className="display-4 text-primary mb-5">Témoignages</h2>
          <Row>
            <Col md="6" className="testimonial">
              <p className="testimonial-text">
                “Service impeccable et installation rapide. Je recommande vivement CoolTech Solutions pour leurs compétences et leur réactivité.”
              </p>
              <p className="testimonial-author">- Jean Dupont, Client</p>
              <img src="https://img.freepik.com/free-vector/woman-traditional-costume_1308-175771.jpg" alt="Jean Dupont" className="testimonial-image" />
            </Col>
            <Col md="6" className="testimonial">
              <p className="testimonial-text">
                “Grâce à CoolTech Solutions, notre entreprise est équipée d'une chambre froide fiable et économique. Merci à toute l’équipe!”
              </p>
              <p className="testimonial-author">- Marie Martin, Client</p>
              <img src="https://img.freepik.com/free-vector/smiling-boy-traditional-chinese-attire_1308-174664.jpg" alt="Marie Martin" className="testimonial-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section with Form and Map */}
      <section id="contact" className="section-contact bg-light text-center">
        <Container>
          <h2 className="display-4 text-primary mb-5">Contactez-nous</h2>
          <p className="lead text-muted">Vous avez un projet en tête ? Contactez-nous pour obtenir un devis.</p>
          <Row>
            <Col md="6" className="text-left">
              <Form>
                <FormGroup>
                  <Label for="name">Nom</Label>
                  <Input type="text" name="name" id="name" placeholder="Votre nom" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Votre email" />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Votre message" />
                </FormGroup>
                <Button color="primary">Envoyer</Button>
              </Form>
            </Col>
            <Col md="6">
              <iframe
                title="map"
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
    </div>
  );
};

export default Home;

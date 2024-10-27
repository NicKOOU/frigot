// src/IndexSections/Testimonials.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Testimonials = () => (
  <section className="section bg-white" id="testimonials">
    <Container className="text-center">
      <h2 className="display-4" style={{ color: "#007bff" }}>Témoignages</h2>
      <Row>
        <Col md="6" className="mb-4">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Service impeccable et installation rapide. Je recommande vivement 泰州优库冷库设备有限公司 pour leurs compétences et leur réactivité.”
            </p>
            <p className="testimonial-author" style={{ color: "#007bff", fontWeight: "bold" }}>- Jean Dupont, Client</p>
            <img src="https://img.freepik.com/free-vector/smiling-boy-traditional-chinese-attire_1308-174664.jpg" alt="Jean Dupont" width={50} className="testimonial-image" />
          </div>
        </Col>
        <Col md="6" className="mb-4">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Grâce à 泰州优库冷库设备有限公司, notre entreprise est équipée d'une chambre froide fiable et économique. Merci à toute l’équipe!”
            </p>
            <p className="testimonial-author" style={{ color: "#007bff", fontWeight: "bold" }}>- Marie Martin, Client</p>
            <img src="https://img.freepik.com/free-vector/woman-traditional-costume_1308-175771.jpg" alt="Marie Martin" width={50} className="testimonial-image" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;

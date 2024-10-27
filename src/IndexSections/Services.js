// src/IndexSections/Services.js
import React from 'react';
import { Row, Col } from 'reactstrap';

const Services = () => (
  <Row className="text-center">
    <Col md="4">
      <i className="ni ni-building text-primary" style={{ fontSize: "3rem" }} />
      <h5 className="mt-3">Installation de chambres froides</h5>
      <p className="text-muted">Solutions adaptées pour vos produits</p>
    </Col>
    <Col md="4">
      <i className="ni ni-support-16 text-primary" style={{ fontSize: "3rem" }} />
      <h5 className="mt-3">Maintenance et support</h5>
      <p className="text-muted">Service rapide et fiable</p>
    </Col>
    <Col md="4">
      <i className="ni ni-delivery-fast text-primary" style={{ fontSize: "3rem" }} />
      <h5 className="mt-3">Réparation d’urgence</h5>
      <p className="text-muted">Intervention rapide en cas de panne</p>
    </Col>
  </Row>
);

export default Services;

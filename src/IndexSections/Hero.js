// src/IndexSections/Hero.js
import React from 'react';
import { Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import IceCube from '../components/IceCube';

const Hero = () => (
  <section className="section section-hero">
    <Container className="text-center">
      <h1 className="display-3" style={{ color: "#007bff" }}>泰州优库冷库设备有限公司</h1>
      <p className="lead text-muted">Les experts en installation de chambres frigorifiques</p>
      <IceCube />
      <Button href="#services" className="mt-4" style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}>
        Découvrir nos services
      </Button>
    </Container>

    {/* Section d'introduction avec galerie de photos */}
    <Container className="mt-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Nos Réalisations</h2>
      <Row>
        <Col md="4" className="mb-4">
          <Card className="shadow border-0">
            <CardImg
              top
              width="100%"
              src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/23632/Concepteur-de-chambres-froides-%C3%A0-Carros12.jpg"
              alt="Installation de chambre froide"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#007bff" }}>Chambre froide pour produits alimentaires</CardTitle>
              <CardText className="text-muted">
                Installation de chambres froides pour garantir la fraîcheur des produits dans les entrepôts alimentaires.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4">
          <Card className="shadow border-0">
            <CardImg
              top
              width="100%"
              src="https://www.eurofroid.net/public/img/medium/Maintenancechambrefroidejpg_601a539d4d81c.jpg"
              alt="Entrepôt frigorifique"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#007bff" }}>Entrepôt frigorifique industriel</CardTitle>
              <CardText className="text-muted">
                Solutions de stockage à basse température pour les grandes industries pharmaceutiques et agroalimentaires.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4">
          <Card className="shadow border-0">
            <CardImg
              top
              width="100%"
              src="https://www.froid-climat.com/ressources/images/0f148c0b8e5e.jpg"
              alt="Maintenance frigorifique"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#007bff" }}>Maintenance et suivi</CardTitle>
              <CardText className="text-muted">
                Un service de maintenance fiable pour garantir la performance et la durabilité des installations frigorifiques.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;

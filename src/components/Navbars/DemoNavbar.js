// src/components/CustomNavbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledCollapse,
  Row,
  Col,
  Button,
} from "reactstrap";

const CustomNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  return (
    <>
      <style>
        {`
          .navbar-main {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10;
            background: rgba(255, 255, 255, 0.95); /* Fond blanc avec transparence */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre légère */
          }

          .company-name {
            color: #007bff;
            font-weight: bold;
            margin-left: 10px;
          }

          .nav-link-inner--text {
            color: #007bff !important;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .nav-link-inner--text:hover {
            color: #0056b3 !important;
          }

          .btn-contact {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .btn-contact:hover {
            background-color: #0056b3;
          }

          .navbar-collapse-header {
            background: #e8f4ff;
          }

          .collapse-brand img {
            height: 40px;
          }

          .collapse-close button {
            background: transparent;
          }
        `}
      </style>

      <header className="header-global">
        <Navbar
          className="navbar-main"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            {/* Logo de l'entreprise */}
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="Entreprise Frigorifique Logo"
                src={require("assets/img/brand/logo.webp")}
                style={{ height: "50px" }}
              />
              <span className="company-name">泰州优库冷库设备有限公司</span>
            </NavbarBrand>

            {/* Bouton de bascule pour mobile */}
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>

            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              {/* Menu pour mobile */}
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="Entreprise Frigorifique Logo"
                        src={require("assets/img/brand/logo.webp")}
                        style={{ height: "40px" }}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              {/* Liens de navigation principaux */}
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <NavLink href="#home" className="nav-link-inner--text">
                    Accueil
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#services" className="nav-link-inner--text">
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about" className="nav-link-inner--text">
                    À propos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact" className="nav-link-inner--text">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>

              {/* Bouton de contact */}
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-contact"
                    href="#contact"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-send" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demander un devis</span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default CustomNavbar;

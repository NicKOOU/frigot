import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    // Styles en ligne
    const footerStyle = {
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(10px)",
      padding: "2rem 0",
      borderTop: "1px solid #e0e0e0",
    };

    const frostCardStyle = {
      overflow: "hidden",
      borderRadius: "12px",
    };

    const frostImgStyle = {
      transition: "transform 0.4s ease",
      width: "100%",
    };

    const frostButtonStyle = {
      background: "rgba(173, 216, 230, 0.3)",
      border: "1px solid #87cefa",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    };

    const frostIconStyle = {
      color: "#fff",
    };

    const navLinkStyle = {
      color: "#87cefa",
      fontWeight: "bold",
    };

    const navLinkHoverStyle = {
      color: "#4682b4",
      textDecoration: "underline",
    };

    return (
      <>
        <footer style={footerStyle}>
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card style={frostCardStyle} className="shadow border-0">
                  <Link to="/services">
                    <CardImg
                      alt="泰州优库冷库设备有限公司 - Services"
                      src="https://www.techni-contact.com/ressources/images/produits/zoom/installation-chambre-froide-11266665-2.jpg"
                      style={frostImgStyle}
                      className="frost-img"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card style={frostCardStyle} className="shadow border-0">
                  <Link to="/about">
                    <CardImg
                      alt="泰州优库冷库设备有限公司 - About Us"
                      src="https://le-de.cdn-website.com/c8ad0579cbe64e9ca3c8aca36b2672fd/dms3rep/multi/opt/d536a3ec2a354f0cbd8db1f9c0737537-640w.jpg"
                      style={frostImgStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Merci pour votre confiance !
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Restons connectés pour vous offrir le meilleur service.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  style={frostButtonStyle}
                  className="btn-icon-only rounded-circle"
                  href="https://www.facebook.com/cooltechsolutions"
                  id="tooltipFacebook"
                  target="_blank"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#87cefa";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "rgba(173, 216, 230, 0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" style={frostIconStyle} />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipFacebook">
                  Suivez-nous sur Facebook
                </UncontrolledTooltip>
                <Button
                  style={{ ...frostButtonStyle, marginLeft: "0.5rem" }}
                  className="btn-icon-only rounded-circle"
                  href="https://www.instagram.com/cooltechsolutions"
                  id="tooltipInstagram"
                  target="_blank"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#87cefa";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "rgba(173, 216, 230, 0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" style={frostIconStyle} />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipInstagram">
                  Suivez-nous sur Instagram
                </UncontrolledTooltip>
                <Button
                  style={{ ...frostButtonStyle, marginLeft: "0.5rem" }}
                  className="btn-icon-only rounded-circle"
                  href="https://www.linkedin.com/company/cooltechsolutions"
                  id="tooltipLinkedin"
                  target="_blank"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#87cefa";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "rgba(173, 216, 230, 0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" style={frostIconStyle} />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipLinkedin">
                  Connectez-vous sur LinkedIn
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()} 泰州优库冷库设备有限公司. Tous droits réservés.
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      to="/about"
                      tag={Link}
                      style={navLinkStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style = navLinkHoverStyle)
                      }
                    >
                      À propos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/services"
                      tag={Link}
                      style={navLinkStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style = navLinkHoverStyle)
                      }
                    >
                      Nos Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/contact"
                      tag={Link}
                      style={navLinkStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style = navLinkHoverStyle)
                      }
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/privacy-policy"
                      tag={Link}
                      style={navLinkStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style = navLinkHoverStyle)
                      }
                    >
                      Politique de confidentialité
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
